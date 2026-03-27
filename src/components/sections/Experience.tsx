import { SectionTitle } from '../ui/SectionTitle';
import { TimelineItem } from '../ui/TimelineItem';
import { useTranslation } from '../../i18n/useTranslation';
import { useLocale } from '../../i18n/LocaleContext';
import { resume } from '../../data/resume';
import type { Locale } from '../../i18n/types';

export function Experience() {
  const t = useTranslation();
  const { locale } = useLocale();
  const l = locale as Locale;

  return (
    <section
      id="experiencia"
      style={{
        background: 'var(--color-bg)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SectionTitle title={t.sections.experience} />
        {resume.experience.map((item, i) => (
          <TimelineItem
            key={`${item.company}-${item.start}`}
            period={
              item.end === null
                ? `${item.period.split('–')[0].trim()} – ${t.experience.present}`
                : item.period
            }
            title={item.role[l]}
            subtitle={item.company}
            location={item.location}
            description={item.description[l]}
            highlights={item.highlights.map((h) => h[l])}
            isLast={i === resume.experience.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
