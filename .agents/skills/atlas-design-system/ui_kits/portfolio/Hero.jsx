/* @jsx React.createElement */
function GlobeIllustration() {
  // Stylized globe with floating connection icons — matches site hero motif
  return (
    <svg viewBox="0 0 420 420" className="globe-svg" aria-hidden="true">
      <defs>
        <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3FB8D6" stopOpacity="0.30"/>
          <stop offset="60%" stopColor="#3FB8D6" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#3FB8D6" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="globeBody" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#1F4480"/>
          <stop offset="100%" stopColor="#081A33"/>
        </radialGradient>
      </defs>
      {/* Outer glow */}
      <circle cx="210" cy="210" r="200" fill="url(#globeGlow)"/>
      {/* Globe body */}
      <circle cx="210" cy="210" r="140" fill="url(#globeBody)" stroke="#3FB8D6" strokeWidth="1" strokeOpacity="0.4"/>
      {/* Meridian curves */}
      <ellipse cx="210" cy="210" rx="140" ry="46" fill="none" stroke="#7C9FD4" strokeWidth="1" opacity="0.55"/>
      <ellipse cx="210" cy="210" rx="140" ry="92" fill="none" stroke="#7C9FD4" strokeWidth="0.7" opacity="0.35"/>
      <ellipse cx="210" cy="210" rx="46" ry="140" fill="none" stroke="#7C9FD4" strokeWidth="1" opacity="0.55"/>
      <ellipse cx="210" cy="210" rx="92" ry="140" fill="none" stroke="#7C9FD4" strokeWidth="0.7" opacity="0.35"/>
      <ellipse cx="210" cy="210" rx="100" ry="140" fill="none" stroke="#7C9FD4" strokeWidth="0.5" opacity="0.3" transform="rotate(25 210 210)"/>
      {/* Continent-like dots (abstract land masses) */}
      <g fill="#3FB8D6" opacity="0.85">
        <circle cx="160" cy="160" r="2.5"/>
        <circle cx="180" cy="150" r="2"/>
        <circle cx="200" cy="155" r="2.2"/>
        <circle cx="240" cy="180" r="2"/>
        <circle cx="260" cy="200" r="2.2"/>
        <circle cx="170" cy="220" r="2"/>
        <circle cx="200" cy="240" r="2.5"/>
        <circle cx="225" cy="245" r="2"/>
        <circle cx="245" cy="255" r="2.2"/>
        <circle cx="155" cy="280" r="2"/>
        <circle cx="135" cy="195" r="1.8"/>
      </g>
      {/* Major connection nodes (brighter) */}
      <g>
        <circle cx="160" cy="130" r="5" fill="#6FCEE3"/>
        <circle cx="160" cy="130" r="9" fill="none" stroke="#6FCEE3" strokeWidth="1" opacity="0.4"/>
        <circle cx="295" cy="195" r="5" fill="#6FCEE3"/>
        <circle cx="295" cy="195" r="9" fill="none" stroke="#6FCEE3" strokeWidth="1" opacity="0.4"/>
        <circle cx="195" cy="295" r="5" fill="#6FCEE3"/>
        <circle cx="195" cy="295" r="9" fill="none" stroke="#6FCEE3" strokeWidth="1" opacity="0.4"/>
      </g>
      {/* Connection lines */}
      <g stroke="#3FB8D6" strokeWidth="0.8" opacity="0.5" fill="none">
        <path d="M 160 130 Q 230 100 295 195"/>
        <path d="M 295 195 Q 250 260 195 295"/>
        <path d="M 195 295 Q 150 220 160 130"/>
      </g>
      {/* Floating data badges */}
      <g transform="translate(310 80)">
        <rect x="0" y="0" width="80" height="32" rx="16" fill="#0D2747" stroke="#3FB8D6" strokeWidth="1"/>
        <circle cx="14" cy="16" r="4" fill="#3FB8D6"/>
        <text x="26" y="20" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="600" fill="#FFFFFF">BID</text>
        <text x="48" y="20" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#7C9FD4">Online</text>
      </g>
      <g transform="translate(40 200)">
        <rect x="0" y="0" width="64" height="28" rx="14" fill="#0D2747" stroke="#3FB8D6" strokeWidth="1"/>
        <circle cx="12" cy="14" r="3" fill="#16A34A"/>
        <text x="22" y="18" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="600" fill="#FFFFFF">42 KPIs</text>
      </g>
      <g transform="translate(320 340)">
        <rect x="0" y="0" width="70" height="28" rx="14" fill="#0D2747" stroke="#3FB8D6" strokeWidth="1"/>
        <text x="12" y="18" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="600" fill="#FFFFFF">PMO ◆ 16 anos</text>
      </g>
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true"></div>
      <div className="hero__glow" aria-hidden="true"></div>
      <div className="hero__inner">
        <div className="hero__left">
          <span className="hero__chip">
            <span className="hero__chip-dot"></span>
            Site atualizado em maio · 2026
          </span>
          <h1 className="hero__title">Ariadina Astori Porto</h1>
          <p className="hero__sub">Consultora de Gestão de Projetos · BID</p>
          <div className="hero__cta">
            <a href="#contato" className="btn btn--whatsapp">
              <i data-lucide="message-circle"></i>
              Falar pelo WhatsApp
            </a>
            <a href="#" className="btn btn--outline-light">
              <i data-lucide="linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero__right">
          <GlobeIllustration/>
        </div>
      </div>
      <div className="hero__stats">
        <div className="hero-stat">
          <div className="hero-stat__v">16+</div>
          <div className="hero-stat__k">Anos de experiência</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat__v">3</div>
          <div className="hero-stat__k">Programas estaduais</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat__v">PMO</div>
          <div className="hero-stat__k">Consultoria em Gestão de Projetos</div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
