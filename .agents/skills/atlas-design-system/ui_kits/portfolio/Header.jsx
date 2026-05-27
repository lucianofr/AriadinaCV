/* @jsx React.createElement */
function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={"site-header " + (scrolled ? "is-scrolled" : "")}>
      <div className="site-header__inner">
        <a href="#" className="brand">
          <span className="brand__name">Ariadina</span>
          <span className="brand__dot">·</span>
          <span className="brand__surname">Astori Porto</span>
        </a>
        <nav className="primary-nav">
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#formacao">Formação</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="lang-toggle">
          <span className="is-active">PT</span>
          <span>EN</span>
          <span>ES</span>
        </div>
      </div>
    </header>
  );
}
window.Header = Header;
