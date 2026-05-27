import { Mail, MapPin } from 'lucide-react';

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { useTranslation } from '../../i18n/useTranslation';
import { resume } from '../../data/resume';

export function Footer() {
  const t = useTranslation();

  return (
    <footer
      style={{
        background: 'var(--color-primary)',
        padding: '2rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div>
          <img
            src="/logo-aap-inverse.png"
            alt={resume.name}
            style={{
              height: '26px',
              display: 'block',
              marginBottom: '0.35rem',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.5)',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} · {t.footer.rights}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a
            href={`mailto:${resume.email}`}
            aria-label="E-mail"
            style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)')
            }
          >
            <Mail size={18} />
          </a>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)')
            }
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(resume.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Localização"
            style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)')
            }
          >
            <MapPin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
