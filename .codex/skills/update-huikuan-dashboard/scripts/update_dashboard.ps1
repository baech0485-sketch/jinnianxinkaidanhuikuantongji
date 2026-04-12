$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

function Get-WorkspaceRoot {
  param([string]$StartDir)

  $current = Get-Item -LiteralPath $StartDir
  while ($current) {
    if (Test-Path -LiteralPath (Join-Path $current.FullName 'daily-dashboard\build_data.py')) {
      return $current.FullName
    }
    $current = $current.Parent
  }
  throw "Cannot locate workspace root from $StartDir"
}

$workspace = Get-WorkspaceRoot -StartDir $PSScriptRoot
$dashboardDir = Join-Path $workspace 'daily-dashboard'
$buildScript = Join-Path $dashboardDir 'build_data.py'
$testFile = Join-Path $dashboardDir 'test_build_data.py'
$indexFile = Join-Path $dashboardDir 'index.html'
$outputDir = Join-Path $workspace 'output\playwright'
$screenshotFile = Join-Path $outputDir 'daily-dashboard-latest.png'

$workbooks = Get-ChildItem -LiteralPath $workspace -Filter '*.xlsx' -File | Sort-Object Name
$currentWorkbook = $workbooks | Where-Object { $_.Name -like '2026*' } | Select-Object -First 1 -ExpandProperty FullName
$legacyWorkbook = $workbooks | Where-Object { $_.FullName -ne $currentWorkbook } | Select-Object -First 1 -ExpandProperty FullName

foreach ($path in @($workspace, $buildScript, $testFile, $indexFile, $currentWorkbook, $legacyWorkbook)) {
  if (-not $path -or -not (Test-Path -LiteralPath $path)) {
    throw "Missing required path: $path"
  }
}

if (-not (Test-Path -LiteralPath $outputDir)) {
  New-Item -ItemType Directory -Path $outputDir | Out-Null
}

$env:CURRENT_WORKBOOK = $currentWorkbook
$env:LEGACY_WORKBOOK = $legacyWorkbook
$env:WORKSPACE_DIR = $workspace
$env:SCREENSHOT_FILE = $screenshotFile

Push-Location $workspace
try {
  python $buildScript
  if ($LASTEXITCODE -ne 0) { throw "build_data.py failed with exit code $LASTEXITCODE" }

  python -m pytest $testFile
  if ($LASTEXITCODE -ne 0) { throw "pytest failed with exit code $LASTEXITCODE" }

  $pageUri = ([System.Uri]$indexFile).AbsoluteUri
  npx playwright screenshot --browser=chromium $pageUri $screenshotFile
  if ($LASTEXITCODE -ne 0) { throw "playwright screenshot failed with exit code $LASTEXITCODE" }

  @'
import json
import os
from pathlib import Path

import pandas as pd

current_path = Path(os.environ["CURRENT_WORKBOOK"])
legacy_path = Path(os.environ["LEGACY_WORKBOOK"])
workspace = Path(os.environ["WORKSPACE_DIR"])
screenshot = Path(os.environ["SCREENSHOT_FILE"])

current_summary = pd.read_excel(current_path, sheet_name=0).fillna("")
legacy_summary = pd.read_excel(legacy_path, sheet_name=0).fillna("")

result = {
    "cutoff_date": str(current_summary.iloc[1, 1]),
    "total_store_base": int(current_summary.iloc[2, 1]) + int(legacy_summary.iloc[3, 1]),
    "total_draw_count": int(current_summary.iloc[5, 1]) + int(legacy_summary.iloc[6, 1]),
    "total_repayment": round(float(current_summary.iloc[4, 1]) + float(legacy_summary.iloc[5, 1]), 2),
    "current_export_time": str(current_summary.iloc[6, 1]),
    "legacy_export_time": str(legacy_summary.iloc[7, 1]),
    "page_path": str(workspace / "daily-dashboard" / "index.html"),
    "screenshot_path": str(screenshot),
}
print(json.dumps(result, ensure_ascii=False, indent=2))
'@ | python -
  if ($LASTEXITCODE -ne 0) { throw "summary export failed with exit code $LASTEXITCODE" }
}
finally {
  Pop-Location
}
