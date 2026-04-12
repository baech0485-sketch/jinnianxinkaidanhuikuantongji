from __future__ import annotations

from pathlib import Path

import pandas as pd


def pct(part: float, whole: float) -> float:
    return round(part / whole * 100, 2) if whole else 0.0


def growth(first: float, last: float) -> float:
    return round((last / first - 1) * 100, 2) if first else 0.0


def enrich_daily(frame: pd.DataFrame) -> pd.DataFrame:
    frame = frame.sort_values("date").reset_index(drop=True).copy()
    frame["label"] = frame["date"].dt.strftime("%m/%d")
    frame["cumulativeRepayment"] = frame["repayment"].cumsum()
    frame["cumulativeDrawStores"] = frame["drawStores"].cumsum()
    frame["drawRolling"] = frame["drawStores"].rolling(7, min_periods=1).mean().round(2)
    frame["repaymentRolling"] = frame["repayment"].rolling(7, min_periods=1).mean().round(2)
    return frame


def summarize_dataset(frame: pd.DataFrame, total_open_stores: int) -> dict:
    peak_draw = frame.loc[frame["drawStores"].idxmax()]
    peak_repayment = frame.loc[frame["repayment"].idxmax()]
    first7_draw = round(float(frame.head(7)["drawStores"].mean()), 2)
    last7_draw = round(float(frame.tail(7)["drawStores"].mean()), 2)
    first7_repayment = round(float(frame.head(7)["repayment"].mean()), 2)
    last7_repayment = round(float(frame.tail(7)["repayment"].mean()), 2)
    mt_amount = round(float(frame["mtRepayment"].sum()), 2)
    elm_amount = round(float(frame["elmRepayment"].sum()), 2)
    return {
        "totalOpenStores": int(total_open_stores),
        "latestStoreBase": int(frame.iloc[-1]["storeBase"]),
        "totalReportDays": int(len(frame)),
        "totalDrawStoreCount": int(frame["drawStores"].sum()),
        "totalRepayment": round(float(frame["repayment"].sum()), 2),
        "avgDailyDrawStores": round(float(frame["drawStores"].mean()), 2),
        "avgDailyRepayment": round(float(frame["repayment"].mean()), 2),
        "medianDailyDrawStores": round(float(frame["drawStores"].median()), 2),
        "medianDailyRepayment": round(float(frame["repayment"].median()), 2),
        "activeDrawDays": int((frame["drawStores"] > 0).sum()),
        "activeRepaymentDays": int((frame["repayment"] > 0).sum()),
        "first7DrawAvg": first7_draw,
        "last7DrawAvg": last7_draw,
        "drawGrowthPct": growth(first7_draw, last7_draw),
        "first7RepaymentAvg": first7_repayment,
        "last7RepaymentAvg": last7_repayment,
        "repaymentGrowthPct": growth(first7_repayment, last7_repayment),
        "peakDrawDate": peak_draw["date"].strftime("%Y-%m-%d"),
        "peakDrawLabel": peak_draw["date"].strftime("%m/%d"),
        "peakDrawValue": int(peak_draw["drawStores"]),
        "peakRepaymentDate": peak_repayment["date"].strftime("%Y-%m-%d"),
        "peakRepaymentLabel": peak_repayment["date"].strftime("%m/%d"),
        "peakRepaymentValue": round(float(peak_repayment["repayment"]), 2),
        "mtAmountTotal": mt_amount,
        "elmAmountTotal": elm_amount,
        "mtDrawStoreTotal": int(frame["mtDrawStores"].sum()),
        "elmDrawStoreTotal": int(frame["elmDrawStores"].sum()),
        "mtAmountSharePct": pct(mt_amount, mt_amount + elm_amount),
    }


def load_current_dataset(workbook_path: Path) -> dict:
    daily = pd.read_excel(workbook_path, sheet_name="日报").fillna(0)
    summary_sheet = pd.read_excel(workbook_path, sheet_name="汇总").fillna("")
    notes_sheet = pd.read_excel(workbook_path, sheet_name="统计口径").fillna("")
    summary_map = dict(zip(summary_sheet["指标"], summary_sheet["数值"]))
    daily["统计日期"] = pd.to_datetime(daily["统计日期"])
    frame = pd.DataFrame(
        {
            "date": daily["统计日期"],
            "newStores": daily["当日开单店铺数"].astype(int),
            "storeBase": daily["累计开单店铺数"].astype(int),
            "drawStores": daily["当日抽点店铺数"].astype(int),
            "repayment": daily["当日回款总额"].astype(float),
            "mtDrawStores": daily["美团抽点店铺数"].astype(int),
            "mtRepayment": daily["美团回款总额"].astype(float),
            "elmDrawStores": daily["饿了么抽点店铺数"].astype(int),
            "elmRepayment": daily["饿了么回款总额"].astype(float),
        }
    )
    return {
        "key": "current",
        "label": "今年新开单",
        "sourceFile": workbook_path.name,
        "exportTime": str(summary_map["导出时间"]),
        "daily": enrich_daily(frame),
        "summary": summarize_dataset(enrich_daily(frame), int(summary_map["起始日期后开单店铺总数"])),
        "notes": [{"source": "今年新开单", "label": row["项目"], "text": row["说明"]} for _, row in notes_sheet.iterrows()],
    }


