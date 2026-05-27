/* @jsx React.createElement */
function ContactSection() {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section className="section section--dark" id="contato">
      <div className="section__bg-glow" aria-hidden="true"></div>
      <div className="section__inner">
        <h2 className="section__title section__title--light">Contato</h2>
        <div className="section__rule section__rule--cyan"></div>
        <div className="contact">
          <div className="contact__left">
            <p className="lead lead--light">
              Tem interesse em conversar? Entre em contato pelo formulário ou nos canais ao lado.
            </p>
            <div className="contact__channels">
              <a href="mailto:contato@ariadina-astori.com.br" className="contact-card">
                <div className="contact-card__icon"><i data-lucide="mail"></i></div>
                <div>
                  <div className="contact-card__k">E-mail</div>
                  <div className="contact-card__v">contato@ariadina-astori.com.br</div>
                </div>
              </a>
              <a href="#" className="contact-card">
                <div className="contact-card__icon"><i data-lucide="message-circle"></i></div>
                <div>
                  <div className="contact-card__k">WhatsApp</div>
                  <div className="contact-card__v">+55 (27) 99999-0000</div>
                </div>
              </a>
              <div className="contact-card">
                <div className="contact-card__icon"><i data-lucide="map-pin"></i></div>
                <div>
                  <div className="contact-card__k">Localização</div>
                  <div className="contact-card__v">Vitória · Espírito Santo · Brasil</div>
                </div>
              </div>
            </div>
          </div>
          <form className="contact__form" onSubmit={submit}>
            {sent ? (
              <div className="contact__sent">
                <i data-lucide="check-circle-2" style={{width:40, height:40, color: 'var(--success)'}}></i>
                <h4 style={{margin: '14px 0 4px', color: 'var(--navy-800)'}}>Mensagem recebida.</h4>
                <p className="small" style={{color: 'var(--fg-3)', margin: 0}}>Retorno em até 2 dias úteis.</p>
              </div>
            ) : (
              <React.Fragment>
                <div className="field"><label>Nome</label><input type="text" defaultValue=""/></div>
                <div className="field"><label>E-mail</label><input type="email" defaultValue=""/></div>
                <div className="field"><label>Mensagem</label><textarea rows="4" placeholder="Conte brevemente o desafio."></textarea></div>
                <button type="submit" className="btn btn--whatsapp btn--full">
                  <i data-lucide="send"></i>
                  Enviar mensagem
                </button>
              </React.Fragment>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
window.ContactSection = ContactSection;
