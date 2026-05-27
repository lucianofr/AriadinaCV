import { useEffect } from 'react';
import { useLocale } from '../../i18n/LocaleContext';
import type { Locale } from '../../i18n/types';

const locales: { code: Locale; label: string }[] = [
  { code: 'pt', label: 'PT-BR' },
  { code: 'es', label: 'Espanhol (ES)' },
  { code: 'en', label: 'Inglês (EN)' },
];

interface LanguageSwitcherProps {
  light?: boolean;
}

const getGoogleTranslateLang = (): Locale => {
  const match = document.cookie.match(/googtrans=\/pt\/([a-z]+)/);
  if (match && (match[1] === 'es' || match[1] === 'en')) {
    return match[1] as Locale;
  }
  return 'pt';
};

export function LanguageSwitcher({ light = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale();

  // Sync initial locale from cookie on load
  useEffect(() => {
    const activeLang = getGoogleTranslateLang();
    if (activeLang !== locale) {
      setLocale(activeLang);
    }
  }, [locale, setLocale]);

  const handleLanguageChange = (code: Locale) => {
    setLocale(code);
    
    const domain = window.location.hostname;
    // Clear cookies
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;

    // Set translation cookie
    if (code !== 'pt') {
      document.cookie = `googtrans=/pt/${code}; path=/;`;
      document.cookie = `googtrans=/pt/${code}; path=/; domain=${domain};`;
      document.cookie = `googtrans=/pt/${code}; path=/; domain=.${domain};`;
    }

    const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = code;
      selectEl.dispatchEvent(new Event('change'));
    } else {
      // Fallback reload so that the page mounts with the Translate element reading the cookie
      window.location.reload();
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {locales.map(({ code, label }, i) => (
        <span key={code} style={{ display: 'flex', alignItems: 'center' }}>
          {i > 0 && (
            <span
              style={{
                color: light ? 'rgba(255,255,255,0.3)' : 'var(--color-border)',
                marginRight: '8px',
                fontSize: '0.75rem',
              }}
            >
              |
            </span>
          )}
          <button
            onClick={() => handleLanguageChange(code)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px 10px',
              borderRadius: '6px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: locale === code ? 700 : 400,
              backgroundColor: locale === code 
                ? light 
                  ? 'rgba(255, 255, 255, 0.15)' 
                  : 'rgba(63, 184, 214, 0.08)' 
                : 'transparent',
              color:
                locale === code
                  ? light
                    ? '#ffffff'
                    : 'var(--color-accent)'
                  : light
                  ? 'rgba(255,255,255,0.75)'
                  : 'var(--color-text-muted)',
              transition: 'all 0.2s ease',
              letterSpacing: '0.02em',
              borderBottom: locale === code 
                ? light 
                  ? '1px solid #ffffff' 
                  : '1px solid var(--color-accent)' 
                : '1px solid transparent',
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
