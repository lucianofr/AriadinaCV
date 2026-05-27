/* @jsx React.createElement */
function IndicatorTable() {
  const rows = [
    { name: "Tempo médio de contratação", base: "186 d", now: "142 d", delta: "−23,6%", tone: "good", status: "ok" },
    { name: "Aderência ao planejamento", base: "68%", now: "82%", delta: "+14 pp", tone: "good", status: "ok" },
    { name: "Execução orçamentária", base: "71%", now: "64%", delta: "−7 pp", tone: "bad", status: "risk" },
    { name: "Satisfação interna (NPS)", base: "+18", now: "+42", delta: "+24", tone: "good", status: "ok" },
    { name: "Atendimento de marcos", base: "73%", now: "69%", delta: "−4 pp", tone: "bad", status: "warn" },
    { name: "Capacitações realizadas", base: "120", now: "184", delta: "+53%", tone: "good", status: "ok" },
  ];
  const statusMap = {
    ok:   { cls: "badge--exec", dot: "var(--success)", label: "No alvo" },
    warn: { cls: "badge--plan", dot: "var(--warning)", label: "Atenção" },
    risk: { cls: "badge--risk", dot: "var(--danger)",  label: "Em risco" },
  };
  return (
    <section className="panel">
      <div className="panel__head">
        <div>
          <div className="panel__title">Indicadores · 3º trimestre 2026</div>
          <div className="panel__sub">42 de 48 indicadores no alvo · 2 críticos</div>
        </div>
        <div className="panel__actions">
          <button className="btn btn--ghost btn--sm">Filtrar</button>
          <button className="btn btn--ghost btn--sm">Exportar CSV</button>
        </div>
      </div>
      <table className="ind-table">
        <thead>
          <tr>
            <th>Indicador</th>
            <th className="num">Baseline</th>
            <th className="num">Atual</th>
            <th className="num">Δ</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td className="num">{r.base}</td>
              <td className="num">{r.now}</td>
              <td className={"num " + (r.tone === "good" ? "good" : "bad")}>{r.delta}</td>
              <td>
                <span className={"badge " + statusMap[r.status].cls}>
                  <span className="badge__dot" style={{background: statusMap[r.status].dot}}></span>
                  {statusMap[r.status].label}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

window.IndicatorTable = IndicatorTable;
