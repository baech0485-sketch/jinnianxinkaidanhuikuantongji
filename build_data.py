from __future__ import annotations

import sys
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent
if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))

from dashboard_data_builder import build_dashboard_data, write_data_file


def main() -> None:
    current_workbook = BASE_DIR.parent / "2026年3月开单店铺每日抽点与回款累计统计.xlsx"
    legacy_workbook = BASE_DIR.parent / "去年遗留店铺自2026年3月起每日抽点与回款统计.xlsx"
    output = BASE_DIR / "data.js"
    write_data_file(build_dashboard_data(current_workbook, legacy_workbook), output)
    print(f"已生成数据文件：{output}")


if __name__ == "__main__":
    main()
