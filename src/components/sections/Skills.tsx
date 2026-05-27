import { motion } from 'framer-motion';
import { Briefcase, Shield, BarChart, Layers, Settings } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { SkillBadge } from '../ui/SkillBadge';
import { useTranslation } from '../../i18n/useTranslation';
import { resume } from '../../data/resume';

const categoryIcons = {
  project_management: Briefcase,
  governance: Shield,
  monitoring: BarChart,
  methodologies: Layers,
  tools: Settings,
} as const;

export function Skills() {
  const t = useTranslation();

  const groups = [
    {
      key: 'project_management' as const,
      label: t.skills.project_management,
      items: resume.skills.project_management,
      accent: true,
    },
    {
      key: 'governance' as const,
      label: t.skills.governance,
      items: resume.skills.governance,
      accent: false,
    },
    {
      key: 'monitoring' as const,
      label: t.skills.monitoring,
      items: resume.skills.monitoring,
      accent: false,
    },
    {
      key: 'methodologies' as const,
      label: t.skills.methodologies,
      items: resume.skills.methodologies,
      accent: false,
    },
    {
      key: 'tools' as const,
      label: t.skills.tools,
      items: resume.skills.tools,
      accent: false,
    },
  ];

  return (
    <section
      id="habilidades"
      style={{
        background: 'var(--color-bg)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle title={t.sections.skills} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {groups.map((group, i) => {
            const Icon = categoryIcons[group.key];
            return (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{
                  background: group.accent
                    ? 'linear-gradient(135deg, rgba(13,39,71,0.04) 0%, rgba(63,184,214,0.06) 100%)'
                    : 'transparent',
                  border: group.accent ? '1px solid rgba(63,184,214,0.18)' : '1px solid transparent',
                  borderRadius: '14px',
                  padding: group.accent ? '1.25rem' : '0',
                }}
              >
                {/* Category header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.55rem',
                  marginBottom: '0.9rem',
                }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '7px', flexShrink: 0,
                    background: group.accent ? 'rgba(63,184,214,0.15)' : 'rgba(13,39,71,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon
                      size={14}
                      color={group.accent ? 'var(--color-accent)' : 'var(--color-text-muted)'}
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.76rem',
                      color: group.accent ? 'var(--color-primary)' : 'var(--color-text-muted)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      margin: 0,
                    }}
                  >
                    {group.label}
                  </h3>
                </div>

                {/* Skill badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.items.map((item) => (
                    <SkillBadge
                      key={item}
                      label={item}
                      variant={group.accent ? 'accent' : 'default'}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