def load_legacy_dataset(workbook_path: Path) -> dict:
    daily = pd.read_excel(workbook_path, sheet_name="日报").fillna(0)
    summary_sheet = pd.read_excel(workbook_path, sheet_name="汇总").fillna("")
    notes_sheet = pd.read_excel(workbook_path, sheet_name="统计口径").fillna("")
    summary_map = dict(zip(summary_sheet["指标"], summary_sheet["数值"]))
    daily["统计日期"] = pd.to_datetime(daily["统计日期"])
    frame = pd.DataFrame(
        {
            "date": daily["统计日期"],
            "newStores": [None] * len(daily),
            "storeBase": daily["遗留店铺总数"].astype(int),
            "drawStores": daily["当日抽点店铺数"].astype(int),
            "repayment": daily["当日回款总额"].astype(float),
            "mtDrawStores": daily["美团抽点店铺数"].astype(int),
            "mtRepayment": daily["美团回款总额"].astype(float),
            "elmDrawStores": daily["饿了么抽点店铺数"].astype(int),
            "elmRepayment": daily["饿了么回款总额"].astype(float),
        }
    )
    return {
        "key": "legacy",
        "label": "去年遗留",
        "sourceFile": workbook_path.name,
        "exportTime": str(summary_map["导出时间"]),
        "daily": enrich_daily(frame),
        "summary": summarize_dataset(enrich_daily(frame), int(summary_map["遗留店铺总数"])),
        "notes": [{"source": "去年遗留", "label": row["项目"], "text": row["说明"]} for _, row in notes_sheet.iterrows()],
    }


def build_total_dataset(current: dict, legacy: dict) -> dict:
    merged = current["daily"].merge(legacy["daily"], on="date", suffixes=("_current", "_legacy"))
    frame = pd.DataFrame(
        {
            "date": merged["date"],
            "newStores": merged["newStores_current"].astype(int),
            "storeBase": (merged["storeBase_current"] + merged["storeBase_legacy"]).astype(int),
            "drawStores": (merged["drawStores_current"] + merged["drawStores_legacy"]).astype(int),
            "repayment": merged["repayment_current"] + merged["repayment_legacy"],
            "mtDrawStores": (merged["mtDrawStores_current"] + merged["mtDrawStores_legacy"]).astype(int),
            "mtRepayment": merged["mtRepayment_current"] + merged["mtRepayment_legacy"],
            "elmDrawStores": (merged["elmDrawStores_current"] + merged["elmDrawStores_legacy"]).astype(int),
            "elmRepayment": merged["elmRepayment_current"] + merged["elmRepayment_legacy"],
        }
    )
    total_frame = enrich_daily(frame)
    return {
        "key": "total",
        "label": "总数据",
        "sourceFile": f"{current['sourceFile']} + {legacy['sourceFile']}",
        "exportTime": max(current["exportTime"], legacy["exportTime"]),
        "daily": total_frame,
        "summary": summarize_dataset(total_frame, current["summary"]["totalOpenStores"] + legacy["summary"]["totalOpenStores"]),
        "notes": current["notes"] + legacy["notes"],
    }


def build_table_records(frame: pd.DataFrame) -> list[dict]:
    records = []
    for _, row in frame.iterrows():
        records.append(
            {
                "date": row["date"].strftime("%Y-%m-%d"),
                "label": row["label"],
                "newStores": None if pd.isna(row["newStores"]) else int(row["newStores"]),
                "storeBase": int(row["storeBase"]),
                "drawStores": int(row["drawStores"]),
                "drawRolling": round(float(row["drawRolling"]), 2),
                "repayment": round(float(row["repayment"]), 2),
                "repaymentRolling": round(float(row["repaymentRolling"]), 2),
                "cumulativeRepayment": round(float(row["cumulativeRepayment"]), 2),
                "cumulativeDrawStores": int(row["cumulativeDrawStores"]),
                "mtDrawStores": int(row["mtDrawStores"]),
                "mtRepayment": round(float(row["mtRepayment"]), 2),
                "elmDrawStores": int(row["elmDrawStores"]),
                "elmRepayment": round(float(row["elmRepayment"]), 2),
            }
        )
    return records
