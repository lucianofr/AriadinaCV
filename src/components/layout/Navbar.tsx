import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useTranslation } from '../../i18n/useTranslation';
import { resume } from '../../data/resume';

export function Navbar() {
  const t = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '#sobre', label: t.nav.about },
    { href: '#experiencia', label: t.nav.experience },
    { href: '#formacao', label: t.nav.education },
    { href: '#habilidades', label: t.nav.skills },
    { href: '#contato', label: t.nav.contact },
  ];

  function handleLinkClick() {
    setMobileOpen(false);
  }

  return (
    <>
      <a href="#hero" className="skip-link">
        Ir para o conteúdo principal
      </a>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(27,58,92,0.06)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand */}
          <a
            href="#hero"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1rem',
              color: scrolled ? 'var(--color-primary)' : '#ffffff',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              transition: 'color 0.3s',
              flexShrink: 0,
            }}
          >
            {resume.name.split(' ').slice(0, 1)[0]}{' '}
            <span style={{ fontWeight: 400 }}>
              {resume.name.split(' ').slice(1).join(' ')}
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Navegação principal"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
            className="hidden-mobile"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: scrolled ? 'var(--color-text-muted)' : 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '6px',
                  transition: 'color 0.2s, background 0.2s',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = scrolled
                    ? 'var(--color-accent)'
                    : '#ffffff';
                  if (scrolled)
                    (e.target as HTMLAnchorElement).style.background = 'var(--color-bg-alt)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = scrolled
                    ? 'var(--color-text-muted)'
                    : 'rgba(255,255,255,0.8)';
                  (e.target as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ marginLeft: '0.75rem' }}>
              <LanguageSwitcher light={!scrolled} />
            </div>
          </nav>

          {/* Mobile controls */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            className="visible-mobile"
          >
            <LanguageSwitcher light={!scrolled} />
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: scrolled ? 'var(--color-primary)' : '#ffffff',
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div
            style={{
              background: '#ffffff',
              borderTop: '1px solid var(--color-border)',
              padding: '1rem 1.5rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--color-border)',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .visible-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .visible-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
