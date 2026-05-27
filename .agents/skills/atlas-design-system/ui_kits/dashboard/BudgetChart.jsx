/* @jsx React.createElement */
function BudgetChart() {
  const components = [
    { name: "Modernização TI",        planned: 220, executed: 162, color: "var(--navy-700)" },
    { name: "Capacitação de pessoal", planned: 95,  executed: 78,  color: "var(--navy-500)" },
    { name: "Consultorias técnicas",  planned: 142, executed: 88,  color: "var(--cyan-500)" },
    { name: "Infraestrutura",         planned: 155, executed: 41,  color: "var(--teal-600)" },
  ];
  const max = Math.max(...components.map(c => c.planned));
  return (
    <section className="panel">
      <div className="panel__head">
        <div>
          <div className="panel__title">Execução orçamentária por componente</div>
          <div className="panel__sub">Valores em R$ milhões · planejado vs executado</div>
        </div>
        <div className="panel__legend">
          <span><span className="legend-sw" style={{background:"var(--navy-200)"}}></span>Planejado</span>
          <span><span className="legend-sw" style={{background:"var(--navy-800)"}}></span>Executado</span>
        </div>
      </div>
      <div className="bars">
        {components.map((c, i) => {
          const pct = (c.executed / c.planned) * 100;
          return (
            <div className="bar-row" key={i}>
              <div className="bar-row__label">{c.name}</div>
              <div className="bar-row__track">
                <div className="bar-row__planned" style={{width: (c.planned/max)*100 + "%"}}></div>
                <div className="bar-row__executed" style={{width: (c.executed/max)*100 + "%", background: c.color}}></div>
              </div>
              <div className="bar-row__nums">
                <span className="mono">R$ {c.executed} mi</span>
                <span className="bar-row__pct">{pct.toFixed(0)}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

window.BudgetChart = BudgetChart;
