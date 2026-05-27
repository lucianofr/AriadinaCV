import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from '../../i18n/useTranslation';
import { useLocale } from '../../i18n/LocaleContext';
import { resume } from '../../data/resume';
import type { Locale } from '../../i18n/types';

export function Education() {
  const t = useTranslation();
  const { locale } = useLocale();
  const l = locale as Locale;

  return (
    <section
      id="formacao"
      style={{
        background: 'var(--color-bg-alt)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle title={t.sections.education} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '1rem',
          }}
        >
          {resume.education.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{
                background: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 1px 4px rgba(27,58,92,0.04)',
                transition: 'box-shadow 0.2s, transform 0.2s',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  '0 6px 20px rgba(13,39,71,0.1)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  '0 1px 4px rgba(13,39,71,0.04)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(63,184,214,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <GraduationCap size={20} color="var(--color-accent)" />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    margin: '0 0 0.25rem 0',
                  }}
                >
                  {item.period}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'var(--color-primary)',
                    margin: '0 0 0.25rem 0',
                    lineHeight: 1.35,
                  }}
                >
                  {item.degree[l]}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-muted)',
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {item.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
