/* @jsx React.createElement */
function KpiTile({ label, value, sub, delta, tone = "neutral", accent = false }) {
  const toneClass = "kpi__delta--" + tone;
  return (
    <div className={"kpi-tile" + (accent ? " kpi-tile--accent" : "")}>
      <div className="kpi__label">{label}</div>
      <div className="kpi__value">{value}{sub && <span className="kpi__sub"> {sub}</span>}</div>
      {delta && <div className={"kpi__delta " + toneClass}>{delta}</div>}
    </div>
  );
}

function KpiGrid() {
  return (
    <div className="kpi-grid">
      <KpiTile accent
        label="Orçamento monitorado"
        value="R$ 612 mi"
        delta="▲ 4,2% vs trim. anterior"
        tone="success"
      />
      <KpiTile
        label="Execução orçamentária"
        value="64%"
        delta="▼ 7 pp vs planejado"
        tone="danger"
      />
      <KpiTile
        label="Indicadores no alvo"
        value="42"
        sub="/ 48"
        delta="▼ 2 críticos · atenção"
        tone="danger"
      />
      <KpiTile
        label="Ciclo de entrega"
        value="−18%"
        delta="vs baseline 2022"
        tone="neutral"
      />
    </div>
  );
}

window.KpiTile = KpiTile;
window.KpiGrid = KpiGrid;
