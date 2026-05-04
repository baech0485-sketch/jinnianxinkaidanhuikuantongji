from pathlib import Path
import importlib.util

import pandas as pd


def load_module():
    module_path = Path(__file__).with_name("build_data.py")
    spec = importlib.util.spec_from_file_location("build_data", module_path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def build_expected_metrics(current_workbook: Path, legacy_workbook: Path) -> dict:
    current_summary = pd.read_excel(current_workbook, sheet_name="汇总").fillna("")
    legacy_summary = pd.read_excel(legacy_workbook, sheet_name="汇总").fillna("")
    current_daily = pd.read_excel(current_workbook, sheet_name="日报").fillna(0)
    legacy_daily = pd.read_excel(legacy_workbook, sheet_name="日报").fillna(0)

    current_map = dict(zip(current_summary["指标"], current_summary["数值"]))
    legacy_map = dict(zip(legacy_summary["指标"], legacy_summary["数值"]))
    for frame in (current_daily, legacy_daily):
        frame["统计日期"] = pd.to_datetime(frame["统计日期"])

    merged = current_daily[
        ["统计日期", "当日开单店铺数", "累计开单店铺数", "当日抽点店铺数", "当日回款总额"]
    ].merge(
        legacy_daily[
            ["统计日期", "遗留店铺总数", "当日抽点店铺数", "当日回款总额"]
        ],
        on="统计日期",
        suffixes=("_current", "_legacy"),
    )
    merged["total_draw"] = merged["当日抽点店铺数_current"] + merged["当日抽点店铺数_legacy"]
    merged["total_amount"] = merged["当日回款总额_current"] + merged["当日回款总额_legacy"]
    chart_merged = merged.iloc[:-1].copy()
    peak_draw_row = chart_merged.loc[chart_merged["total_draw"].idxmax()]
    peak_amount_row = chart_merged.loc[chart_merged["total_amount"].idxmax()]

    return {
        "total_open_stores": int(current_map["起始日期后开单店铺总数"]) + int(legacy_map["遗留店铺总数"]),
        "current_open_stores": int(current_map["起始日期后开单店铺总数"]),
        "legacy_open_stores": int(legacy_map["遗留店铺总数"]),
        "total_report_days": int(current_map["累计日报天数"]),
        "total_draw_store_count": int(current_map["累计抽点店铺次数"]) + int(legacy_map["遗留店铺累计抽点店铺次数"]),
        "total_repayment": round(float(current_map["累计回款总额"]) + float(legacy_map["遗留店铺累计回款总额"]), 2),
        "peak_draw_date": peak_draw_row["统计日期"].strftime("%Y-%m-%d"),
        "peak_draw_value": int(peak_draw_row["total_draw"]),
        "peak_amount_date": peak_amount_row["统计日期"].strftime("%Y-%m-%d"),
        "peak_amount_value": round(float(peak_amount_row["total_amount"]), 2),
        "table_row_count": len(merged),
        "chart_row_count": len(chart_merged),
        "latest_table_date": merged.iloc[-1]["统计日期"].strftime("%Y-%m-%d"),
        "latest_chart_date": chart_merged.iloc[-1]["统计日期"].strftime("%Y-%m-%d"),
        "legacy_first_draw": int(legacy_daily.iloc[0]["当日抽点店铺数"]),
    }


def test_build_dashboard_data_core_metrics():
    module = load_module()
    base_dir = Path(__file__).resolve().parent.parent
    current_workbook = base_dir / "2026年3月开单店铺每日抽点与回款累计统计.xlsx"
    legacy_workbook = base_dir / "去年遗留店铺自2026年3月起每日抽点与回款统计.xlsx"
    expected = build_expected_metrics(current_workbook, legacy_workbook)

    data = module.build_dashboard_data(current_workbook, legacy_workbook)

    assert data["summary"]["totalOpenStores"] == expected["total_open_stores"]
    assert data["summary"]["currentOpenStores"] == expected["current_open_stores"]
    assert data["summary"]["legacyOpenStores"] == expected["legacy_open_stores"]
    assert data["summary"]["totalReportDays"] == expected["total_report_days"]
    assert data["summary"]["totalDrawStoreCount"] == expected["total_draw_store_count"]
    assert round(data["summary"]["totalRepayment"], 2) == expected["total_repayment"]
    assert len(data["charts"]) == 2
    assert {line["dataset"] for line in data["charts"][0]["lines"]} == {"current", "legacy", "total"}
    assert data["charts"][0]["peak"]["date"] == expected["peak_draw_date"]
    assert data["charts"][0]["peak"]["value"] == expected["peak_draw_value"]
    assert data["charts"][1]["peak"]["date"] == expected["peak_amount_date"]
    assert round(data["charts"][1]["peak"]["value"], 2) == expected["peak_amount_value"]
    assert len(data["charts"][0]["lines"][0]["series"]) == expected["chart_row_count"]
    assert data["charts"][0]["lines"][0]["series"][-1]["date"] == expected["latest_chart_date"]
    assert data["tables"]["total"][-1]["date"] == expected["latest_table_date"]
    assert set(data["tables"].keys()) == {"total", "current", "legacy"}
    assert len(data["tables"]["total"]) == expected["table_row_count"]
    assert data["tables"]["legacy"][0]["drawStores"] == expected["legacy_first_draw"]
