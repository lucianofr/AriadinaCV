/* @jsx React.createElement */
function AboutSection() {
  return (
    <section className="section section--white" id="sobre">
      <div className="section__inner">
        <h2 className="section__title">Sobre</h2>
        <div className="section__rule"></div>
        <div className="about">
          <div className="about__mark">
            <img src="../../assets/logo-mark.svg" alt="" width="120" height="120"/>
          </div>
          <div className="about__text">
            <p className="lead">
              Profissional com mais de <strong>16 anos</strong> de experiência em gestão de projetos,
              planejamento estratégico, monitoramento e governança — atuando no setor público e privado.
            </p>
            <p>
              Especialista em <strong>PMO</strong>, gestão de programas financiados pelo
              <strong> Banco Interamericano de Desenvolvimento (BID)</strong>, monitoramento de indicadores,
              gestão orçamentária, aquisições e melhoria de processos.
            </p>
          </div>
        </div>
        <div className="about__quote">
          <span aria-hidden="true">"</span>Coordenar o que move. Medir o que entrega.<span aria-hidden="true">"</span>
        </div>
      </div>
    </section>
  );
}
window.AboutSection = AboutSection;
