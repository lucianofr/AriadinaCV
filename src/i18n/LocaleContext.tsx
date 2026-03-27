import { createContext, useState, useContext, type ReactNode } from 'react';
import type { Locale } from './types';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const stored = localStorage.getItem('locale') as Locale | null;
  const initial: Locale = stored && ['pt', 'es', 'en'].includes(stored) ? stored : 'pt';
  const [locale, setLocaleState] = useState<Locale>(initial);

  function setLocale(next: Locale) {
    setLocaleState(next);
    localStorage.setItem('locale', next);
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
