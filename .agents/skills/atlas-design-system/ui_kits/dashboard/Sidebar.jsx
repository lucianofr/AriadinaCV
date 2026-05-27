/* @jsx React.createElement */
function Sidebar({ active = "monitoramento" }) {
  const items = [
    { id: "overview", label: "Visão geral", icon: "layout-grid" },
    { id: "monitoramento", label: "Monitoramento", icon: "line-chart" },
    { id: "orcamento", label: "Orçamento", icon: "wallet" },
    { id: "indicadores", label: "Indicadores", icon: "target" },
    { id: "aquisicoes", label: "Aquisições", icon: "file-text" },
    { id: "relatorios", label: "Relatórios", icon: "folder" },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <img src="../../assets/logo-mark-inverse.svg" width="32" height="32" alt=""/>
        <div>
          <div className="sidebar__wordmark">Ariadina <span>·</span> Astori</div>
          <div className="sidebar__sub">PMO Console</div>
        </div>
      </div>

      <div className="sidebar__section">
        <div className="sidebar__heading">Programa ativo</div>
        <button className="sidebar__program">
          <div className="sidebar__program-name">Moderniza-ES</div>
          <div className="sidebar__program-meta">BID · 2023–2027</div>
          <i data-lucide="chevrons-up-down"></i>
        </button>
      </div>

      <nav className="sidebar__nav">
        {items.map(it => (
          <a key={it.id} href={"#" + it.id} className={"sidebar__link " + (active === it.id ? "is-active" : "")}>
            <i data-lucide={it.icon}></i>
            <span>{it.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar__foot">
        <div className="sidebar__user">
          <div className="sidebar__avatar">AP</div>
          <div>
            <div className="sidebar__user-name">Ariadina Astori Porto</div>
            <div className="sidebar__user-role">Consultora Externa · BID</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
