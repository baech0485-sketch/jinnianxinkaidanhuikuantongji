---
name: update-huikuan-dashboard
description: Use when the user wants to refresh the daily-dashboard page in the current project from the two Excel workbooks or verify the page reflects the latest workbook dates.
---

# 更新回款看板

## 适用场景

- 用户要求“更新网页数据”“同步 Excel 到页面”“刷新看板”“重新读取两份表格”
- 当前目标是项目内的 `daily-dashboard/index.html`
- 数据来源固定为项目根目录下的两份 `.xlsx` 文件

## 默认动作

直接运行下面这条命令，不要先手动拆步骤：

```powershell
powershell -ExecutionPolicy Bypass -File "F:\baech0485-code\今年新开单回款统计分析\.codex\skills\update-huikuan-dashboard\scripts\update_dashboard.ps1"
```

这条脚本会自动完成：

1. 定位当前项目根目录
2. 读取两份 Excel 的最新汇总数据
3. 重新生成 `daily-dashboard/data.js`
4. 运行 `pytest` 校验导出逻辑
5. 重新截取页面首屏图用于冒烟验证
6. 输出最新日期、总店铺基数、总抽点次数、总回款金额和截图路径

## 固定口径

- 趋势对比图表默认排除最新日期的数据点
- 原因：最新日期通常缺少美团数据，直接入图会导致趋势失真
- 表格明细仍保留最新日期
- 顶部汇总卡片仍保留最新日期累计值
- 如果未来用户没有明确要求，不要取消这条规则

## 响应要求

- 明确说明页面是否已更新成功
- 带上最新统计截止日期和四个关键数：
  - 总店铺基数
  - 总累计抽点次数
  - 总累计回款金额
  - 两份表的导出时间
- 额外说明：趋势图已自动排除最新日期，表格与汇总仍保留最新日期
- 引用页面路径：
  - `daily-dashboard/index.html`
- 引用截图路径：
  - `output/playwright/daily-dashboard-latest.png`

## 异常处理

- 如果脚本失败，先报告失败步骤，再决定是否手动重跑单步命令
- 不要修改 Excel 文件本身
- 如果工作表名称发生变化，先读取工作簿结构再修复脚本或数据构建逻辑
