/* @jsx React.createElement */
function EducationSection() {
  const items = [
    {
      period: "2018 — 2020",
      degree: "MBA em Gerenciamento de Projetos",
      org: "FGV / UFES",
      note: "Certificação PMP em formação.",
    },
    {
      period: "2014 — 2016",
      degree: "Especialização em Gestão Pública",
      org: "Espírito Santo",
      note: "Foco em governança e indicadores.",
    },
    {
      period: "2003 — 2007",
      degree: "Bacharelado em Engenharia",
      org: "Universidade Federal do ES",
      note: "Trajetória inicial em projetos de engenharia.",
    },
  ];
  return (
    <section className="section section--alt" id="formacao">
      <div className="section__inner">
        <h2 className="section__title">Formação</h2>
        <div className="section__rule"></div>
        <div className="edu-grid">
          {items.map((it, i) => (
            <article className="edu-card" key={i}>
              <div className="edu-card__period">{it.period}</div>
              <h3 className="edu-card__degree">{it.degree}</h3>
              <div className="edu-card__org">{it.org}</div>
              <p className="edu-card__note">{it.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.EducationSection = EducationSection;
