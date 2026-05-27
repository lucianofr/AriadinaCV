interface SkillBadgeProps {
  label: string;
  variant?: 'default' | 'accent';
}

export function SkillBadge({ label, variant = 'default' }: SkillBadgeProps) {
  const isAccent = variant === 'accent';
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.35rem 0.85rem',
        borderRadius: '100px',
        fontSize: '0.8125rem',
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        letterSpacing: '0.01em',
        backgroundColor: isAccent ? 'var(--color-accent)' : 'var(--color-bg-alt)',
        color: isAccent ? '#ffffff' : 'var(--color-primary)',
        border: isAccent ? 'none' : '1px solid var(--color-border)',
        whiteSpace: 'normal' as const,
        lineHeight: 1.35,
        transition: 'background-color 0.2s, color 0.2s',
      }}
    >
      {label}
    </span>
  );
}
