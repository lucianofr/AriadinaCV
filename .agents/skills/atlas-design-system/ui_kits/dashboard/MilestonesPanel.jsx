/* @jsx React.createElement */
function MilestonesPanel() {
  const milestones = [
    { date: "30/abr", title: "Diagnóstico setorial concluído", state: "done" },
    { date: "15/jun", title: "Aprovação POA pelo Comitê Gestor", state: "done" },
    { date: "30/set", title: "Primeira missão de supervisão BID", state: "current" },
    { date: "20/nov", title: "Entrega do produto P3 (consultoria)", state: "next" },
    { date: "15/dez", title: "Fechamento do ciclo trimestral", state: "next" },
  ];
  const dot = {
    done: "var(--success)",
    current: "var(--cyan-500)",
    next: "var(--navy-200)",
  };
  return (
    <section className="panel">
      <div className="panel__head">
        <div>
          <div className="panel__title">Próximos marcos</div>
          <div className="panel__sub">Q3 · Q4 2026</div>
        </div>
        <button className="btn btn--ghost btn--sm">Ver cronograma →</button>
      </div>
      <ol className="milestones">
        {milestones.map((m, i) => (
          <li key={i} className={"milestone milestone--" + m.state}>
            <div className="milestone__date">{m.date}</div>
            <div className="milestone__dot" style={{background: dot[m.state]}}></div>
            <div className="milestone__title">{m.title}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}

window.MilestonesPanel = MilestonesPanel;
