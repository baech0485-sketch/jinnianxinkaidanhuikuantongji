const data = window.dashboardData;
const countFormat = new Intl.NumberFormat("zh-CN");
const amountFormat = new Intl.NumberFormat("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const tableState = { key: "total" };
const toneMap = { accent: "var(--accent)", blue: "var(--accent-2)", good: "var(--good)", gold: "var(--gold)" };

const formatCount = (value, digits = 0) => digits ? Number(value).toFixed(digits) : countFormat.format(Math.round(value));
const formatMoney = (value) => `¥${amountFormat.format(Number(value))}`;
const formatValue = (value, kind) => kind === "money" ? formatMoney(value) : `${formatCount(value)} 家`;
const formatChartTotal = (value, kind) => kind === "money" ? formatMoney(value) : `${formatCount(value)} 次`;

function setHero() {
  document.getElementById("heroMeta").textContent = `${data.meta.dateRange} · 数据源：${data.meta.sourceFiles.join(" + ")} · 导出：${data.meta.exportTimes.join(" / ")}`;
}

function renderKpis() {
  document.getElementById("kpiGrid").innerHTML = data.headlineCards.map((card) => `
    <article class="kpi-card" style="--tone:${toneMap[card.tone] || toneMap.accent};">
      <div class="kpi-label">${card.label}</div>
      <div class="kpi-value">${card.value}</div>
      <p class="kpi-note">${card.note}</p>
    </article>
  `).join("");
}

function niceMax(maxValue) {
  if (maxValue <= 0) return 1;
  const raw = maxValue * 1.12;
  const magnitude = 10 ** Math.floor(Math.log10(raw));
  const unit = raw / magnitude;
  return (unit <= 2 ? 2 : unit <= 5 ? 5 : 10) * magnitude;
}

function renderChartBlock(chart, refs) {
  document.getElementById(refs.title).textContent = chart.title;
  document.getElementById(refs.subtitle).textContent = chart.subtitle;
  document.getElementById(refs.summary).innerHTML = chart.lines.map((line) => `
    <div class="summary-card" style="--tone:${line.color};">
      <div class="summary-label">${line.label}</div>
      <div class="summary-value">${formatChartTotal(line.totalValue, chart.kind)}</div>
      <div class="metric-line">峰值 ${line.peak.label} · ${formatValue(line.peak.value, chart.kind)}</div>
      <div class="metric-line">近7日均 ${formatValue(line.last7Average, chart.kind)}</div>
    </div>
  `).join("");
  document.getElementById(refs.legend).innerHTML = chart.lines.map((line) => `
    <div class="legend-item"><span class="legend-dot" style="background:${line.color};"></span>${line.label}</div>
  `).join("");
  renderLineChart(document.getElementById(refs.chart), chart);
}

function renderLineChart(svg, chart) {
  const width = 680;
  const height = 340;
  const margin = { top: 18, right: 18, bottom: 44, left: 60 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const totalSeries = chart.lines.flatMap((line) => line.series.map((point) => point.value));
  const yMax = niceMax(Math.max(...totalSeries));
  const xAt = (index, count) => margin.left + (innerWidth / Math.max(count - 1, 1)) * index;
  const yAt = (value) => margin.top + innerHeight - (value / yMax) * innerHeight;
  const labelStep = Math.max(1, Math.ceil(chart.lines[0].series.length / 9));
  let markup = "";

  for (let tick = 0; tick <= 5; tick += 1) {
    const tickValue = (yMax / 5) * tick;
    const y = yAt(tickValue);
    markup += `<line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(0,0,0,0.08)" />`;
    markup += `<text x="${margin.left - 8}" y="${y + 4}" text-anchor="end" font-size="11" fill="var(--muted)" font-family="'DM Mono', monospace">${chart.kind === "money" ? formatMoney(tickValue) : formatCount(tickValue)}</text>`;
  }

  chart.lines.forEach((line, lineIndex) => {
    const points = line.series.map((point, index) => `${xAt(index, line.series.length)},${yAt(point.value)}`).join(" ");
    const widthScale = line.dataset === "total" ? 3.5 : 2.3;
    const dash = line.dataset === "legacy" ? "8 6" : line.dataset === "current" ? "0" : "0";
    markup += `<polyline fill="none" stroke="${line.color}" stroke-width="${widthScale}" stroke-linecap="round" stroke-linejoin="round" ${dash !== "0" ? `stroke-dasharray="${dash}"` : ""} points="${points}" />`;
    line.series.forEach((point, index) => {
      const x = xAt(index, line.series.length);
      const y = yAt(point.value);
      const isLabel = lineIndex === 0 && (index % labelStep === 0 || index === line.series.length - 1);
      markup += `<circle cx="${x}" cy="${y}" r="${line.dataset === "total" ? 3.8 : 2.6}" fill="${line.color}" />`;
      if (line.dataset === "total" && point.date === chart.peak.date) {
        markup += `<circle cx="${x}" cy="${y}" r="8" fill="transparent" stroke="${line.color}" stroke-width="3" opacity="0.18" />`;
        markup += `<text x="${x}" y="${y - 12}" text-anchor="middle" font-size="11" fill="${line.color}" font-family="'DM Mono', monospace">${formatValue(point.value, chart.kind)}</text>`;
      }
      if (isLabel) markup += `<text x="${x}" y="${height - margin.bottom + 22}" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="'DM Mono', monospace">${point.label}</text>`;
    });
  });

  svg.innerHTML = markup;
}

function renderToolbar() {
  const keys = ["total", "current", "legacy"];
  document.getElementById("tableToolbar").innerHTML = keys.map((key) => `
    <button class="toolbar-btn ${tableState.key === key ? "active" : ""}" data-key="${key}" type="button">
      <strong>${data.tableMeta[key].label}</strong>
      <span>${data.tableMeta[key].description}</span>
    </button>
  `).join("");
}

function renderTable() {
  const rows = data.tables[tableState.key];
  const peakDates = new Set(data.charts.map((chart) => chart.lines.find((line) => line.dataset === tableState.key || (tableState.key === "total" && line.dataset === "total")).peak.date));
  document.getElementById("tableDescription").textContent = data.tableMeta[tableState.key].description;
  document.getElementById("tableBody").innerHTML = rows.map((row) => `
    <tr class="${peakDates.has(row.date) ? "peak-row" : ""}">
      <td class="mono">${row.label}</td>
      <td class="mono">${row.newStores === null ? "—" : formatCount(row.newStores)}</td>
      <td class="mono">${formatCount(row.storeBase)}</td>
      <td class="mono">${formatCount(row.drawStores)}</td>
      <td class="mono">${formatCount(row.drawRolling, 2)}</td>
      <td class="mono">${formatMoney(row.repayment)}</td>
      <td class="mono">${formatMoney(row.repaymentRolling)}</td>
      <td class="mono">${formatMoney(row.cumulativeRepayment)}</td>
      <td class="mono">${formatCount(row.cumulativeDrawStores)}</td>
      <td class="mono">${formatCount(row.mtDrawStores)} / ${formatMoney(row.mtRepayment)}</td>
      <td class="mono">${formatCount(row.elmDrawStores)} / ${formatMoney(row.elmRepayment)}</td>
    </tr>
  `).join("");
}

function renderInsights() {
  document.getElementById("insightGrid").innerHTML = data.insights.map((item) => `
    <article class="insight-card" style="--tone:${toneMap[item.tone] || toneMap.accent};">
      <h3>${item.title}</h3>
      <div class="insight-value">${item.value}</div>
      <div class="metric-line">${item.metric}</div>
      <p>${item.body}</p>
    </article>
  `).join("");
}

function renderNotes() {
  document.getElementById("currentNotes").innerHTML = data.notes.current.map((item) => `<article class="note-item"><strong>${item.label}</strong><p>${item.text}</p></article>`).join("");
  document.getElementById("legacyNotes").innerHTML = data.notes.legacy.map((item) => `<article class="note-item"><strong>${item.label}</strong><p>${item.text}</p></article>`).join("");
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-key]");
  if (!button) return;
  tableState.key = button.dataset.key;
  renderToolbar();
  renderTable();
});

setHero();
renderKpis();
renderChartBlock(data.charts[0], { title: "drawTitle", subtitle: "drawSubtitle", summary: "drawSummary", legend: "drawLegend", chart: "drawChart" });
renderChartBlock(data.charts[1], { title: "repaymentTitle", subtitle: "repaymentSubtitle", summary: "repaymentSummary", legend: "repaymentLegend", chart: "repaymentChart" });
renderToolbar();
renderTable();
renderInsights();
renderNotes();
