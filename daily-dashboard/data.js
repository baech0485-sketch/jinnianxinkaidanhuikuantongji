// 文件规模例外说明
// 类型：自动生成
// 原因：由两份 Excel 数据自动导出，保留结构化 JSON 供静态页面直接加载。
// 审批：@codex @2026-04-11
// 计划：如后续接入接口，可替换为运行时请求。
window.dashboardData = {
  "meta": {
    "title": "今年新开单与去年遗留店铺合并抽点回款看板",
    "dateRange": "2026-03-01 至 2026-04-11",
    "sourceFiles": [
      "2026年3月开单店铺每日抽点与回款累计统计.xlsx",
      "去年遗留店铺自2026年3月起每日抽点与回款统计.xlsx"
    ],
    "exportTimes": [
      "2026/4/12 09:36:41",
      "2026/4/12 09:36:52"
    ]
  },
  "summary": {
    "totalOpenStores": 3088,
    "latestStoreBase": 3088,
    "totalReportDays": 42,
    "totalDrawStoreCount": 12660,
    "totalRepayment": 103923.06,
    "avgDailyDrawStores": 301.43,
    "avgDailyRepayment": 2474.36,
    "medianDailyDrawStores": 312.5,
    "medianDailyRepayment": 2530.77,
    "activeDrawDays": 42,
    "activeRepaymentDays": 42,
    "first7DrawAvg": 247.57,
    "last7DrawAvg": 319.57,
    "drawGrowthPct": 29.08,
    "first7RepaymentAvg": 2241.01,
    "last7RepaymentAvg": 2400.68,
    "repaymentGrowthPct": 7.12,
    "peakDrawDate": "2026-04-10",
    "peakDrawLabel": "04/10",
    "peakDrawValue": 378,
    "peakRepaymentDate": "2026-03-28",
    "peakRepaymentLabel": "03/28",
    "peakRepaymentValue": 3081.43,
    "mtAmountTotal": 75952.62,
    "elmAmountTotal": 27970.44,
    "mtDrawStoreTotal": 8832,
    "elmDrawStoreTotal": 3828,
    "mtAmountSharePct": 73.09,
    "currentOpenStores": 510,
    "legacyOpenStores": 2578
  },
  "headlineCards": [
    {
      "label": "总店铺基数",
      "value": "3,088",
      "note": "去年遗留 2,578 + 今年新开 510",
      "tone": "accent"
    },
    {
      "label": "总累计抽点次数",
      "value": "12,660",
      "note": "今年新开 3,769 / 去年遗留 8,891",
      "tone": "blue"
    },
    {
      "label": "总累计回款金额",
      "value": "¥103,923.06",
      "note": "日均 ¥2,474.36",
      "tone": "good"
    },
    {
      "label": "今年新开累计回款",
      "value": "¥26,154.66",
      "note": "近7日日均 ¥1,066.31",
      "tone": "blue"
    },
    {
      "label": "去年遗留累计回款",
      "value": "¥77,768.40",
      "note": "近7日日均 ¥1,334.37",
      "tone": "accent"
    },
    {
      "label": "遗留回款贡献占比",
      "value": "74.8%",
      "note": "当前总回款仍以去年遗留店铺为主",
      "tone": "gold"
    }
  ],
  "charts": [
    {
      "key": "dailyDrawStores",
      "title": "每日抽点店铺数对比",
      "subtitle": "同一日期对比今年新开单、去年遗留与总数据走势。图表已排除 2026-04-11，避免缺少美团数据导致失真。",
      "kind": "count",
      "peak": {
        "date": "2026-04-10",
        "label": "04/10",
        "value": 378.0
      },
      "lines": [
        {
          "dataset": "total",
          "label": "总数据",
          "color": "#1f2430",
          "totalValue": 12511.0,
          "averageValue": 305.15,
          "last7Average": 347.57,
          "latestValue": 378.0,
          "peak": {
            "date": "2026-04-10",
            "label": "04/10",
            "value": 378.0
          },
          "series": [
            {
              "date": "2026-03-01",
              "label": "03/01",
              "value": 233.0
            },
            {
              "date": "2026-03-02",
              "label": "03/02",
              "value": 239.0
            },
            {
              "date": "2026-03-03",
              "label": "03/03",
              "value": 233.0
            },
            {
              "date": "2026-03-04",
              "label": "03/04",
              "value": 241.0
            },
            {
              "date": "2026-03-05",
              "label": "03/05",
              "value": 244.0
            },
            {
              "date": "2026-03-06",
              "label": "03/06",
              "value": 267.0
            },
            {
              "date": "2026-03-07",
              "label": "03/07",
              "value": 276.0
            },
            {
              "date": "2026-03-08",
              "label": "03/08",
              "value": 273.0
            },
            {
              "date": "2026-03-09",
              "label": "03/09",
              "value": 265.0
            },
            {
              "date": "2026-03-10",
              "label": "03/10",
              "value": 272.0
            },
            {
              "date": "2026-03-11",
              "label": "03/11",
              "value": 268.0
            },
            {
              "date": "2026-03-12",
              "label": "03/12",
              "value": 270.0
            },
            {
              "date": "2026-03-13",
              "label": "03/13",
              "value": 290.0
            },
            {
              "date": "2026-03-14",
              "label": "03/14",
              "value": 286.0
            },
            {
              "date": "2026-03-15",
              "label": "03/15",
              "value": 291.0
            },
            {
              "date": "2026-03-16",
              "label": "03/16",
              "value": 278.0
            },
            {
              "date": "2026-03-17",
              "label": "03/17",
              "value": 290.0
            },
            {
              "date": "2026-03-18",
              "label": "03/18",
              "value": 297.0
            },
            {
              "date": "2026-03-19",
              "label": "03/19",
              "value": 311.0
            },
            {
              "date": "2026-03-20",
              "label": "03/20",
              "value": 312.0
            },
            {
              "date": "2026-03-21",
              "label": "03/21",
              "value": 319.0
            },
            {
              "date": "2026-03-22",
              "label": "03/22",
              "value": 313.0
            },
            {
              "date": "2026-03-23",
              "label": "03/23",
              "value": 314.0
            },
            {
              "date": "2026-03-24",
              "label": "03/24",
              "value": 316.0
            },
            {
              "date": "2026-03-25",
              "label": "03/25",
              "value": 326.0
            },
            {
              "date": "2026-03-26",
              "label": "03/26",
              "value": 346.0
            },
            {
              "date": "2026-03-27",
              "label": "03/27",
              "value": 329.0
            },
            {
              "date": "2026-03-28",
              "label": "03/28",
              "value": 352.0
            },
            {
              "date": "2026-03-29",
              "label": "03/29",
              "value": 331.0
            },
            {
              "date": "2026-03-30",
              "label": "03/30",
              "value": 325.0
            },
            {
              "date": "2026-03-31",
              "label": "03/31",
              "value": 340.0
            },
            {
              "date": "2026-04-01",
              "label": "04/01",
              "value": 356.0
            },
            {
              "date": "2026-04-02",
              "label": "04/02",
              "value": 332.0
            },
            {
              "date": "2026-04-03",
              "label": "04/03",
              "value": 343.0
            },
            {
              "date": "2026-04-04",
              "label": "04/04",
              "value": 345.0
            },
            {
              "date": "2026-04-05",
              "label": "04/05",
              "value": 322.0
            },
            {
              "date": "2026-04-06",
              "label": "04/06",
              "value": 344.0
            },
            {
              "date": "2026-04-07",
              "label": "04/07",
              "value": 335.0
            },
            {
              "date": "2026-04-08",
              "label": "04/08",
              "value": 348.0
            },
            {
              "date": "2026-04-09",
              "label": "04/09",
              "value": 361.0
            },
            {
              "date": "2026-04-10",
              "label": "04/10",
              "value": 378.0
            }
          ]
        },
        {
          "dataset": "current",
          "label": "今年新开单",
          "color": "#3a6fdd",
          "totalValue": 3679.0,
          "averageValue": 89.73,
          "last7Average": 169.71,
          "latestValue": 211.0,
          "peak": {
            "date": "2026-04-10",
            "label": "04/10",
            "value": 211.0
          },
          "series": [
            {
              "date": "2026-03-01",
              "label": "03/01",
              "value": 0.0
            },
            {
              "date": "2026-03-02",
              "label": "03/02",
              "value": 1.0
            },
            {
              "date": "2026-03-03",
              "label": "03/03",
              "value": 1.0
            },
            {
              "date": "2026-03-04",
              "label": "03/04",
              "value": 1.0
            },
            {
              "date": "2026-03-05",
              "label": "03/05",
              "value": 8.0
            },
            {
              "date": "2026-03-06",
              "label": "03/06",
              "value": 20.0
            },
            {
              "date": "2026-03-07",
              "label": "03/07",
              "value": 23.0
            },
            {
              "date": "2026-03-08",
              "label": "03/08",
              "value": 25.0
            },
            {
              "date": "2026-03-09",
              "label": "03/09",
              "value": 23.0
            },
            {
              "date": "2026-03-10",
              "label": "03/10",
              "value": 27.0
            },
            {
              "date": "2026-03-11",
              "label": "03/11",
              "value": 28.0
            },
            {
              "date": "2026-03-12",
              "label": "03/12",
              "value": 39.0
            },
            {
              "date": "2026-03-13",
              "label": "03/13",
              "value": 48.0
            },
            {
              "date": "2026-03-14",
              "label": "03/14",
              "value": 60.0
            },
            {
              "date": "2026-03-15",
              "label": "03/15",
              "value": 63.0
            },
            {
              "date": "2026-03-16",
              "label": "03/16",
              "value": 61.0
            },
            {
              "date": "2026-03-17",
              "label": "03/17",
              "value": 63.0
            },
            {
              "date": "2026-03-18",
              "label": "03/18",
              "value": 72.0
            },
            {
              "date": "2026-03-19",
              "label": "03/19",
              "value": 85.0
            },
            {
              "date": "2026-03-20",
              "label": "03/20",
              "value": 99.0
            },
            {
              "date": "2026-03-21",
              "label": "03/21",
              "value": 94.0
            },
            {
              "date": "2026-03-22",
              "label": "03/22",
              "value": 98.0
            },
            {
              "date": "2026-03-23",
              "label": "03/23",
              "value": 107.0
            },
            {
              "date": "2026-03-24",
              "label": "03/24",
              "value": 106.0
            },
            {
              "date": "2026-03-25",
              "label": "03/25",
              "value": 115.0
            },
            {
              "date": "2026-03-26",
              "label": "03/26",
              "value": 125.0
            },
            {
              "date": "2026-03-27",
              "label": "03/27",
              "value": 116.0
            },
            {
              "date": "2026-03-28",
              "label": "03/28",
              "value": 128.0
            },
            {
              "date": "2026-03-29",
              "label": "03/29",
              "value": 133.0
            },
            {
              "date": "2026-03-30",
              "label": "03/30",
              "value": 127.0
            },
            {
              "date": "2026-03-31",
              "label": "03/31",
              "value": 150.0
            },
            {
              "date": "2026-04-01",
              "label": "04/01",
              "value": 154.0
            },
            {
              "date": "2026-04-02",
              "label": "04/02",
              "value": 136.0
            },
            {
              "date": "2026-04-03",
              "label": "04/03",
              "value": 155.0
            },
            {
              "date": "2026-04-04",
              "label": "04/04",
              "value": 158.0
            },
            {
              "date": "2026-04-05",
              "label": "04/05",
              "value": 145.0
            },
            {
              "date": "2026-04-06",
              "label": "04/06",
              "value": 154.0
            },
            {
              "date": "2026-04-07",
              "label": "04/07",
              "value": 151.0
            },
            {
              "date": "2026-04-08",
              "label": "04/08",
              "value": 175.0
            },
            {
              "date": "2026-04-09",
              "label": "04/09",
              "value": 194.0
            },
            {
              "date": "2026-04-10",
              "label": "04/10",
              "value": 211.0
            }
          ]
        },
        {
          "dataset": "legacy",
          "label": "去年遗留",
          "color": "#c47d1e",
          "totalValue": 8832.0,
          "averageValue": 215.41,
          "last7Average": 177.86,
          "latestValue": 167.0,
          "peak": {
            "date": "2026-03-07",
            "label": "03/07",
            "value": 253.0
          },
          "series": [
            {
              "date": "2026-03-01",
              "label": "03/01",
              "value": 233.0
            },
            {
              "date": "2026-03-02",
              "label": "03/02",
              "value": 238.0
            },
            {
              "date": "2026-03-03",
              "label": "03/03",
              "value": 232.0
            },
            {
              "date": "2026-03-04",
              "label": "03/04",
              "value": 240.0
            },
            {
              "date": "2026-03-05",
              "label": "03/05",
              "value": 236.0
            },
            {
              "date": "2026-03-06",
              "label": "03/06",
              "value": 247.0
            },
            {
              "date": "2026-03-07",
              "label": "03/07",
              "value": 253.0
            },
            {
              "date": "2026-03-08",
              "label": "03/08",
              "value": 248.0
            },
            {
              "date": "2026-03-09",
              "label": "03/09",
              "value": 242.0
            },
            {
              "date": "2026-03-10",
              "label": "03/10",
              "value": 245.0
            },
            {
              "date": "2026-03-11",
              "label": "03/11",
              "value": 240.0
            },
            {
              "date": "2026-03-12",
              "label": "03/12",
              "value": 231.0
            },
            {
              "date": "2026-03-13",
              "label": "03/13",
              "value": 242.0
            },
            {
              "date": "2026-03-14",
              "label": "03/14",
              "value": 226.0
            },
            {
              "date": "2026-03-15",
              "label": "03/15",
              "value": 228.0
            },
            {
              "date": "2026-03-16",
              "label": "03/16",
              "value": 217.0
            },
            {
              "date": "2026-03-17",
              "label": "03/17",
              "value": 227.0
            },
            {
              "date": "2026-03-18",
              "label": "03/18",
              "value": 225.0
            },
            {
              "date": "2026-03-19",
              "label": "03/19",
              "value": 226.0
            },
            {
              "date": "2026-03-20",
              "label": "03/20",
              "value": 213.0
            },
            {
              "date": "2026-03-21",
              "label": "03/21",
              "value": 225.0
            },
            {
              "date": "2026-03-22",
              "label": "03/22",
              "value": 215.0
            },
            {
              "date": "2026-03-23",
              "label": "03/23",
              "value": 207.0
            },
            {
              "date": "2026-03-24",
              "label": "03/24",
              "value": 210.0
            },
            {
              "date": "2026-03-25",
              "label": "03/25",
              "value": 211.0
            },
            {
              "date": "2026-03-26",
              "label": "03/26",
              "value": 221.0
            },
            {
              "date": "2026-03-27",
              "label": "03/27",
              "value": 213.0
            },
            {
              "date": "2026-03-28",
              "label": "03/28",
              "value": 224.0
            },
            {
              "date": "2026-03-29",
              "label": "03/29",
              "value": 198.0
            },
            {
              "date": "2026-03-30",
              "label": "03/30",
              "value": 198.0
            },
            {
              "date": "2026-03-31",
              "label": "03/31",
              "value": 190.0
            },
            {
              "date": "2026-04-01",
              "label": "04/01",
              "value": 202.0
            },
            {
              "date": "2026-04-02",
              "label": "04/02",
              "value": 196.0
            },
            {
              "date": "2026-04-03",
              "label": "04/03",
              "value": 188.0
            },
            {
              "date": "2026-04-04",
              "label": "04/04",
              "value": 187.0
            },
            {
              "date": "2026-04-05",
              "label": "04/05",
              "value": 177.0
            },
            {
              "date": "2026-04-06",
              "label": "04/06",
              "value": 190.0
            },
            {
              "date": "2026-04-07",
              "label": "04/07",
              "value": 184.0
            },
            {
              "date": "2026-04-08",
              "label": "04/08",
              "value": 173.0
            },
            {
              "date": "2026-04-09",
              "label": "04/09",
              "value": 167.0
            },
            {
              "date": "2026-04-10",
              "label": "04/10",
              "value": 167.0
            }
          ]
        }
      ]
    },
    {
      "key": "dailyRepayment",
      "title": "每日回款金额对比",
      "subtitle": "同一日期对比今年新开单、去年遗留与总数据回款金额。图表已排除 2026-04-11，避免缺少美团数据导致失真。",
      "kind": "money",
      "peak": {
        "date": "2026-03-28",
        "label": "03/28",
        "value": 3081.43
      },
      "lines": [
        {
          "dataset": "total",
          "label": "总数据",
          "color": "#1f2430",
          "totalValue": 103004.3,
          "averageValue": 2512.3,
          "last7Average": 2645.24,
          "latestValue": 2794.47,
          "peak": {
            "date": "2026-03-28",
            "label": "03/28",
            "value": 3081.43
          },
          "series": [
            {
              "date": "2026-03-01",
              "label": "03/01",
              "value": 2717.26
            },
            {
              "date": "2026-03-02",
              "label": "03/02",
              "value": 2038.82
            },
            {
              "date": "2026-03-03",
              "label": "03/03",
              "value": 1908.8
            },
            {
              "date": "2026-03-04",
              "label": "03/04",
              "value": 2167.21
            },
            {
              "date": "2026-03-05",
              "label": "03/05",
              "value": 2071.78
            },
            {
              "date": "2026-03-06",
              "label": "03/06",
              "value": 2245.72
            },
            {
              "date": "2026-03-07",
              "label": "03/07",
              "value": 2537.47
            },
            {
              "date": "2026-03-08",
              "label": "03/08",
              "value": 2590.79
            },
            {
              "date": "2026-03-09",
              "label": "03/09",
              "value": 2169.86
            },
            {
              "date": "2026-03-10",
              "label": "03/10",
              "value": 2146.68
            },
            {
              "date": "2026-03-11",
              "label": "03/11",
              "value": 2064.36
            },
            {
              "date": "2026-03-12",
              "label": "03/12",
              "value": 2187.75
            },
            {
              "date": "2026-03-13",
              "label": "03/13",
              "value": 2479.81
            },
            {
              "date": "2026-03-14",
              "label": "03/14",
              "value": 2755.34
            },
            {
              "date": "2026-03-15",
              "label": "03/15",
              "value": 2680.22
            },
            {
              "date": "2026-03-16",
              "label": "03/16",
              "value": 2221.27
            },
            {
              "date": "2026-03-17",
              "label": "03/17",
              "value": 2524.08
            },
            {
              "date": "2026-03-18",
              "label": "03/18",
              "value": 2510.51
            },
            {
              "date": "2026-03-19",
              "label": "03/19",
              "value": 2415.74
            },
            {
              "date": "2026-03-20",
              "label": "03/20",
              "value": 2699.3
            },
            {
              "date": "2026-03-21",
              "label": "03/21",
              "value": 2995.46
            },
            {
              "date": "2026-03-22",
              "label": "03/22",
              "value": 2701.19
            },
            {
              "date": "2026-03-23",
              "label": "03/23",
              "value": 2697.26
            },
            {
              "date": "2026-03-24",
              "label": "03/24",
              "value": 2555.82
            },
            {
              "date": "2026-03-25",
              "label": "03/25",
              "value": 2306.2
            },
            {
              "date": "2026-03-26",
              "label": "03/26",
              "value": 2548.07
            },
            {
              "date": "2026-03-27",
              "label": "03/27",
              "value": 2675.28
            },
            {
              "date": "2026-03-28",
              "label": "03/28",
              "value": 3081.43
            },
            {
              "date": "2026-03-29",
              "label": "03/29",
              "value": 2901.86
            },
            {
              "date": "2026-03-30",
              "label": "03/30",
              "value": 2436.08
            },
            {
              "date": "2026-03-31",
              "label": "03/31",
              "value": 2456.88
            },
            {
              "date": "2026-04-01",
              "label": "04/01",
              "value": 2604.94
            },
            {
              "date": "2026-04-02",
              "label": "04/02",
              "value": 2503.65
            },
            {
              "date": "2026-04-03",
              "label": "04/03",
              "value": 2890.76
            },
            {
              "date": "2026-04-04",
              "label": "04/04",
              "value": 2630.64
            },
            {
              "date": "2026-04-05",
              "label": "04/05",
              "value": 3077.44
            },
            {
              "date": "2026-04-06",
              "label": "04/06",
              "value": 2707.93
            },
            {
              "date": "2026-04-07",
              "label": "04/07",
              "value": 2220.53
            },
            {
              "date": "2026-04-08",
              "label": "04/08",
              "value": 2510.31
            },
            {
              "date": "2026-04-09",
              "label": "04/09",
              "value": 2575.33
            },
            {
              "date": "2026-04-10",
              "label": "04/10",
              "value": 2794.47
            }
          ]
        },
        {
          "dataset": "current",
          "label": "今年新开单",
          "color": "#3a6fdd",
          "totalValue": 25664.72,
          "averageValue": 625.97,
          "last7Average": 1144.66,
          "latestValue": 1326.79,
          "peak": {
            "date": "2026-04-10",
            "label": "04/10",
            "value": 1326.79
          },
          "series": [
            {
              "date": "2026-03-01",
              "label": "03/01",
              "value": 0.0
            },
            {
              "date": "2026-03-02",
              "label": "03/02",
              "value": 5.95
            },
            {
              "date": "2026-03-03",
              "label": "03/03",
              "value": 3.82
            },
            {
              "date": "2026-03-04",
              "label": "03/04",
              "value": 4.63
            },
            {
              "date": "2026-03-05",
              "label": "03/05",
              "value": 33.81
            },
            {
              "date": "2026-03-06",
              "label": "03/06",
              "value": 127.5
            },
            {
              "date": "2026-03-07",
              "label": "03/07",
              "value": 135.52
            },
            {
              "date": "2026-03-08",
              "label": "03/08",
              "value": 180.54
            },
            {
              "date": "2026-03-09",
              "label": "03/09",
              "value": 138.91
            },
            {
              "date": "2026-03-10",
              "label": "03/10",
              "value": 183.46
            },
            {
              "date": "2026-03-11",
              "label": "03/11",
              "value": 192.49
            },
            {
              "date": "2026-03-12",
              "label": "03/12",
              "value": 232.62
            },
            {
              "date": "2026-03-13",
              "label": "03/13",
              "value": 345.2
            },
            {
              "date": "2026-03-14",
              "label": "03/14",
              "value": 488.94
            },
            {
              "date": "2026-03-15",
              "label": "03/15",
              "value": 434.16
            },
            {
              "date": "2026-03-16",
              "label": "03/16",
              "value": 352.39
            },
            {
              "date": "2026-03-17",
              "label": "03/17",
              "value": 434.91
            },
            {
              "date": "2026-03-18",
              "label": "03/18",
              "value": 490.14
            },
            {
              "date": "2026-03-19",
              "label": "03/19",
              "value": 570.97
            },
            {
              "date": "2026-03-20",
              "label": "03/20",
              "value": 767.18
            },
            {
              "date": "2026-03-21",
              "label": "03/21",
              "value": 784.27
            },
            {
              "date": "2026-03-22",
              "label": "03/22",
              "value": 701.4
            },
            {
              "date": "2026-03-23",
              "label": "03/23",
              "value": 774.85
            },
            {
              "date": "2026-03-24",
              "label": "03/24",
              "value": 625.59
            },
            {
              "date": "2026-03-25",
              "label": "03/25",
              "value": 737.3
            },
            {
              "date": "2026-03-26",
              "label": "03/26",
              "value": 828.27
            },
            {
              "date": "2026-03-27",
              "label": "03/27",
              "value": 885.71
            },
            {
              "date": "2026-03-28",
              "label": "03/28",
              "value": 1034.6
            },
            {
              "date": "2026-03-29",
              "label": "03/29",
              "value": 1094.44
            },
            {
              "date": "2026-03-30",
              "label": "03/30",
              "value": 910.38
            },
            {
              "date": "2026-03-31",
              "label": "03/31",
              "value": 971.36
            },
            {
              "date": "2026-04-01",
              "label": "04/01",
              "value": 1052.6
            },
            {
              "date": "2026-04-02",
              "label": "04/02",
              "value": 965.9
            },
            {
              "date": "2026-04-03",
              "label": "04/03",
              "value": 1162.3
            },
            {
              "date": "2026-04-04",
              "label": "04/04",
              "value": 1038.36
            },
            {
              "date": "2026-04-05",
              "label": "04/05",
              "value": 1177.42
            },
            {
              "date": "2026-04-06",
              "label": "04/06",
              "value": 1144.19
            },
            {
              "date": "2026-04-07",
              "label": "04/07",
              "value": 841.9
            },
            {
              "date": "2026-04-08",
              "label": "04/08",
              "value": 1198.87
            },
            {
              "date": "2026-04-09",
              "label": "04/09",
              "value": 1285.08
            },
            {
              "date": "2026-04-10",
              "label": "04/10",
              "value": 1326.79
            }
          ]
        },
        {
          "dataset": "legacy",
          "label": "去年遗留",
          "color": "#c47d1e",
          "totalValue": 77339.58,
          "averageValue": 1886.33,
          "last7Average": 1500.58,
          "latestValue": 1467.68,
          "peak": {
            "date": "2026-03-01",
            "label": "03/01",
            "value": 2717.26
          },
          "series": [
            {
              "date": "2026-03-01",
              "label": "03/01",
              "value": 2717.26
            },
            {
              "date": "2026-03-02",
              "label": "03/02",
              "value": 2032.87
            },
            {
              "date": "2026-03-03",
              "label": "03/03",
              "value": 1904.98
            },
            {
              "date": "2026-03-04",
              "label": "03/04",
              "value": 2162.58
            },
            {
              "date": "2026-03-05",
              "label": "03/05",
              "value": 2037.97
            },
            {
              "date": "2026-03-06",
              "label": "03/06",
              "value": 2118.22
            },
            {
              "date": "2026-03-07",
              "label": "03/07",
              "value": 2401.95
            },
            {
              "date": "2026-03-08",
              "label": "03/08",
              "value": 2410.25
            },
            {
              "date": "2026-03-09",
              "label": "03/09",
              "value": 2030.95
            },
            {
              "date": "2026-03-10",
              "label": "03/10",
              "value": 1963.22
            },
            {
              "date": "2026-03-11",
              "label": "03/11",
              "value": 1871.87
            },
            {
              "date": "2026-03-12",
              "label": "03/12",
              "value": 1955.13
            },
            {
              "date": "2026-03-13",
              "label": "03/13",
              "value": 2134.61
            },
            {
              "date": "2026-03-14",
              "label": "03/14",
              "value": 2266.4
            },
            {
              "date": "2026-03-15",
              "label": "03/15",
              "value": 2246.06
            },
            {
              "date": "2026-03-16",
              "label": "03/16",
              "value": 1868.88
            },
            {
              "date": "2026-03-17",
              "label": "03/17",
              "value": 2089.17
            },
            {
              "date": "2026-03-18",
              "label": "03/18",
              "value": 2020.37
            },
            {
              "date": "2026-03-19",
              "label": "03/19",
              "value": 1844.77
            },
            {
              "date": "2026-03-20",
              "label": "03/20",
              "value": 1932.12
            },
            {
              "date": "2026-03-21",
              "label": "03/21",
              "value": 2211.19
            },
            {
              "date": "2026-03-22",
              "label": "03/22",
              "value": 1999.79
            },
            {
              "date": "2026-03-23",
              "label": "03/23",
              "value": 1922.41
            },
            {
              "date": "2026-03-24",
              "label": "03/24",
              "value": 1930.23
            },
            {
              "date": "2026-03-25",
              "label": "03/25",
              "value": 1568.9
            },
            {
              "date": "2026-03-26",
              "label": "03/26",
              "value": 1719.8
            },
            {
              "date": "2026-03-27",
              "label": "03/27",
              "value": 1789.57
            },
            {
              "date": "2026-03-28",
              "label": "03/28",
              "value": 2046.83
            },
            {
              "date": "2026-03-29",
              "label": "03/29",
              "value": 1807.42
            },
            {
              "date": "2026-03-30",
              "label": "03/30",
              "value": 1525.7
            },
            {
              "date": "2026-03-31",
              "label": "03/31",
              "value": 1485.52
            },
            {
              "date": "2026-04-01",
              "label": "04/01",
              "value": 1552.34
            },
            {
              "date": "2026-04-02",
              "label": "04/02",
              "value": 1537.75
            },
            {
              "date": "2026-04-03",
              "label": "04/03",
              "value": 1728.46
            },
            {
              "date": "2026-04-04",
              "label": "04/04",
              "value": 1592.28
            },
            {
              "date": "2026-04-05",
              "label": "04/05",
              "value": 1900.02
            },
            {
              "date": "2026-04-06",
              "label": "04/06",
              "value": 1563.74
            },
            {
              "date": "2026-04-07",
              "label": "04/07",
              "value": 1378.63
            },
            {
              "date": "2026-04-08",
              "label": "04/08",
              "value": 1311.44
            },
            {
              "date": "2026-04-09",
              "label": "04/09",
              "value": 1290.25
            },
            {
              "date": "2026-04-10",
              "label": "04/10",
              "value": 1467.68
            }
          ]
        }
      ]
    }
  ],
  "tables": {
    "total": [
      {
        "date": "2026-03-01",
        "label": "03/01",
        "newStores": 2,
        "storeBase": 2580,
        "drawStores": 233,
        "drawRolling": 233.0,
        "repayment": 2717.26,
        "repaymentRolling": 2717.26,
        "cumulativeRepayment": 2717.26,
        "cumulativeDrawStores": 233,
        "mtDrawStores": 167,
        "mtRepayment": 2014.87,
        "elmDrawStores": 66,
        "elmRepayment": 702.39
      },
      {
        "date": "2026-03-02",
        "label": "03/02",
        "newStores": 0,
        "storeBase": 2580,
        "drawStores": 239,
        "drawRolling": 236.0,
        "repayment": 2038.82,
        "repaymentRolling": 2378.04,
        "cumulativeRepayment": 4756.08,
        "cumulativeDrawStores": 472,
        "mtDrawStores": 176,
        "mtRepayment": 1552.98,
        "elmDrawStores": 63,
        "elmRepayment": 485.84
      },
      {
        "date": "2026-03-03",
        "label": "03/03",
        "newStores": 0,
        "storeBase": 2580,
        "drawStores": 233,
        "drawRolling": 235.0,
        "repayment": 1908.8,
        "repaymentRolling": 2221.63,
        "cumulativeRepayment": 6664.88,
        "cumulativeDrawStores": 705,
        "mtDrawStores": 172,
        "mtRepayment": 1447.55,
        "elmDrawStores": 61,
        "elmRepayment": 461.25
      },
      {
        "date": "2026-03-04",
        "label": "03/04",
        "newStores": 8,
        "storeBase": 2588,
        "drawStores": 241,
        "drawRolling": 236.5,
        "repayment": 2167.21,
        "repaymentRolling": 2208.02,
        "cumulativeRepayment": 8832.09,
        "cumulativeDrawStores": 946,
        "mtDrawStores": 174,
        "mtRepayment": 1642.81,
        "elmDrawStores": 67,
        "elmRepayment": 524.4
      },
      {
        "date": "2026-03-05",
        "label": "03/05",
        "newStores": 14,
        "storeBase": 2602,
        "drawStores": 244,
        "drawRolling": 238.0,
        "repayment": 2071.78,
        "repaymentRolling": 2180.77,
        "cumulativeRepayment": 10903.87,
        "cumulativeDrawStores": 1190,
        "mtDrawStores": 168,
        "mtRepayment": 1567.9,
        "elmDrawStores": 76,
        "elmRepayment": 503.88
      },
      {
        "date": "2026-03-06",
        "label": "03/06",
        "newStores": 2,
        "storeBase": 2604,
        "drawStores": 267,
        "drawRolling": 242.83,
        "repayment": 2245.72,
        "repaymentRolling": 2191.6,
        "cumulativeRepayment": 13149.59,
        "cumulativeDrawStores": 1457,
        "mtDrawStores": 194,
        "mtRepayment": 1592.91,
        "elmDrawStores": 73,
        "elmRepayment": 652.81
      },
      {
        "date": "2026-03-07",
        "label": "03/07",
        "newStores": 11,
        "storeBase": 2615,
        "drawStores": 276,
        "drawRolling": 247.57,
        "repayment": 2537.47,
        "repaymentRolling": 2241.01,
        "cumulativeRepayment": 15687.06,
        "cumulativeDrawStores": 1733,
        "mtDrawStores": 199,
        "mtRepayment": 1904.5,
        "elmDrawStores": 77,
        "elmRepayment": 632.97
      },
      {
        "date": "2026-03-08",
        "label": "03/08",
        "newStores": 0,
        "storeBase": 2615,
        "drawStores": 273,
        "drawRolling": 253.29,
        "repayment": 2590.79,
        "repaymentRolling": 2222.94,
        "cumulativeRepayment": 18277.85,
        "cumulativeDrawStores": 2006,
        "mtDrawStores": 194,
        "mtRepayment": 1854.23,
        "elmDrawStores": 79,
        "elmRepayment": 736.56
      },
      {
        "date": "2026-03-09",
        "label": "03/09",
        "newStores": 8,
        "storeBase": 2623,
        "drawStores": 265,
        "drawRolling": 257.0,
        "repayment": 2169.86,
        "repaymentRolling": 2241.66,
        "cumulativeRepayment": 20447.71,
        "cumulativeDrawStores": 2271,
        "mtDrawStores": 194,
        "mtRepayment": 1606.1,
        "elmDrawStores": 71,
        "elmRepayment": 563.76
      },
      {
        "date": "2026-03-10",
        "label": "03/10",
        "newStores": 9,
        "storeBase": 2632,
        "drawStores": 272,
        "drawRolling": 262.57,
        "repayment": 2146.68,
        "repaymentRolling": 2275.64,
        "cumulativeRepayment": 22594.39,
        "cumulativeDrawStores": 2543,
        "mtDrawStores": 194,
        "mtRepayment": 1556.93,
        "elmDrawStores": 78,
        "elmRepayment": 589.75
      },
      {
        "date": "2026-03-11",
        "label": "03/11",
        "newStores": 14,
        "storeBase": 2646,
        "drawStores": 268,
        "drawRolling": 266.43,
        "repayment": 2064.36,
        "repaymentRolling": 2260.95,
        "cumulativeRepayment": 24658.75,
        "cumulativeDrawStores": 2811,
        "mtDrawStores": 192,
        "mtRepayment": 1512.09,
        "elmDrawStores": 76,
        "elmRepayment": 552.27
      },
      {
        "date": "2026-03-12",
        "label": "03/12",
        "newStores": 25,
        "storeBase": 2671,
        "drawStores": 270,
        "drawRolling": 270.14,
        "repayment": 2187.75,
        "repaymentRolling": 2277.52,
        "cumulativeRepayment": 26846.5,
        "cumulativeDrawStores": 3081,
        "mtDrawStores": 194,
        "mtRepayment": 1612.5,
        "elmDrawStores": 76,
        "elmRepayment": 575.25
      },
      {
        "date": "2026-03-13",
        "label": "03/13",
        "newStores": 11,
        "storeBase": 2682,
        "drawStores": 290,
        "drawRolling": 273.43,
        "repayment": 2479.81,
        "repaymentRolling": 2310.96,
        "cumulativeRepayment": 29326.31,
        "cumulativeDrawStores": 3371,
        "mtDrawStores": 208,
        "mtRepayment": 1812.44,
        "elmDrawStores": 82,
        "elmRepayment": 667.37
      },
      {
        "date": "2026-03-14",
        "label": "03/14",
        "newStores": 4,
        "storeBase": 2686,
        "drawStores": 286,
        "drawRolling": 274.86,
        "repayment": 2755.34,
        "repaymentRolling": 2342.08,
        "cumulativeRepayment": 32081.65,
        "cumulativeDrawStores": 3657,
        "mtDrawStores": 200,
        "mtRepayment": 2186.2,
        "elmDrawStores": 86,
        "elmRepayment": 569.14
      },
      {
        "date": "2026-03-15",
        "label": "03/15",
        "newStores": 1,
        "storeBase": 2687,
        "drawStores": 291,
        "drawRolling": 277.43,
        "repayment": 2680.22,
        "repaymentRolling": 2354.86,
        "cumulativeRepayment": 34761.87,
        "cumulativeDrawStores": 3948,
        "mtDrawStores": 214,
        "mtRepayment": 2098.77,
        "elmDrawStores": 77,
        "elmRepayment": 581.45
      },
      {
        "date": "2026-03-16",
        "label": "03/16",
        "newStores": 12,
        "storeBase": 2699,
        "drawStores": 278,
        "drawRolling": 279.29,
        "repayment": 2221.27,
        "repaymentRolling": 2362.2,
        "cumulativeRepayment": 36983.14,
        "cumulativeDrawStores": 4226,
        "mtDrawStores": 210,
        "mtRepayment": 1732.74,
        "elmDrawStores": 68,
        "elmRepayment": 488.53
      },
      {
        "date": "2026-03-17",
        "label": "03/17",
        "newStores": 16,
        "storeBase": 2715,
        "drawStores": 290,
        "drawRolling": 281.86,
        "repayment": 2524.08,
        "repaymentRolling": 2416.12,
        "cumulativeRepayment": 39507.22,
        "cumulativeDrawStores": 4516,
        "mtDrawStores": 209,
        "mtRepayment": 1956.85,
        "elmDrawStores": 81,
        "elmRepayment": 567.23
      },
      {
        "date": "2026-03-18",
        "label": "03/18",
        "newStores": 18,
        "storeBase": 2733,
        "drawStores": 297,
        "drawRolling": 286.0,
        "repayment": 2510.51,
        "repaymentRolling": 2479.85,
        "cumulativeRepayment": 42017.73,
        "cumulativeDrawStores": 4813,
        "mtDrawStores": 220,
        "mtRepayment": 1881.78,
        "elmDrawStores": 77,
        "elmRepayment": 628.73
      },
      {
        "date": "2026-03-19",
        "label": "03/19",
        "newStores": 11,
        "storeBase": 2744,
        "drawStores": 311,
        "drawRolling": 291.86,
        "repayment": 2415.74,
        "repaymentRolling": 2512.42,
        "cumulativeRepayment": 44433.47,
        "cumulativeDrawStores": 5124,
        "mtDrawStores": 225,
        "mtRepayment": 1841.33,
        "elmDrawStores": 86,
        "elmRepayment": 574.41
      },
      {
        "date": "2026-03-20",
        "label": "03/20",
        "newStores": 11,
        "storeBase": 2755,
        "drawStores": 312,
        "drawRolling": 295.0,
        "repayment": 2699.3,
        "repaymentRolling": 2543.78,
        "cumulativeRepayment": 47132.77,
        "cumulativeDrawStores": 5436,
        "mtDrawStores": 222,
        "mtRepayment": 2027.84,
        "elmDrawStores": 90,
        "elmRepayment": 671.46
      },
      {
        "date": "2026-03-21",
        "label": "03/21",
        "newStores": 7,
        "storeBase": 2762,
        "drawStores": 319,
        "drawRolling": 299.71,
        "repayment": 2995.46,
        "repaymentRolling": 2578.08,
        "cumulativeRepayment": 50128.23,
        "cumulativeDrawStores": 5755,
        "mtDrawStores": 233,
        "mtRepayment": 2136.92,
        "elmDrawStores": 86,
        "elmRepayment": 858.54
      },
      {
        "date": "2026-03-22",
        "label": "03/22",
        "newStores": 7,
        "storeBase": 2769,
        "drawStores": 313,
        "drawRolling": 302.86,
        "repayment": 2701.19,
        "repaymentRolling": 2581.08,
        "cumulativeRepayment": 52829.42,
        "cumulativeDrawStores": 6068,
        "mtDrawStores": 221,
        "mtRepayment": 2062.07,
        "elmDrawStores": 92,
        "elmRepayment": 639.12
      },
      {
        "date": "2026-03-23",
        "label": "03/23",
        "newStores": 11,
        "storeBase": 2780,
        "drawStores": 314,
        "drawRolling": 308.0,
        "repayment": 2697.26,
        "repaymentRolling": 2649.08,
        "cumulativeRepayment": 55526.68,
        "cumulativeDrawStores": 6382,
        "mtDrawStores": 224,
        "mtRepayment": 2043.38,
        "elmDrawStores": 90,
        "elmRepayment": 653.88
      },
      {
        "date": "2026-03-24",
        "label": "03/24",
        "newStores": 14,
        "storeBase": 2794,
        "drawStores": 316,
        "drawRolling": 311.71,
        "repayment": 2555.82,
        "repaymentRolling": 2653.61,
        "cumulativeRepayment": 58082.5,
        "cumulativeDrawStores": 6698,
        "mtDrawStores": 226,
        "mtRepayment": 1895.1,
        "elmDrawStores": 90,
        "elmRepayment": 660.72
      },
      {
        "date": "2026-03-25",
        "label": "03/25",
        "newStores": 13,
        "storeBase": 2807,
        "drawStores": 326,
        "drawRolling": 315.86,
        "repayment": 2306.2,
        "repaymentRolling": 2624.42,
        "cumulativeRepayment": 60388.7,
        "cumulativeDrawStores": 7024,
        "mtDrawStores": 234,
        "mtRepayment": 1731.94,
        "elmDrawStores": 92,
        "elmRepayment": 574.26
      },
      {
        "date": "2026-03-26",
        "label": "03/26",
        "newStores": 14,
        "storeBase": 2821,
        "drawStores": 346,
        "drawRolling": 320.86,
        "repayment": 2548.07,
        "repaymentRolling": 2643.33,
        "cumulativeRepayment": 62936.77,
        "cumulativeDrawStores": 7370,
        "mtDrawStores": 246,
        "mtRepayment": 1792.41,
        "elmDrawStores": 100,
        "elmRepayment": 755.66
      },
      {
        "date": "2026-03-27",
        "label": "03/27",
        "newStores": 10,
        "storeBase": 2831,
        "drawStores": 329,
        "drawRolling": 323.29,
        "repayment": 2675.28,
        "repaymentRolling": 2639.9,
        "cumulativeRepayment": 65612.05,
        "cumulativeDrawStores": 7699,
        "mtDrawStores": 229,
        "mtRepayment": 1933.62,
        "elmDrawStores": 100,
        "elmRepayment": 741.66
      },
      {
        "date": "2026-03-28",
        "label": "03/28",
        "newStores": 16,
        "storeBase": 2847,
        "drawStores": 352,
        "drawRolling": 328.0,
        "repayment": 3081.43,
        "repaymentRolling": 2652.18,
        "cumulativeRepayment": 68693.48,
        "cumulativeDrawStores": 8051,
        "mtDrawStores": 240,
        "mtRepayment": 2278.34,
        "elmDrawStores": 112,
        "elmRepayment": 803.09
      },
      {
        "date": "2026-03-29",
        "label": "03/29",
        "newStores": 5,
        "storeBase": 2852,
        "drawStores": 331,
        "drawRolling": 330.57,
        "repayment": 2901.86,
        "repaymentRolling": 2680.85,
        "cumulativeRepayment": 71595.34,
        "cumulativeDrawStores": 8382,
        "mtDrawStores": 226,
        "mtRepayment": 2166.77,
        "elmDrawStores": 105,
        "elmRepayment": 735.09
      },
      {
        "date": "2026-03-30",
        "label": "03/30",
        "newStores": 15,
        "storeBase": 2867,
        "drawStores": 325,
        "drawRolling": 332.14,
        "repayment": 2436.08,
        "repaymentRolling": 2643.53,
        "cumulativeRepayment": 74031.42,
        "cumulativeDrawStores": 8707,
        "mtDrawStores": 225,
        "mtRepayment": 1761.13,
        "elmDrawStores": 100,
        "elmRepayment": 674.95
      },
      {
        "date": "2026-03-31",
        "label": "03/31",
        "newStores": 20,
        "storeBase": 2887,
        "drawStores": 340,
        "drawRolling": 335.57,
        "repayment": 2456.88,
        "repaymentRolling": 2629.4,
        "cumulativeRepayment": 76488.3,
        "cumulativeDrawStores": 9047,
        "mtDrawStores": 232,
        "mtRepayment": 1779.04,
        "elmDrawStores": 108,
        "elmRepayment": 677.84
      },
      {
        "date": "2026-04-01",
        "label": "04/01",
        "newStores": 11,
        "storeBase": 2898,
        "drawStores": 356,
        "drawRolling": 339.86,
        "repayment": 2604.94,
        "repaymentRolling": 2672.08,
        "cumulativeRepayment": 79093.24,
        "cumulativeDrawStores": 9403,
        "mtDrawStores": 249,
        "mtRepayment": 1871.05,
        "elmDrawStores": 107,
        "elmRepayment": 733.89
      },
      {
        "date": "2026-04-02",
        "label": "04/02",
        "newStores": 19,
        "storeBase": 2917,
        "drawStores": 332,
        "drawRolling": 337.86,
        "repayment": 2503.65,
        "repaymentRolling": 2665.73,
        "cumulativeRepayment": 81596.89,
        "cumulativeDrawStores": 9735,
        "mtDrawStores": 226,
        "mtRepayment": 1735.48,
        "elmDrawStores": 106,
        "elmRepayment": 768.17
      },
      {
        "date": "2026-04-03",
        "label": "04/03",
        "newStores": 18,
        "storeBase": 2935,
        "drawStores": 343,
        "drawRolling": 339.86,
        "repayment": 2890.76,
        "repaymentRolling": 2696.51,
        "cumulativeRepayment": 84487.65,
        "cumulativeDrawStores": 10078,
        "mtDrawStores": 236,
        "mtRepayment": 2061.3,
        "elmDrawStores": 107,
        "elmRepayment": 829.46
      },
      {
        "date": "2026-04-04",
        "label": "04/04",
        "newStores": 2,
        "storeBase": 2937,
        "drawStores": 345,
        "drawRolling": 338.86,
        "repayment": 2630.64,
        "repaymentRolling": 2632.12,
        "cumulativeRepayment": 87118.29,
        "cumulativeDrawStores": 10423,
        "mtDrawStores": 235,
        "mtRepayment": 1951.91,
        "elmDrawStores": 110,
        "elmRepayment": 678.73
      },
      {
        "date": "2026-04-05",
        "label": "04/05",
        "newStores": 0,
        "storeBase": 2937,
        "drawStores": 322,
        "drawRolling": 337.57,
        "repayment": 3077.44,
        "repaymentRolling": 2657.2,
        "cumulativeRepayment": 90195.73,
        "cumulativeDrawStores": 10745,
        "mtDrawStores": 219,
        "mtRepayment": 2170.89,
        "elmDrawStores": 103,
        "elmRepayment": 906.55
      },
      {
        "date": "2026-04-06",
        "label": "04/06",
        "newStores": 10,
        "storeBase": 2947,
        "drawStores": 344,
        "drawRolling": 340.29,
        "repayment": 2707.93,
        "repaymentRolling": 2696.03,
        "cumulativeRepayment": 92903.66,
        "cumulativeDrawStores": 11089,
        "mtDrawStores": 238,
        "mtRepayment": 1990.56,
        "elmDrawStores": 106,
        "elmRepayment": 717.37
      },
      {
        "date": "2026-04-07",
        "label": "04/07",
        "newStores": 26,
        "storeBase": 2973,
        "drawStores": 335,
        "drawRolling": 339.57,
        "repayment": 2220.53,
        "repaymentRolling": 2662.27,
        "cumulativeRepayment": 95124.19,
        "cumulativeDrawStores": 11424,
        "mtDrawStores": 231,
        "mtRepayment": 1634.9,
        "elmDrawStores": 104,
        "elmRepayment": 585.63
      },
      {
        "date": "2026-04-08",
        "label": "04/08",
        "newStores": 30,
        "storeBase": 3003,
        "drawStores": 348,
        "drawRolling": 338.43,
        "repayment": 2510.31,
        "repaymentRolling": 2648.75,
        "cumulativeRepayment": 97634.5,
        "cumulativeDrawStores": 11772,
        "mtDrawStores": 240,
        "mtRepayment": 1879.66,
        "elmDrawStores": 108,
        "elmRepayment": 630.65
      },
      {
        "date": "2026-04-09",
        "label": "04/09",
        "newStores": 28,
        "storeBase": 3031,
        "drawStores": 361,
        "drawRolling": 342.57,
        "repayment": 2575.33,
        "repaymentRolling": 2658.99,
        "cumulativeRepayment": 100209.83,
        "cumulativeDrawStores": 12133,
        "mtDrawStores": 242,
        "mtRepayment": 1826.56,
        "elmDrawStores": 119,
        "elmRepayment": 748.77
      },
      {
        "date": "2026-04-10",
        "label": "04/10",
        "newStores": 38,
        "storeBase": 3069,
        "drawStores": 378,
        "drawRolling": 347.57,
        "repayment": 2794.47,
        "repaymentRolling": 2645.24,
        "cumulativeRepayment": 103004.3,
        "cumulativeDrawStores": 12511,
        "mtDrawStores": 254,
        "mtRepayment": 1846.27,
        "elmDrawStores": 124,
        "elmRepayment": 948.2
      },
      {
        "date": "2026-04-11",
        "label": "04/11",
        "newStores": 19,
        "storeBase": 3088,
        "drawStores": 149,
        "drawRolling": 319.57,
        "repayment": 918.76,
        "repaymentRolling": 2400.68,
        "cumulativeRepayment": 103923.06,
        "cumulativeDrawStores": 12660,
        "mtDrawStores": 0,
        "mtRepayment": 0.0,
        "elmDrawStores": 149,
        "elmRepayment": 918.76
      }
    ],
    "current": [
      {
        "date": "2026-03-01",
        "label": "03/01",
        "newStores": 2,
        "storeBase": 2,
        "drawStores": 0,
        "drawRolling": 0.0,
        "repayment": 0.0,
        "repaymentRolling": 0.0,
        "cumulativeRepayment": 0.0,
        "cumulativeDrawStores": 0,
        "mtDrawStores": 0,
        "mtRepayment": 0.0,
        "elmDrawStores": 0,
        "elmRepayment": 0.0
      },
      {
        "date": "2026-03-02",
        "label": "03/02",
        "newStores": 0,
        "storeBase": 2,
        "drawStores": 1,
        "drawRolling": 0.5,
        "repayment": 5.95,
        "repaymentRolling": 2.98,
        "cumulativeRepayment": 5.95,
        "cumulativeDrawStores": 1,
        "mtDrawStores": 1,
        "mtRepayment": 5.95,
        "elmDrawStores": 0,
        "elmRepayment": 0.0
      },
      {
        "date": "2026-03-03",
        "label": "03/03",
        "newStores": 0,
        "storeBase": 2,
        "drawStores": 1,
        "drawRolling": 0.67,
        "repayment": 3.82,
        "repaymentRolling": 3.26,
        "cumulativeRepayment": 9.77,
        "cumulativeDrawStores": 2,
        "mtDrawStores": 1,
        "mtRepayment": 3.82,
        "elmDrawStores": 0,
        "elmRepayment": 0.0
      },
      {
        "date": "2026-03-04",
        "label": "03/04",
        "newStores": 8,
        "storeBase": 10,
        "drawStores": 1,
        "drawRolling": 0.75,
        "repayment": 4.63,
        "repaymentRolling": 3.6,
        "cumulativeRepayment": 14.4,
        "cumulativeDrawStores": 3,
        "mtDrawStores": 1,
        "mtRepayment": 4.63,
        "elmDrawStores": 0,
        "elmRepayment": 0.0
      },
      {
        "date": "2026-03-05",
        "label": "03/05",
        "newStores": 14,
        "storeBase": 24,
        "drawStores": 8,
        "drawRolling": 2.2,
        "repayment": 33.81,
        "repaymentRolling": 9.64,
        "cumulativeRepayment": 48.21,
        "cumulativeDrawStores": 11,
        "mtDrawStores": 6,
        "mtRepayment": 19.74,
        "elmDrawStores": 2,
        "elmRepayment": 14.07
      },
      {
        "date": "2026-03-06",
        "label": "03/06",
        "newStores": 2,
        "storeBase": 26,
        "drawStores": 20,
        "drawRolling": 5.17,
        "repayment": 127.5,
        "repaymentRolling": 29.28,
        "cumulativeRepayment": 175.71,
        "cumulativeDrawStores": 31,
        "mtDrawStores": 14,
        "mtRepayment": 81.8,
        "elmDrawStores": 6,
        "elmRepayment": 45.7
      },
      {
        "date": "2026-03-07",
        "label": "03/07",
        "newStores": 11,
        "storeBase": 37,
        "drawStores": 23,
        "drawRolling": 7.71,
        "repayment": 135.52,
        "repaymentRolling": 44.46,
        "cumulativeRepayment": 311.23,
        "cumulativeDrawStores": 54,
        "mtDrawStores": 17,
        "mtRepayment": 97.68,
        "elmDrawStores": 6,
        "elmRepayment": 37.84
      },
      {
        "date": "2026-03-08",
        "label": "03/08",
        "newStores": 0,
        "storeBase": 37,
        "drawStores": 25,
        "drawRolling": 11.29,
        "repayment": 180.54,
        "repaymentRolling": 70.25,
        "cumulativeRepayment": 491.77,
        "cumulativeDrawStores": 79,
        "mtDrawStores": 20,
        "mtRepayment": 128.72,
        "elmDrawStores": 5,
        "elmRepayment": 51.82
      },
      {
        "date": "2026-03-09",
        "label": "03/09",
        "newStores": 8,
        "storeBase": 45,
        "drawStores": 23,
        "drawRolling": 14.43,
        "repayment": 138.91,
        "repaymentRolling": 89.25,
        "cumulativeRepayment": 630.68,
        "cumulativeDrawStores": 102,
        "mtDrawStores": 16,
        "mtRepayment": 100.01,
        "elmDrawStores": 7,
        "elmRepayment": 38.9
      },
      {
        "date": "2026-03-10",
        "label": "03/10",
        "newStores": 9,
        "storeBase": 54,
        "drawStores": 27,
        "drawRolling": 18.14,
        "repayment": 183.46,
        "repaymentRolling": 114.91,
        "cumulativeRepayment": 814.14,
        "cumulativeDrawStores": 129,
        "mtDrawStores": 21,
        "mtRepayment": 125.79,
        "elmDrawStores": 6,
        "elmRepayment": 57.67
      },
      {
        "date": "2026-03-11",
        "label": "03/11",
        "newStores": 14,
        "storeBase": 68,
        "drawStores": 28,
        "drawRolling": 22.0,
        "repayment": 192.49,
        "repaymentRolling": 141.75,
        "cumulativeRepayment": 1006.63,
        "cumulativeDrawStores": 157,
        "mtDrawStores": 20,
        "mtRepayment": 134.14,
        "elmDrawStores": 8,
        "elmRepayment": 58.35
      },
      {
        "date": "2026-03-12",
        "label": "03/12",
        "newStores": 25,
        "storeBase": 93,
        "drawStores": 39,
        "drawRolling": 26.43,
        "repayment": 232.62,
        "repaymentRolling": 170.15,
        "cumulativeRepayment": 1239.25,
        "cumulativeDrawStores": 196,
        "mtDrawStores": 27,
        "mtRepayment": 151.57,
        "elmDrawStores": 12,
        "elmRepayment": 81.05
      },
      {
        "date": "2026-03-13",
        "label": "03/13",
        "newStores": 11,
        "storeBase": 104,
        "drawStores": 48,
        "drawRolling": 30.43,
        "repayment": 345.2,
        "repaymentRolling": 201.25,
        "cumulativeRepayment": 1584.45,
        "cumulativeDrawStores": 244,
        "mtDrawStores": 35,
        "mtRepayment": 271.13,
        "elmDrawStores": 13,
        "elmRepayment": 74.07
      },
      {
        "date": "2026-03-14",
        "label": "03/14",
        "newStores": 4,
        "storeBase": 108,
        "drawStores": 60,
        "drawRolling": 35.71,
        "repayment": 488.94,
        "repaymentRolling": 251.74,
        "cumulativeRepayment": 2073.39,
        "cumulativeDrawStores": 304,
        "mtDrawStores": 40,
        "mtRepayment": 338.88,
        "elmDrawStores": 20,
        "elmRepayment": 150.06
      },
      {
        "date": "2026-03-15",
        "label": "03/15",
        "newStores": 1,
        "storeBase": 109,
        "drawStores": 63,
        "drawRolling": 41.14,
        "repayment": 434.16,
        "repaymentRolling": 287.97,
        "cumulativeRepayment": 2507.55,
        "cumulativeDrawStores": 367,
        "mtDrawStores": 45,
        "mtRepayment": 340.81,
        "elmDrawStores": 18,
        "elmRepayment": 93.35
      },
      {
        "date": "2026-03-16",
        "label": "03/16",
        "newStores": 12,
        "storeBase": 121,
        "drawStores": 61,
        "drawRolling": 46.57,
        "repayment": 352.39,
        "repaymentRolling": 318.47,
        "cumulativeRepayment": 2859.94,
        "cumulativeDrawStores": 428,
        "mtDrawStores": 47,
        "mtRepayment": 286.45,
        "elmDrawStores": 14,
        "elmRepayment": 65.94
      },
      {
        "date": "2026-03-17",
        "label": "03/17",
        "newStores": 16,
        "storeBase": 137,
        "drawStores": 63,
        "drawRolling": 51.71,
        "repayment": 434.91,
        "repaymentRolling": 354.39,
        "cumulativeRepayment": 3294.85,
        "cumulativeDrawStores": 491,
        "mtDrawStores": 47,
        "mtRepayment": 374.88,
        "elmDrawStores": 16,
        "elmRepayment": 60.03
      },
      {
        "date": "2026-03-18",
        "label": "03/18",
        "newStores": 18,
        "storeBase": 155,
        "drawStores": 72,
        "drawRolling": 58.0,
        "repayment": 490.14,
        "repaymentRolling": 396.91,
        "cumulativeRepayment": 3784.99,
        "cumulativeDrawStores": 563,
        "mtDrawStores": 57,
        "mtRepayment": 429.74,
        "elmDrawStores": 15,
        "elmRepayment": 60.4
      },
      {
        "date": "2026-03-19",
        "label": "03/19",
        "newStores": 11,
        "storeBase": 166,
        "drawStores": 85,
        "drawRolling": 64.57,
        "repayment": 570.97,
        "repaymentRolling": 445.24,
        "cumulativeRepayment": 4355.96,
        "cumulativeDrawStores": 648,
        "mtDrawStores": 63,
        "mtRepayment": 430.29,
        "elmDrawStores": 22,
        "elmRepayment": 140.68
      },
      {
        "date": "2026-03-20",
        "label": "03/20",
        "newStores": 11,
        "storeBase": 177,
        "drawStores": 99,
        "drawRolling": 71.86,
        "repayment": 767.18,
        "repaymentRolling": 505.53,
        "cumulativeRepayment": 5123.14,
        "cumulativeDrawStores": 747,
        "mtDrawStores": 71,
        "mtRepayment": 598.61,
        "elmDrawStores": 28,
        "elmRepayment": 168.57
      },
      {
        "date": "2026-03-21",
        "label": "03/21",
        "newStores": 7,
        "storeBase": 184,
        "drawStores": 94,
        "drawRolling": 76.71,
        "repayment": 784.27,
        "repaymentRolling": 547.72,
        "cumulativeRepayment": 5907.41,
        "cumulativeDrawStores": 841,
        "mtDrawStores": 68,
        "mtRepayment": 577.61,
        "elmDrawStores": 26,
        "elmRepayment": 206.66
      },
      {
        "date": "2026-03-22",
        "label": "03/22",
        "newStores": 7,
        "storeBase": 191,
        "drawStores": 98,
        "drawRolling": 81.71,
        "repayment": 701.4,
        "repaymentRolling": 585.89,
        "cumulativeRepayment": 6608.81,
        "cumulativeDrawStores": 939,
        "mtDrawStores": 69,
        "mtRepayment": 560.22,
        "elmDrawStores": 29,
        "elmRepayment": 141.18
      },
      {
        "date": "2026-03-23",
        "label": "03/23",
        "newStores": 11,
        "storeBase": 202,
        "drawStores": 107,
        "drawRolling": 88.29,
        "repayment": 774.85,
        "repaymentRolling": 646.25,
        "cumulativeRepayment": 7383.66,
        "cumulativeDrawStores": 1046,
        "mtDrawStores": 73,
        "mtRepayment": 555.16,
        "elmDrawStores": 34,
        "elmRepayment": 219.69
      },
      {
        "date": "2026-03-24",
        "label": "03/24",
        "newStores": 14,
        "storeBase": 216,
        "drawStores": 106,
        "drawRolling": 94.43,
        "repayment": 625.59,
        "repaymentRolling": 673.49,
        "cumulativeRepayment": 8009.25,
        "cumulativeDrawStores": 1152,
        "mtDrawStores": 73,
        "mtRepayment": 473.44,
        "elmDrawStores": 33,
        "elmRepayment": 152.15
      },
      {
        "date": "2026-03-25",
        "label": "03/25",
        "newStores": 13,
        "storeBase": 229,
        "drawStores": 115,
        "drawRolling": 100.57,
        "repayment": 737.3,
        "repaymentRolling": 708.79,
        "cumulativeRepayment": 8746.55,
        "cumulativeDrawStores": 1267,
        "mtDrawStores": 77,
        "mtRepayment": 520.97,
        "elmDrawStores": 38,
        "elmRepayment": 216.33
      },
      {
        "date": "2026-03-26",
        "label": "03/26",
        "newStores": 14,
        "storeBase": 243,
        "drawStores": 125,
        "drawRolling": 106.29,
        "repayment": 828.27,
        "repaymentRolling": 745.55,
        "cumulativeRepayment": 9574.82,
        "cumulativeDrawStores": 1392,
        "mtDrawStores": 83,
        "mtRepayment": 593.27,
        "elmDrawStores": 42,
        "elmRepayment": 235.0
      },
      {
        "date": "2026-03-27",
        "label": "03/27",
        "newStores": 10,
        "storeBase": 253,
        "drawStores": 116,
        "drawRolling": 108.71,
        "repayment": 885.71,
        "repaymentRolling": 762.48,
        "cumulativeRepayment": 10460.53,
        "cumulativeDrawStores": 1508,
        "mtDrawStores": 75,
        "mtRepayment": 641.28,
        "elmDrawStores": 41,
        "elmRepayment": 244.43
      },
      {
        "date": "2026-03-28",
        "label": "03/28",
        "newStores": 16,
        "storeBase": 269,
        "drawStores": 128,
        "drawRolling": 113.57,
        "repayment": 1034.6,
        "repaymentRolling": 798.25,
        "cumulativeRepayment": 11495.13,
        "cumulativeDrawStores": 1636,
        "mtDrawStores": 83,
        "mtRepayment": 752.34,
        "elmDrawStores": 45,
        "elmRepayment": 282.26
      },
      {
        "date": "2026-03-29",
        "label": "03/29",
        "newStores": 5,
        "storeBase": 274,
        "drawStores": 133,
        "drawRolling": 118.57,
        "repayment": 1094.44,
        "repaymentRolling": 854.39,
        "cumulativeRepayment": 12589.57,
        "cumulativeDrawStores": 1769,
        "mtDrawStores": 84,
        "mtRepayment": 792.33,
        "elmDrawStores": 49,
        "elmRepayment": 302.11
      },
      {
        "date": "2026-03-30",
        "label": "03/30",
        "newStores": 15,
        "storeBase": 289,
        "drawStores": 127,
        "drawRolling": 121.43,
        "repayment": 910.38,
        "repaymentRolling": 873.76,
        "cumulativeRepayment": 13499.95,
        "cumulativeDrawStores": 1896,
        "mtDrawStores": 84,
        "mtRepayment": 715.54,
        "elmDrawStores": 43,
        "elmRepayment": 194.84
      },
      {
        "date": "2026-03-31",
        "label": "03/31",
        "newStores": 20,
        "storeBase": 309,
        "drawStores": 150,
        "drawRolling": 127.71,
        "repayment": 971.36,
        "repaymentRolling": 923.15,
        "cumulativeRepayment": 14471.31,
        "cumulativeDrawStores": 2046,
        "mtDrawStores": 97,
        "mtRepayment": 710.82,
        "elmDrawStores": 53,
        "elmRepayment": 260.54
      },
      {
        "date": "2026-04-01",
        "label": "04/01",
        "newStores": 11,
        "storeBase": 320,
        "drawStores": 154,
        "drawRolling": 133.29,
        "repayment": 1052.6,
        "repaymentRolling": 968.19,
        "cumulativeRepayment": 15523.91,
        "cumulativeDrawStores": 2200,
        "mtDrawStores": 107,
        "mtRepayment": 779.1,
        "elmDrawStores": 47,
        "elmRepayment": 273.5
      },
      {
        "date": "2026-04-02",
        "label": "04/02",
        "newStores": 19,
        "storeBase": 339,
        "drawStores": 136,
        "drawRolling": 134.86,
        "repayment": 965.9,
        "repaymentRolling": 987.86,
        "cumulativeRepayment": 16489.81,
        "cumulativeDrawStores": 2336,
        "mtDrawStores": 90,
        "mtRepayment": 693.08,
        "elmDrawStores": 46,
        "elmRepayment": 272.82
      },
      {
        "date": "2026-04-03",
        "label": "04/03",
        "newStores": 18,
        "storeBase": 357,
        "drawStores": 155,
        "drawRolling": 140.43,
        "repayment": 1162.3,
        "repaymentRolling": 1027.37,
        "cumulativeRepayment": 17652.11,
        "cumulativeDrawStores": 2491,
        "mtDrawStores": 103,
        "mtRepayment": 855.48,
        "elmDrawStores": 52,
        "elmRepayment": 306.82
      },
      {
        "date": "2026-04-04",
        "label": "04/04",
        "newStores": 2,
        "storeBase": 359,
        "drawStores": 158,
        "drawRolling": 144.71,
        "repayment": 1038.36,
        "repaymentRolling": 1027.91,
        "cumulativeRepayment": 18690.47,
        "cumulativeDrawStores": 2649,
        "mtDrawStores": 101,
        "mtRepayment": 742.64,
        "elmDrawStores": 57,
        "elmRepayment": 295.72
      },
      {
        "date": "2026-04-05",
        "label": "04/05",
        "newStores": 0,
        "storeBase": 359,
        "drawStores": 145,
        "drawRolling": 146.43,
        "repayment": 1177.42,
        "repaymentRolling": 1039.76,
        "cumulativeRepayment": 19867.89,
        "cumulativeDrawStores": 2794,
        "mtDrawStores": 95,
        "mtRepayment": 844.16,
        "elmDrawStores": 50,
        "elmRepayment": 333.26
      },
      {
        "date": "2026-04-06",
        "label": "04/06",
        "newStores": 10,
        "storeBase": 369,
        "drawStores": 154,
        "drawRolling": 150.29,
        "repayment": 1144.19,
        "repaymentRolling": 1073.16,
        "cumulativeRepayment": 21012.08,
        "cumulativeDrawStores": 2948,
        "mtDrawStores": 100,
        "mtRepayment": 834.78,
        "elmDrawStores": 54,
        "elmRepayment": 309.41
      },
      {
        "date": "2026-04-07",
        "label": "04/07",
        "newStores": 26,
        "storeBase": 395,
        "drawStores": 151,
        "drawRolling": 150.43,
        "repayment": 841.9,
        "repaymentRolling": 1054.67,
        "cumulativeRepayment": 21853.98,
        "cumulativeDrawStores": 3099,
        "mtDrawStores": 102,
        "mtRepayment": 623.75,
        "elmDrawStores": 49,
        "elmRepayment": 218.15
      },
      {
        "date": "2026-04-08",
        "label": "04/08",
        "newStores": 30,
        "storeBase": 425,
        "drawStores": 175,
        "drawRolling": 153.43,
        "repayment": 1198.87,
        "repaymentRolling": 1075.56,
        "cumulativeRepayment": 23052.85,
        "cumulativeDrawStores": 3274,
        "mtDrawStores": 119,
        "mtRepayment": 911.92,
        "elmDrawStores": 56,
        "elmRepayment": 286.95
      },
      {
        "date": "2026-04-09",
        "label": "04/09",
        "newStores": 28,
        "storeBase": 453,
        "drawStores": 194,
        "drawRolling": 161.71,
        "repayment": 1285.08,
        "repaymentRolling": 1121.16,
        "cumulativeRepayment": 24337.93,
        "cumulativeDrawStores": 3468,
        "mtDrawStores": 126,
        "mtRepayment": 918.43,
        "elmDrawStores": 68,
        "elmRepayment": 366.65
      },
      {
        "date": "2026-04-10",
        "label": "04/10",
        "newStores": 38,
        "storeBase": 491,
        "drawStores": 211,
        "drawRolling": 169.71,
        "repayment": 1326.79,
        "repaymentRolling": 1144.66,
        "cumulativeRepayment": 25664.72,
        "cumulativeDrawStores": 3679,
        "mtDrawStores": 134,
        "mtRepayment": 886.58,
        "elmDrawStores": 77,
        "elmRepayment": 440.21
      },
      {
        "date": "2026-04-11",
        "label": "04/11",
        "newStores": 19,
        "storeBase": 510,
        "drawStores": 90,
        "drawRolling": 160.0,
        "repayment": 489.94,
        "repaymentRolling": 1066.31,
        "cumulativeRepayment": 26154.66,
        "cumulativeDrawStores": 3769,
        "mtDrawStores": 0,
        "mtRepayment": 0.0,
        "elmDrawStores": 90,
        "elmRepayment": 489.94
      }
    ],
    "legacy": [
      {
        "date": "2026-03-01",
        "label": "03/01",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 233,
        "drawRolling": 233.0,
        "repayment": 2717.26,
        "repaymentRolling": 2717.26,
        "cumulativeRepayment": 2717.26,
        "cumulativeDrawStores": 233,
        "mtDrawStores": 167,
        "mtRepayment": 2014.87,
        "elmDrawStores": 66,
        "elmRepayment": 702.39
      },
      {
        "date": "2026-03-02",
        "label": "03/02",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 238,
        "drawRolling": 235.5,
        "repayment": 2032.87,
        "repaymentRolling": 2375.06,
        "cumulativeRepayment": 4750.13,
        "cumulativeDrawStores": 471,
        "mtDrawStores": 175,
        "mtRepayment": 1547.03,
        "elmDrawStores": 63,
        "elmRepayment": 485.84
      },
      {
        "date": "2026-03-03",
        "label": "03/03",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 232,
        "drawRolling": 234.33,
        "repayment": 1904.98,
        "repaymentRolling": 2218.37,
        "cumulativeRepayment": 6655.11,
        "cumulativeDrawStores": 703,
        "mtDrawStores": 171,
        "mtRepayment": 1443.73,
        "elmDrawStores": 61,
        "elmRepayment": 461.25
      },
      {
        "date": "2026-03-04",
        "label": "03/04",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 240,
        "drawRolling": 235.75,
        "repayment": 2162.58,
        "repaymentRolling": 2204.42,
        "cumulativeRepayment": 8817.69,
        "cumulativeDrawStores": 943,
        "mtDrawStores": 173,
        "mtRepayment": 1638.18,
        "elmDrawStores": 67,
        "elmRepayment": 524.4
      },
      {
        "date": "2026-03-05",
        "label": "03/05",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 236,
        "drawRolling": 235.8,
        "repayment": 2037.97,
        "repaymentRolling": 2171.13,
        "cumulativeRepayment": 10855.66,
        "cumulativeDrawStores": 1179,
        "mtDrawStores": 162,
        "mtRepayment": 1548.16,
        "elmDrawStores": 74,
        "elmRepayment": 489.81
      },
      {
        "date": "2026-03-06",
        "label": "03/06",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 247,
        "drawRolling": 237.67,
        "repayment": 2118.22,
        "repaymentRolling": 2162.31,
        "cumulativeRepayment": 12973.88,
        "cumulativeDrawStores": 1426,
        "mtDrawStores": 180,
        "mtRepayment": 1511.11,
        "elmDrawStores": 67,
        "elmRepayment": 607.11
      },
      {
        "date": "2026-03-07",
        "label": "03/07",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 253,
        "drawRolling": 239.86,
        "repayment": 2401.95,
        "repaymentRolling": 2196.55,
        "cumulativeRepayment": 15375.83,
        "cumulativeDrawStores": 1679,
        "mtDrawStores": 182,
        "mtRepayment": 1806.82,
        "elmDrawStores": 71,
        "elmRepayment": 595.13
      },
      {
        "date": "2026-03-08",
        "label": "03/08",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 248,
        "drawRolling": 242.0,
        "repayment": 2410.25,
        "repaymentRolling": 2152.69,
        "cumulativeRepayment": 17786.08,
        "cumulativeDrawStores": 1927,
        "mtDrawStores": 174,
        "mtRepayment": 1725.51,
        "elmDrawStores": 74,
        "elmRepayment": 684.74
      },
      {
        "date": "2026-03-09",
        "label": "03/09",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 242,
        "drawRolling": 242.57,
        "repayment": 2030.95,
        "repaymentRolling": 2152.41,
        "cumulativeRepayment": 19817.03,
        "cumulativeDrawStores": 2169,
        "mtDrawStores": 178,
        "mtRepayment": 1506.09,
        "elmDrawStores": 64,
        "elmRepayment": 524.86
      },
      {
        "date": "2026-03-10",
        "label": "03/10",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 245,
        "drawRolling": 244.43,
        "repayment": 1963.22,
        "repaymentRolling": 2160.73,
        "cumulativeRepayment": 21780.25,
        "cumulativeDrawStores": 2414,
        "mtDrawStores": 173,
        "mtRepayment": 1431.14,
        "elmDrawStores": 72,
        "elmRepayment": 532.08
      },
      {
        "date": "2026-03-11",
        "label": "03/11",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 240,
        "drawRolling": 244.43,
        "repayment": 1871.87,
        "repaymentRolling": 2119.2,
        "cumulativeRepayment": 23652.12,
        "cumulativeDrawStores": 2654,
        "mtDrawStores": 172,
        "mtRepayment": 1377.95,
        "elmDrawStores": 68,
        "elmRepayment": 493.92
      },
      {
        "date": "2026-03-12",
        "label": "03/12",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 231,
        "drawRolling": 243.71,
        "repayment": 1955.13,
        "repaymentRolling": 2107.37,
        "cumulativeRepayment": 25607.25,
        "cumulativeDrawStores": 2885,
        "mtDrawStores": 167,
        "mtRepayment": 1460.93,
        "elmDrawStores": 64,
        "elmRepayment": 494.2
      },
      {
        "date": "2026-03-13",
        "label": "03/13",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 242,
        "drawRolling": 243.0,
        "repayment": 2134.61,
        "repaymentRolling": 2109.71,
        "cumulativeRepayment": 27741.86,
        "cumulativeDrawStores": 3127,
        "mtDrawStores": 173,
        "mtRepayment": 1541.31,
        "elmDrawStores": 69,
        "elmRepayment": 593.3
      },
      {
        "date": "2026-03-14",
        "label": "03/14",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 226,
        "drawRolling": 239.14,
        "repayment": 2266.4,
        "repaymentRolling": 2090.35,
        "cumulativeRepayment": 30008.26,
        "cumulativeDrawStores": 3353,
        "mtDrawStores": 160,
        "mtRepayment": 1847.32,
        "elmDrawStores": 66,
        "elmRepayment": 419.08
      },
      {
        "date": "2026-03-15",
        "label": "03/15",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 228,
        "drawRolling": 236.29,
        "repayment": 2246.06,
        "repaymentRolling": 2066.89,
        "cumulativeRepayment": 32254.32,
        "cumulativeDrawStores": 3581,
        "mtDrawStores": 169,
        "mtRepayment": 1757.96,
        "elmDrawStores": 59,
        "elmRepayment": 488.1
      },
      {
        "date": "2026-03-16",
        "label": "03/16",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 217,
        "drawRolling": 232.71,
        "repayment": 1868.88,
        "repaymentRolling": 2043.74,
        "cumulativeRepayment": 34123.2,
        "cumulativeDrawStores": 3798,
        "mtDrawStores": 163,
        "mtRepayment": 1446.29,
        "elmDrawStores": 54,
        "elmRepayment": 422.59
      },
      {
        "date": "2026-03-17",
        "label": "03/17",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 227,
        "drawRolling": 230.14,
        "repayment": 2089.17,
        "repaymentRolling": 2061.73,
        "cumulativeRepayment": 36212.37,
        "cumulativeDrawStores": 4025,
        "mtDrawStores": 162,
        "mtRepayment": 1581.97,
        "elmDrawStores": 65,
        "elmRepayment": 507.2
      },
      {
        "date": "2026-03-18",
        "label": "03/18",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 225,
        "drawRolling": 228.0,
        "repayment": 2020.37,
        "repaymentRolling": 2082.95,
        "cumulativeRepayment": 38232.74,
        "cumulativeDrawStores": 4250,
        "mtDrawStores": 163,
        "mtRepayment": 1452.04,
        "elmDrawStores": 62,
        "elmRepayment": 568.33
      },
      {
        "date": "2026-03-19",
        "label": "03/19",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 226,
        "drawRolling": 227.29,
        "repayment": 1844.77,
        "repaymentRolling": 2067.18,
        "cumulativeRepayment": 40077.51,
        "cumulativeDrawStores": 4476,
        "mtDrawStores": 162,
        "mtRepayment": 1411.04,
        "elmDrawStores": 64,
        "elmRepayment": 433.73
      },
      {
        "date": "2026-03-20",
        "label": "03/20",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 213,
        "drawRolling": 223.14,
        "repayment": 1932.12,
        "repaymentRolling": 2038.25,
        "cumulativeRepayment": 42009.63,
        "cumulativeDrawStores": 4689,
        "mtDrawStores": 151,
        "mtRepayment": 1429.23,
        "elmDrawStores": 62,
        "elmRepayment": 502.89
      },
      {
        "date": "2026-03-21",
        "label": "03/21",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 225,
        "drawRolling": 223.0,
        "repayment": 2211.19,
        "repaymentRolling": 2030.37,
        "cumulativeRepayment": 44220.82,
        "cumulativeDrawStores": 4914,
        "mtDrawStores": 165,
        "mtRepayment": 1559.31,
        "elmDrawStores": 60,
        "elmRepayment": 651.88
      },
      {
        "date": "2026-03-22",
        "label": "03/22",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 215,
        "drawRolling": 221.14,
        "repayment": 1999.79,
        "repaymentRolling": 1995.18,
        "cumulativeRepayment": 46220.61,
        "cumulativeDrawStores": 5129,
        "mtDrawStores": 152,
        "mtRepayment": 1501.85,
        "elmDrawStores": 63,
        "elmRepayment": 497.94
      },
      {
        "date": "2026-03-23",
        "label": "03/23",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 207,
        "drawRolling": 219.71,
        "repayment": 1922.41,
        "repaymentRolling": 2002.83,
        "cumulativeRepayment": 48143.02,
        "cumulativeDrawStores": 5336,
        "mtDrawStores": 151,
        "mtRepayment": 1488.22,
        "elmDrawStores": 56,
        "elmRepayment": 434.19
      },
      {
        "date": "2026-03-24",
        "label": "03/24",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 210,
        "drawRolling": 217.29,
        "repayment": 1930.23,
        "repaymentRolling": 1980.13,
        "cumulativeRepayment": 50073.25,
        "cumulativeDrawStores": 5546,
        "mtDrawStores": 153,
        "mtRepayment": 1421.66,
        "elmDrawStores": 57,
        "elmRepayment": 508.57
      },
      {
        "date": "2026-03-25",
        "label": "03/25",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 211,
        "drawRolling": 215.29,
        "repayment": 1568.9,
        "repaymentRolling": 1915.63,
        "cumulativeRepayment": 51642.15,
        "cumulativeDrawStores": 5757,
        "mtDrawStores": 157,
        "mtRepayment": 1210.97,
        "elmDrawStores": 54,
        "elmRepayment": 357.93
      },
      {
        "date": "2026-03-26",
        "label": "03/26",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 221,
        "drawRolling": 214.57,
        "repayment": 1719.8,
        "repaymentRolling": 1897.78,
        "cumulativeRepayment": 53361.95,
        "cumulativeDrawStores": 5978,
        "mtDrawStores": 163,
        "mtRepayment": 1199.14,
        "elmDrawStores": 58,
        "elmRepayment": 520.66
      },
      {
        "date": "2026-03-27",
        "label": "03/27",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 213,
        "drawRolling": 214.57,
        "repayment": 1789.57,
        "repaymentRolling": 1877.41,
        "cumulativeRepayment": 55151.52,
        "cumulativeDrawStores": 6191,
        "mtDrawStores": 154,
        "mtRepayment": 1292.34,
        "elmDrawStores": 59,
        "elmRepayment": 497.23
      },
      {
        "date": "2026-03-28",
        "label": "03/28",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 224,
        "drawRolling": 214.43,
        "repayment": 2046.83,
        "repaymentRolling": 1853.93,
        "cumulativeRepayment": 57198.35,
        "cumulativeDrawStores": 6415,
        "mtDrawStores": 157,
        "mtRepayment": 1526.0,
        "elmDrawStores": 67,
        "elmRepayment": 520.83
      },
      {
        "date": "2026-03-29",
        "label": "03/29",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 198,
        "drawRolling": 212.0,
        "repayment": 1807.42,
        "repaymentRolling": 1826.45,
        "cumulativeRepayment": 59005.77,
        "cumulativeDrawStores": 6613,
        "mtDrawStores": 142,
        "mtRepayment": 1374.44,
        "elmDrawStores": 56,
        "elmRepayment": 432.98
      },
      {
        "date": "2026-03-30",
        "label": "03/30",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 198,
        "drawRolling": 210.71,
        "repayment": 1525.7,
        "repaymentRolling": 1769.78,
        "cumulativeRepayment": 60531.47,
        "cumulativeDrawStores": 6811,
        "mtDrawStores": 141,
        "mtRepayment": 1045.59,
        "elmDrawStores": 57,
        "elmRepayment": 480.11
      },
      {
        "date": "2026-03-31",
        "label": "03/31",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 190,
        "drawRolling": 207.86,
        "repayment": 1485.52,
        "repaymentRolling": 1706.25,
        "cumulativeRepayment": 62016.99,
        "cumulativeDrawStores": 7001,
        "mtDrawStores": 135,
        "mtRepayment": 1068.22,
        "elmDrawStores": 55,
        "elmRepayment": 417.3
      },
      {
        "date": "2026-04-01",
        "label": "04/01",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 202,
        "drawRolling": 206.57,
        "repayment": 1552.34,
        "repaymentRolling": 1703.88,
        "cumulativeRepayment": 63569.33,
        "cumulativeDrawStores": 7203,
        "mtDrawStores": 142,
        "mtRepayment": 1091.95,
        "elmDrawStores": 60,
        "elmRepayment": 460.39
      },
      {
        "date": "2026-04-02",
        "label": "04/02",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 196,
        "drawRolling": 203.0,
        "repayment": 1537.75,
        "repaymentRolling": 1677.88,
        "cumulativeRepayment": 65107.08,
        "cumulativeDrawStores": 7399,
        "mtDrawStores": 136,
        "mtRepayment": 1042.4,
        "elmDrawStores": 60,
        "elmRepayment": 495.35
      },
      {
        "date": "2026-04-03",
        "label": "04/03",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 188,
        "drawRolling": 199.43,
        "repayment": 1728.46,
        "repaymentRolling": 1669.15,
        "cumulativeRepayment": 66835.54,
        "cumulativeDrawStores": 7587,
        "mtDrawStores": 133,
        "mtRepayment": 1205.82,
        "elmDrawStores": 55,
        "elmRepayment": 522.64
      },
      {
        "date": "2026-04-04",
        "label": "04/04",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 187,
        "drawRolling": 194.14,
        "repayment": 1592.28,
        "repaymentRolling": 1604.21,
        "cumulativeRepayment": 68427.82,
        "cumulativeDrawStores": 7774,
        "mtDrawStores": 134,
        "mtRepayment": 1209.27,
        "elmDrawStores": 53,
        "elmRepayment": 383.01
      },
      {
        "date": "2026-04-05",
        "label": "04/05",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 177,
        "drawRolling": 191.14,
        "repayment": 1900.02,
        "repaymentRolling": 1617.44,
        "cumulativeRepayment": 70327.84,
        "cumulativeDrawStores": 7951,
        "mtDrawStores": 124,
        "mtRepayment": 1326.73,
        "elmDrawStores": 53,
        "elmRepayment": 573.29
      },
      {
        "date": "2026-04-06",
        "label": "04/06",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 190,
        "drawRolling": 190.0,
        "repayment": 1563.74,
        "repaymentRolling": 1622.87,
        "cumulativeRepayment": 71891.58,
        "cumulativeDrawStores": 8141,
        "mtDrawStores": 138,
        "mtRepayment": 1155.78,
        "elmDrawStores": 52,
        "elmRepayment": 407.96
      },
      {
        "date": "2026-04-07",
        "label": "04/07",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 184,
        "drawRolling": 189.14,
        "repayment": 1378.63,
        "repaymentRolling": 1607.6,
        "cumulativeRepayment": 73270.21,
        "cumulativeDrawStores": 8325,
        "mtDrawStores": 129,
        "mtRepayment": 1011.15,
        "elmDrawStores": 55,
        "elmRepayment": 367.48
      },
      {
        "date": "2026-04-08",
        "label": "04/08",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 173,
        "drawRolling": 185.0,
        "repayment": 1311.44,
        "repaymentRolling": 1573.19,
        "cumulativeRepayment": 74581.65,
        "cumulativeDrawStores": 8498,
        "mtDrawStores": 121,
        "mtRepayment": 967.74,
        "elmDrawStores": 52,
        "elmRepayment": 343.7
      },
      {
        "date": "2026-04-09",
        "label": "04/09",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 167,
        "drawRolling": 180.86,
        "repayment": 1290.25,
        "repaymentRolling": 1537.83,
        "cumulativeRepayment": 75871.9,
        "cumulativeDrawStores": 8665,
        "mtDrawStores": 116,
        "mtRepayment": 908.13,
        "elmDrawStores": 51,
        "elmRepayment": 382.12
      },
      {
        "date": "2026-04-10",
        "label": "04/10",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 167,
        "drawRolling": 177.86,
        "repayment": 1467.68,
        "repaymentRolling": 1500.58,
        "cumulativeRepayment": 77339.58,
        "cumulativeDrawStores": 8832,
        "mtDrawStores": 120,
        "mtRepayment": 959.69,
        "elmDrawStores": 47,
        "elmRepayment": 507.99
      },
      {
        "date": "2026-04-11",
        "label": "04/11",
        "newStores": null,
        "storeBase": 2578,
        "drawStores": 59,
        "drawRolling": 159.57,
        "repayment": 428.82,
        "repaymentRolling": 1334.37,
        "cumulativeRepayment": 77768.4,
        "cumulativeDrawStores": 8891,
        "mtDrawStores": 0,
        "mtRepayment": 0.0,
        "elmDrawStores": 59,
        "elmRepayment": 428.82
      }
    ]
  },
  "tableMeta": {
    "total": {
      "label": "总数据",
      "description": "总数据 = 去年遗留店铺 + 今年新开单店铺。"
    },
    "current": {
      "label": "今年新开单",
      "description": "仅展示 2026 年 3 月起新开单店铺的每日表现。"
    },
    "legacy": {
      "label": "去年遗留",
      "description": "仅展示去年遗留店铺自 2026 年 3 月起的每日表现。"
    }
  },
  "insights": [
    {
      "title": "遗留贡献占比",
      "value": "74.8%",
      "metric": "回款 ¥77,768.40 / 抽点 8,891 次",
      "body": "去年遗留店铺仍是当前总盘回款主力，说明存量盘稳定性直接决定整体结果。",
      "tone": "accent"
    },
    {
      "title": "新开爬坡速度",
      "value": "+2298.4%",
      "metric": "¥44.46 → ¥1,066.31",
      "body": "今年新开单回款从前 7 天的低基数快速爬升到最近 7 天的四位数水平，新增门店正在逐步兑现。",
      "tone": "blue"
    },
    {
      "title": "总盘峰值分离",
      "value": "04/10",
      "metric": "抽点峰值 378 家；金额峰值 03/28 ¥3,081.43",
      "body": "合并后抽点峰值和金额峰值不在同一天，说明门店活跃度与当日金额兑现并非完全同步，需要分别观察。",
      "tone": "gold"
    },
    {
      "title": "总盘近7日走势",
      "value": "+29.1%",
      "metric": "247.57 家/日 → 319.57 家/日",
      "body": "总抽点店铺数近 7 日均值仍在抬升，但金额增速已低于新开单单独口径，意味着总盘增量更多来自规模扩张而非单店效率提升。",
      "tone": "good"
    }
  ],
  "notes": {
    "current": [
      {
        "source": "今年新开单",
        "label": "开单日期口径",
        "text": "优先取录入日期(entryDate)，没有则回退合同签订日期(contractSignedDate)。"
      },
      {
        "source": "今年新开单",
        "label": "开单店铺范围",
        "text": "统计 2026-03-01 到 2026-04-11 之间开单的全部店铺。"
      },
      {
        "source": "今年新开单",
        "label": "累计规则",
        "text": "每天的累计开单店铺数=起始日期到当天为止的全部开单店铺数。"
      },
      {
        "source": "今年新开单",
        "label": "抽点日期口径",
        "text": "美团优先按“结算周期”最后一天归属业务日期；其他情况按 recordDateKey/recordDate。"
      },
      {
        "source": "今年新开单",
        "label": "店铺匹配口径",
        "text": "优先按平台+merchantId 匹配，同时兼容 storeId；merchantId 为空时回退按平台+店铺名匹配。"
      },
      {
        "source": "今年新开单",
        "label": "抽点店铺数口径",
        "text": "按当日有抽点记录的去重店铺数统计。"
      },
      {
        "source": "今年新开单",
        "label": "回款金额口径",
        "text": "按当日匹配到的抽点明细 amountValue 汇总，重复明细按唯一键去重后计入。"
      }
    ],
    "legacy": [
      {
        "source": "去年遗留",
        "label": "遗留店铺口径",
        "text": "开单日期早于 2026-03-01 的店铺视为遗留店铺；起始日期及之后开单的店铺全部剔除。"
      },
      {
        "source": "去年遗留",
        "label": "统计截止日期",
        "text": "默认延长到最新抽点业务日期 2026-04-11。"
      },
      {
        "source": "去年遗留",
        "label": "抽点日期口径",
        "text": "美团优先按结算周期最后一天归属业务日期；其他情况按 recordDateKey 或 recordDate。"
      },
      {
        "source": "去年遗留",
        "label": "店铺匹配口径",
        "text": "按平台优先 merchantId，同时兼容 storeId；merchantId 缺失或未匹配时回退店铺名。"
      },
      {
        "source": "去年遗留",
        "label": "日报字段说明",
        "text": "日报中的抽点店铺数和回款金额均只来自遗留店铺；剔除新开店累计数仅用于展示被排除的新店规模。"
      }
    ]
  }
};
