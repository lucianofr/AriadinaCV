import { motion } from 'framer-motion';
import { Building2, GitBranch, RefreshCw, Lightbulb, Target, Globe } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from '../../i18n/useTranslation';

const pillars = [
  { Icon: Building2, label: 'PMO', color: '#3FB8D6' },
  { Icon: GitBranch, label: 'BPM', color: '#3FB8D6' },
  { Icon: RefreshCw, label: 'Scrum', color: '#3FB8D6' },
  { Icon: Lightbulb, label: 'Design Thinking', color: '#3FB8D6' },
  { Icon: Target, label: 'Planejamento Estratégico', color: '#3FB8D6' },
  { Icon: Globe, label: 'BID / IDB', color: '#3FB8D6' },
];

function MonogramBadge() {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '180px', display: 'block' }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="badgeBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0D2747" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0D2747" stopOpacity="0.03" />
        </radialGradient>
      </defs>
      {/* Outer dashed ring */}
      <circle cx="90" cy="90" r="84" stroke="#0D2747" strokeWidth="1" strokeDasharray="5 5" strokeOpacity="0.2" />
      {/* Middle solid ring */}
      <circle cx="90" cy="90" r="70" stroke="#3FB8D6" strokeWidth="1.5" strokeOpacity="0.35" fill="url(#badgeBg)" />
      {/* Inner accent ring */}
      <circle cx="90" cy="90" r="54" stroke="#3FB8D6" strokeWidth="1" strokeOpacity="0.2" fill="none" />
      {/* Decorative dots at cardinal positions */}
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={90 + 70 * Math.cos(rad)}
            cy={90 - 70 * Math.sin(rad)}
            r="3"
            fill="#3FB8D6"
            fillOpacity="0.5"
          />
        );
      })}
      {/* Monogram */}
      <text
        x="90" y="86"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="26"
        fontWeight="700"
        fill="#0D2747"
        fillOpacity="0.82"
        letterSpacing="4"
      >
        AAP
      </text>
      <text
        x="90" y="108"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="7.5"
        fontWeight="500"
        fill="#3FB8D6"
        fillOpacity="0.75"
        letterSpacing="2.5"
      >
        CONSULTORA · PMO
      </text>
    </svg>
  );
}

export function About() {
  const t = useTranslation();

  return (
    <section
      id="sobre"
      style={{
        background: 'var(--color-bg-alt)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background arc */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-80px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          border: '1px solid rgba(27,58,92,0.06)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-40px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(27,58,92,0.05)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <SectionTitle title={t.sections.about} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: monogram + text */}
          <div>
            {/* Monogram + text row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '1.75rem', marginBottom: '1.5rem' }}
            >
              <div style={{ flexShrink: 0 }}>
                <MonogramBadge />
              </div>
              <div>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.93rem, 1.4vw, 1.02rem)',
                  color: 'var(--color-text)',
                  lineHeight: 1.82,
                  margin: 0,
                }}>
                  {t.about.paragraph1}
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.93rem, 1.4vw, 1.02rem)',
                color: 'var(--color-text)',
                lineHeight: 1.82,
                margin: '1.5rem 0 0 0',
              }}
            >
              {t.about.paragraph2}
            </motion.p>
          </div>

          {/* Right: pillar cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
            }}
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.18 + i * 0.06 }}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  padding: '1.1rem 1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 1px 4px rgba(13,39,71,0.04)',
                  transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = '0 6px 24px rgba(13,39,71,0.1)';
                  el.style.transform = 'translateY(-3px)';
                  el.style.borderColor = 'rgba(63,184,214,0.35)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = '0 1px 4px rgba(13,39,71,0.04)';
                  el.style.transform = 'translateY(0)';
                  el.style.borderColor = 'var(--color-border)';
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '9px', flexShrink: 0,
                  background: 'rgba(63,184,214,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <p.Icon size={17} color="var(--color-accent)" strokeWidth={1.8} />
                </div>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  lineHeight: 1.3,
                }}>
                  {p.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
