/* @jsx React.createElement */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src="../../assets/logo-wordmark-inverse.svg" alt="" height="22"/>
          <div className="site-footer__sub">© 2026 · Todos os direitos reservados.</div>
        </div>
        <div className="site-footer__links">
          <a href="#">PT</a>
          <a href="#">EN</a>
          <a href="#">ES</a>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
