from __future__ import annotations

import json
from pathlib import Path

from dashboard_datasets import build_table_records, build_total_dataset, load_current_dataset, load_legacy_dataset, pct


LINE_COLORS = {"total": "#1f2430", "current": "#3a6fdd", "legacy": "#c47d1e"}


def format_money(value: float) -> str:
    return f"¥{value:,.2f}"


def format_count(value: float, digits: int = 0) -> str:
    return f"{value:,.{digits}f}" if digits else f"{int(round(value)):,}"


def build_headline_cards(total: dict, current: dict, legacy: dict) -> list[dict]:
    legacy_share = pct(legacy["summary"]["totalRepayment"], total["summary"]["totalRepayment"])
    return [
        {"label": "总店铺基数", "value": format_count(total["summary"]["latestStoreBase"]), "note": f"去年遗留 {format_count(legacy['summary']['totalOpenStores'])} + 今年新开 {format_count(current['summary']['totalOpenStores'])}", "tone": "accent"},
        {"label": "总累计抽点次数", "value": format_count(total["summary"]["totalDrawStoreCount"]), "note": f"今年新开 {format_count(current['summary']['totalDrawStoreCount'])} / 去年遗留 {format_count(legacy['summary']['totalDrawStoreCount'])}", "tone": "blue"},
        {"label": "总累计回款金额", "value": format_money(total["summary"]["totalRepayment"]), "note": f"日均 {format_money(total['summary']['avgDailyRepayment'])}", "tone": "good"},
        {"label": "今年新开累计回款", "value": format_money(current["summary"]["totalRepayment"]), "note": f"近7日日均 {format_money(current['summary']['last7RepaymentAvg'])}", "tone": "blue"},
        {"label": "去年遗留累计回款", "value": format_money(legacy["summary"]["totalRepayment"]), "note": f"近7日日均 {format_money(legacy['summary']['last7RepaymentAvg'])}", "tone": "accent"},
        {"label": "遗留回款贡献占比", "value": f"{legacy_share:.1f}%", "note": "当前总回款仍以去年遗留店铺为主", "tone": "gold"},
    ]


def build_chart_line(dataset: dict, field: str) -> dict:
    frame = dataset["daily"].iloc[:-1].copy() if len(dataset["daily"]) > 1 else dataset["daily"].copy()
    peak_row = frame.loc[frame[field].idxmax()]
    return {
        "dataset": dataset["key"],
        "label": dataset["label"],
        "color": LINE_COLORS[dataset["key"]],
        "totalValue": round(float(frame[field].sum()), 2),
        "averageValue": round(float(frame[field].mean()), 2),
        "last7Average": round(float(frame.tail(7)[field].mean()), 2),
        "latestValue": round(float(frame.iloc[-1][field]), 2),
        "peak": {"date": peak_row["date"].strftime("%Y-%m-%d"), "label": peak_row["date"].strftime("%m/%d"), "value": round(float(peak_row[field]), 2)},
        "series": [{"date": row["date"].strftime("%Y-%m-%d"), "label": row["label"], "value": round(float(row[field]), 2)} for _, row in frame.iterrows()],
    }


def build_charts(datasets: dict) -> list[dict]:
    charts = []
    latest_date = datasets["total"]["daily"].iloc[-1]["date"].strftime("%Y-%m-%d")
    for key, title, subtitle, kind, field in [
        ("dailyDrawStores", "每日抽点店铺数对比", f"同一日期对比今年新开单、去年遗留与总数据走势。图表已排除 {latest_date}，避免缺少美团数据导致失真。", "count", "drawStores"),
        ("dailyRepayment", "每日回款金额对比", f"同一日期对比今年新开单、去年遗留与总数据回款金额。图表已排除 {latest_date}，避免缺少美团数据导致失真。", "money", "repayment"),
    ]:
        lines = [build_chart_line(datasets[name], field) for name in ("total", "current", "legacy")]
        charts.append({"key": key, "title": title, "subtitle": subtitle, "kind": kind, "peak": max(lines[0]["series"], key=lambda item: item["value"]), "lines": lines})
    return charts


