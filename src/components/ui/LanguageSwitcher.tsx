import { useLocale } from '../../i18n/LocaleContext';
import type { Locale } from '../../i18n/types';

const locales: { code: Locale; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
];

interface LanguageSwitcherProps {
  light?: boolean;
}

export function LanguageSwitcher({ light = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
      {locales.map(({ code, label }, i) => (
        <span key={code} style={{ display: 'flex', alignItems: 'center' }}>
          {i > 0 && (
            <span
              style={{
                color: light ? 'rgba(255,255,255,0.3)' : 'var(--color-border)',
                margin: '0 2px',
                fontSize: '0.75rem',
              }}
            >
              |
            </span>
          )}
          <button
            onClick={() => setLocale(code)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 6px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: locale === code ? 700 : 400,
              color:
                locale === code
                  ? light
                    ? '#ffffff'
                    : 'var(--color-accent)'
                  : light
                  ? 'rgba(255,255,255,0.6)'
                  : 'var(--color-text-muted)',
              transition: 'color 0.2s',
              letterSpacing: '0.05em',
            }}
            aria-label={`Mudar para ${label}`}
            aria-pressed={locale === code}
          >
            {label}
          </button>
        </span>
      ))}
    </div>
  );
}
