import { motion } from 'framer-motion';
import { MapPin, Mail, ChevronDown } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';
import { resume } from '../../data/resume';
import heroImage from '../../assets/hero-illustration.png';

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}



export function Hero() {
  const t = useTranslation();

  const stats = [
    { value: t.hero.years_exp, label: t.hero.years_exp_label },
    { value: t.hero.projects, label: t.hero.projects_label },
    { value: t.hero.institutions, label: t.hero.institutions_label },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        background: `linear-gradient(135deg, #081a33 0%, var(--color-primary) 45%, var(--color-primary-light) 100%)`,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Large faint circle top-right */}
        <div style={{
          position: 'absolute', top: '-12%', right: '-8%',
          width: 'clamp(350px, 50vw, 700px)', height: 'clamp(350px, 50vw, 700px)',
          borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)',
        }} />
        <div style={{
          position: 'absolute', top: '-6%', right: '-4%',
          width: 'clamp(220px, 32vw, 480px)', height: 'clamp(220px, 32vw, 480px)',
          borderRadius: '50%', border: '1px solid rgba(255,255,255,0.03)',
        }} />
        {/* Accent radial glow bottom-left */}
        <div style={{
          position: 'absolute', bottom: '5%', left: '-10%',
          width: 'clamp(250px, 30vw, 420px)', height: 'clamp(250px, 30vw, 420px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(63,184,214,0.1) 0%, transparent 70%)',
        }} />
        {/* Subtle horizontal rule */}
        <div style={{
          position: 'absolute', top: '38%', left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent)',
        }} />
      </div>

      {/* Main content */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '8rem 1.5rem 4rem',
        width: '100%', position: 'relative', zIndex: 1,
      }}>
        <div className="hero-grid">

          {/* LEFT: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Location eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.11)',
              borderRadius: '100px', padding: '0.32rem 0.95rem', marginBottom: '1.75rem',
            }}>
              <MapPin size={12} color="rgba(255,255,255,0.65)" />
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500,
                color: 'rgba(255,255,255,0.65)', letterSpacing: '0.04em',
              }}>
                {resume.location}
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2.4rem, 6.5vw, 4.8rem)',
              color: '#ffffff',
              margin: '0 0 0.6rem 0',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}>
              {resume.name}
            </h1>

            {/* Role / subtitle */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.6)',
              margin: '0 0 2.5rem 0',
              letterSpacing: '0.015em',
            }}>
              {t.hero.role}
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '4rem' }}>
              <a
                href="#contato"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: 'var(--color-accent)', color: '#ffffff',
                  fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.9rem',
                  padding: '0.72rem 1.6rem', borderRadius: '8px', textDecoration: 'none',
                  transition: 'background 0.2s, transform 0.15s', letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent-light)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                }}
              >
                <Mail size={16} />
                {t.hero.cta_contact}
              </a>

              <a
                href={resume.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.18)',
                  color: '#ffffff', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.9rem',
                  padding: '0.72rem 1.6rem', borderRadius: '8px', textDecoration: 'none',
                  transition: 'background 0.2s, transform 0.15s', letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.15)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.09)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                }}
              >
                <LinkedinIcon size={16} />
                {t.hero.cta_linkedin}
              </a>
            </div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'flex', flexWrap: 'wrap', gap: '1px',
                background: 'rgba(255,255,255,0.07)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.09)',
                overflow: 'hidden',
                maxWidth: '600px',
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    flex: '1 1 140px',
                    padding: '1.2rem 1.5rem',
                    background: 'rgba(255,255,255,0.025)',
                    borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.7rem',
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                    letterSpacing: '-0.02em',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.35,
                    letterSpacing: '0.01em',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Network illustration */}
          <motion.div
            className="hero-illustration"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
          >
            <img
              src={heroImage}
              alt="Ilustração abstrata — rede global de gestão de projetos e desenvolvimento internacional"
              style={{
                width: '100%',
                maxWidth: '460px',
                borderRadius: '20px',
                border: '1px solid rgba(63,184,214,0.25)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.35), 0 0 40px rgba(63,184,214,0.12)',
                display: 'block',
              }}
            />

            {/* Floating card: years of experience */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '6%', left: '0%',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '14px',
                padding: '0.9rem 1.35rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: '1.85rem', color: '#fff', lineHeight: 1,
                letterSpacing: '-0.03em',
              }}>
                16+
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.68rem',
                color: 'rgba(255,255,255,0.6)', letterSpacing: '0.09em',
                textTransform: 'uppercase', marginTop: '0.22rem',
              }}>
                Anos de Exp.
              </div>
            </motion.div>

            {/* Floating card: BID/IDB */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              style={{
                position: 'absolute', bottom: '14%', right: '1%',
                background: 'rgba(63,184,214,0.18)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(63,184,214,0.38)',
                borderRadius: '14px',
                padding: '0.9rem 1.35rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.66rem',
                color: 'rgba(255,255,255,0.5)', letterSpacing: '0.09em',
                textTransform: 'uppercase',
              }}>
                Atuação
              </div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1rem', color: '#fff', marginTop: '0.22rem',
                letterSpacing: '0.02em',
              }}>
                BID / IDB
              </div>
            </motion.div>

            {/* Floating chip: available */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
              style={{
                position: 'absolute', top: '36%', right: '0%',
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.13)',
                borderRadius: '100px',
                padding: '0.5rem 1rem',
                display: 'flex', alignItems: 'center', gap: '0.55rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}
            >
              <div style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#4ade80', boxShadow: '0 0 7px #4ade80',
              }} />
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.88)', fontWeight: 500,
                letterSpacing: '0.02em',
              }}>
                Disponível
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} color="rgba(255,255,255,0.38)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
