import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from '../../i18n/useTranslation';
import { resume } from '../../data/resume';

export function Contact() {
  const t = useTranslation();

  const items = [
    {
      icon: <Mail size={20} color="var(--color-accent)" />,
      label: t.contact.email_label,
      value: resume.email,
      href: `mailto:${resume.email}`,
    },
    {
      icon: <LinkedinIcon size={20} />,
      label: t.contact.linkedin_label,
      value: 'ariadina-astori-porto',
      href: resume.linkedin,
    },
    {
      icon: <MapPin size={20} color="var(--color-accent)" />,
      label: t.contact.location_label,
      value: resume.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(resume.location)}`,
    },
  ];

  return (
    <section
      id="contato"
      style={{
        background: 'var(--color-primary)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle title={t.sections.contact} light />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                margin: '0 0 2rem 0',
              }}
            >
              {t.contact.intro}
            </p>

            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--color-accent)',
                color: '#ffffff',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '0.75rem 1.75rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent-light)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              <LinkedinIcon size={16} />
              {t.contact.send_message}
            </a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    'rgba(255,255,255,0.1)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    'rgba(255,255,255,0.06)')
                }
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(46,134,171,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.5)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      margin: '0 0 0.15rem 0',
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      color: '#ffffff',
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
