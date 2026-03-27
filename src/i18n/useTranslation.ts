import translations from './translations';
import type { Translations } from './types';
import { useLocale } from './LocaleContext';

export function useTranslation(): Translations {
  const { locale } = useLocale();
  return translations[locale];
}