def build_insights(total: dict, current: dict, legacy: dict) -> list[dict]:
    return [
        {"title": "遗留贡献占比", "value": f"{pct(legacy['summary']['totalRepayment'], total['summary']['totalRepayment']):.1f}%", "metric": f"回款 {format_money(legacy['summary']['totalRepayment'])} / 抽点 {format_count(legacy['summary']['totalDrawStoreCount'])} 次", "body": "去年遗留店铺仍是当前总盘回款主力，说明存量盘稳定性直接决定整体结果。", "tone": "accent"},
        {"title": "新开爬坡速度", "value": f"+{current['summary']['repaymentGrowthPct']:.1f}%", "metric": f"{format_money(current['summary']['first7RepaymentAvg'])} → {format_money(current['summary']['last7RepaymentAvg'])}", "body": "今年新开单回款从前 7 天的低基数快速爬升到最近 7 天的四位数水平，新增门店正在逐步兑现。", "tone": "blue"},
        {"title": "总盘峰值分离", "value": total["summary"]["peakDrawLabel"], "metric": f"抽点峰值 {format_count(total['summary']['peakDrawValue'])} 家；金额峰值 {total['summary']['peakRepaymentLabel']} {format_money(total['summary']['peakRepaymentValue'])}", "body": "合并后抽点峰值和金额峰值不在同一天，说明门店活跃度与当日金额兑现并非完全同步，需要分别观察。", "tone": "gold"},
        {"title": "总盘近7日走势", "value": f"+{total['summary']['drawGrowthPct']:.1f}%", "metric": f"{format_count(total['summary']['first7DrawAvg'], 2)} 家/日 → {format_count(total['summary']['last7DrawAvg'], 2)} 家/日", "body": "总抽点店铺数近 7 日均值仍在抬升，但金额增速已低于新开单单独口径，意味着总盘增量更多来自规模扩张而非单店效率提升。", "tone": "good"},
    ]


def build_dashboard_data(current_workbook: Path, legacy_workbook: Path) -> dict:
    current = load_current_dataset(current_workbook)
    legacy = load_legacy_dataset(legacy_workbook)
    total = build_total_dataset(current, legacy)
    datasets = {"total": total, "current": current, "legacy": legacy}
    return {
        "meta": {"title": "今年新开单与去年遗留店铺合并抽点回款看板", "dateRange": f"{total['daily'].iloc[0]['date'].strftime('%Y-%m-%d')} 至 {total['daily'].iloc[-1]['date'].strftime('%Y-%m-%d')}", "sourceFiles": [current["sourceFile"], legacy["sourceFile"]], "exportTimes": [current["exportTime"], legacy["exportTime"]]},
        "summary": {**total["summary"], "currentOpenStores": current["summary"]["totalOpenStores"], "legacyOpenStores": legacy["summary"]["totalOpenStores"]},
        "headlineCards": build_headline_cards(total, current, legacy),
        "charts": build_charts(datasets),
        "tables": {key: build_table_records(item["daily"]) for key, item in datasets.items()},
        "tableMeta": {"total": {"label": "总数据", "description": "总数据 = 去年遗留店铺 + 今年新开单店铺。"}, "current": {"label": "今年新开单", "description": "仅展示 2026 年 3 月起新开单店铺的每日表现。"}, "legacy": {"label": "去年遗留", "description": "仅展示去年遗留店铺自 2026 年 3 月起的每日表现。"}},
        "insights": build_insights(total, current, legacy),
        "notes": {"current": current["notes"], "legacy": legacy["notes"]},
    }


def write_data_file(data: dict, output_path: Path) -> None:
    content = (
        "// 文件规模例外说明\n"
        "// 类型：自动生成\n"
        "// 原因：由两份 Excel 数据自动导出，保留结构化 JSON 供静态页面直接加载。\n"
        "// 审批：@codex @2026-04-11\n"
        "// 计划：如后续接入接口，可替换为运行时请求。\n"
        f"window.dashboardData = {json.dumps(data, ensure_ascii=False, indent=2)};\n"
    )
    output_path.write_text(content, encoding="utf-8")
