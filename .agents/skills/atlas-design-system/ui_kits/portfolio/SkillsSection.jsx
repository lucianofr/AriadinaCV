/* @jsx React.createElement */
function SkillsSection() {
  const groups = [
    {
      title: "Gestão de Projetos",
      icon: "briefcase",
      skills: [
        { label: "PMO", active: true },
        { label: "Planejamento estratégico" },
        { label: "Gestão de escopo" },
        { label: "Gestão de prazos" },
        { label: "Monitoramento de indicadores" },
        { label: "Gestão de riscos" },
        { label: "Análise de viabilidade" },
        { label: "Gestão de portfólio" },
      ],
    },
    {
      title: "Governança & Processos",
      icon: "layers",
      skills: [
        { label: "Programas BID", active: true },
        { label: "Aquisições" },
        { label: "Reporte executivo" },
        { label: "Compliance" },
        { label: "Melhoria contínua" },
      ],
    },
    {
      title: "Metodologias",
      icon: "target",
      skills: [
        { label: "PMBOK" },
        { label: "Agile / Scrum" },
        { label: "Lean" },
        { label: "Gerenciamento orientado a resultados" },
      ],
    },
    {
      title: "Ferramentas",
      icon: "settings-2",
      skills: [
        { label: "MS Project" },
        { label: "Power BI" },
        { label: "Excel avançado" },
        { label: "Jira" },
        { label: "Asana / Trello" },
      ],
    },
  ];
  return (
    <section className="section section--white" id="habilidades">
      <div className="section__inner">
        <h2 className="section__title">Habilidades</h2>
        <div className="section__rule"></div>
        <div className="skills-grid">
          {groups.map((g, i) => (
            <div className="skills-group" key={i}>
              <div className="skills-group__head">
                <i data-lucide={g.icon}></i>
                <h3 className="skills-group__title">{g.title}</h3>
              </div>
              <div className="skills-group__chips">
                {g.skills.map((s, j) => (
                  <span className={"chip " + (s.active ? "chip--active" : "chip--soft")} key={j}>{s.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.SkillsSection = SkillsSection;
