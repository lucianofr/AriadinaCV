/* @jsx React.createElement */
function ProgramHeader() {
  return (
    <header className="prog-header">
      <div className="prog-header__crumbs">
        <a href="#">Programas</a>
        <span aria-hidden="true">/</span>
        <a href="#">Moderniza-ES</a>
        <span aria-hidden="true">/</span>
        <span>Monitoramento</span>
      </div>
      <div className="prog-header__main">
        <div>
          <div style={{fontFamily:'var(--font-sans)', fontSize:'11px', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.14em', color:'var(--cyan-600)'}}>PROGRAMA · BID · 2023–2027</div>
          <h1 className="prog-header__title">Moderniza-ES</h1>
          <p className="prog-header__desc">
            Modernização da gestão pública do Estado do Espírito Santo. Programa financiado pelo BID,
            com execução até 2027 e monitoramento trimestral de indicadores.
          </p>
        </div>
        <div className="prog-header__side">
          <span className="badge badge--exec"><span className="badge__dot"></span>Em execução</span>
          <div className="prog-header__cycle">
            <div className="cycle-k">Ciclo de monitoramento</div>
            <div className="cycle-v">3º trimestre · 2026</div>
          </div>
          <div className="prog-header__cta">
            <button className="btn btn--ghost btn--sm"><i data-lucide="download" style={{width:14,height:14}}></i>Exportar PDF</button>
            <button className="btn btn--primary btn--sm">Atualizar dados</button>
          </div>
        </div>
      </div>
    </header>
  );
}
window.ProgramHeader = ProgramHeader;
