import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from '../../i18n/useTranslation';
import { resume } from '../../data/resume';

export function Seminars() {
  const t = useTranslation();

  return (
    <section
      id="seminarios"
      style={{
        background: 'var(--color-bg-alt)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle title={t.sections.seminars} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1.25rem',
          }}
        >
          {resume.seminars.map((seminar, idx) => (
            <motion.div
              key={seminar.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              style={{
                background: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 1px 4px rgba(27,58,92,0.03)',
                transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'between',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = '0 8px 30px rgba(13,39,71,0.08)';
                el.style.transform = 'translateY(-2px)';
                el.style.borderColor = 'rgba(63,184,214,0.3)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = '0 1px 4px rgba(27,58,92,0.03)';
                el.style.transform = 'none';
                el.style.borderColor = 'var(--color-border)';
              }}
            >
              {/* Top Accent Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                }}
              />

              <div style={{ flex: 1 }}>
                {/* Date / Period Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}
                >
                  <Calendar size={12} strokeWidth={2.2} />
                  <span>{seminar.period}</span>
                </div>

                {/* Seminar Name */}
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.96rem',
                    color: 'var(--color-primary)',
                    lineHeight: 1.4,
                    margin: '0 0 0.85rem 0',
                  }}
                >
                  {seminar.name}
                </h4>
              </div>

              {/* Seminar Footer Metadata */}
              <div
                style={{
                  borderTop: '1px solid var(--color-border-alt)',
                  paddingTop: '0.85rem',
                  marginTop: '0.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem',
                }}
              >
                {/* Event Name */}
                {seminar.event && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '0.45rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    <Building size={13} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{seminar.event}</span>
                  </div>
                )}

                {/* Location */}
                {seminar.location && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '0.45rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    <MapPin size={13} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{seminar.location}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
