import { motion } from 'framer-motion';

interface TimelineItemProps {
  period: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  highlights: string[];
  isLast?: boolean;
}

export function TimelineItem({
  period,
  title,
  subtitle,
  location,
  description,
  highlights,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '0',
        position: 'relative',
        paddingLeft: '2rem',
        paddingBottom: isLast ? '0' : '2.5rem',
      }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div
          style={{
            position: 'absolute',
            left: '6px',
            top: '14px',
            bottom: '0',
            width: '2px',
            background: 'var(--color-border)',
          }}
        />
      )}
      {/* Timeline dot */}
      <div
        style={{
          position: 'absolute',
          left: '0',
          top: '8px',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: 'var(--color-accent)',
          border: '2px solid var(--color-bg)',
          boxShadow: '0 0 0 2px var(--color-accent)',
        }}
      />

      {/* Period */}
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--color-accent)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase' as const,
          marginBottom: '0.25rem',
        }}
      >
        {period}
      </span>

      {/* Role */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.05rem',
          color: 'var(--color-primary)',
          margin: '0 0 0.2rem 0',
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>

      {/* Company + location */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9rem',
          fontWeight: 500,
          color: 'var(--color-text)',
          margin: '0 0 0.15rem 0',
        }}
      >
        {subtitle}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)',
          margin: '0 0 0.75rem 0',
        }}
      >
        {location}
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9rem',
          color: 'var(--color-text)',
          lineHeight: 1.65,
          margin: '0 0 0.75rem 0',
        }}
      >
        {description}
      </p>

      {/* Highlights */}
      {highlights.length > 0 && (
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '0.35rem',
          }}
        >
          {highlights.map((h, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  marginTop: '0.45em',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                }}
              />
              {h}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
