/* @jsx React.createElement */
function ExperienceSection() {
  const items = [
    {
      period: "2023 — hoje",
      current: true,
      role: "Consultora Externa",
      org: "Banco Interamericano de Desenvolvimento (BID)",
      program: "Programa Moderniza-ES · Espírito Santo",
      bullets: [
        "Estruturação do PMO do programa e monitoramento trimestral de 42 indicadores.",
        "Acompanhamento de aquisições e contratações; interface com missões de supervisão.",
        "Reporte executivo ao Comitê Gestor; gestão de R$ 612 mi em orçamento monitorado.",
      ],
    },
    {
      period: "2020 — 2023",
      role: "Coordenadora de PMO",
      org: "Governo do Estado do Espírito Santo",
      program: "Programa Estado Presente em Defesa da Vida",
      bullets: [
        "Coordenação do PMO multissecretarial — 12 secretarias envolvidas.",
        "Redução de 22% no tempo de ciclo de entrega das ações estratégicas.",
        "Implantação de rotinas de monitoramento mensal e governança de riscos.",
      ],
    },
    {
      period: "2016 — 2020",
      role: "Especialista em Governança & Planejamento",
      org: "Tribunal de Contas do Estado do ES (TCE-ES)",
      program: "PMO institucional · orçamento · indicadores",
      bullets: [
        "Estruturação do PMO institucional e ciclos de planejamento estratégico.",
        "Acompanhamento da execução orçamentária trienal e indicadores corporativos.",
      ],
    },
    {
      period: "2007 — 2016",
      role: "Gerente de Projetos",
      org: "Samarco Mineração",
      program: "Projetos de engenharia de grande porte",
      bullets: [
        "Planejamento, controle e acompanhamento de projetos multidisciplinares.",
        "Mais de 9 anos em ambiente industrial de alta complexidade.",
      ],
    },
  ];
  return (
    <section className="section section--white" id="experiencia">
      <div className="section__inner">
        <h2 className="section__title">Experiência</h2>
        <div className="section__rule"></div>
        <ol className="exp-list">
          {items.map((it, i) => (
            <li className="exp" key={i}>
              <div className="exp__meta">
                <div className="exp__period">{it.period}</div>
                {it.current && (
                  <span className="exp__badge">
                    <span className="exp__badge-dot"></span>Atual
                  </span>
                )}
              </div>
              <div className="exp__body">
                <h3 className="exp__role">{it.role}</h3>
                <div className="exp__org">{it.org}</div>
                <div className="exp__program">{it.program}</div>
                <ul className="exp__bullets">
                  {it.bullets.map((b, j) => (
                    <li key={j}>
                      <i data-lucide="check" className="exp__check"></i>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
window.ExperienceSection = ExperienceSection;
