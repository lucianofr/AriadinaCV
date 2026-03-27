import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  light?: boolean;
}

export function SectionTitle({ title, light = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '3rem' }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
          color: light ? '#ffffff' : 'var(--color-primary)',
          margin: '0 0 0.75rem 0',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: '3rem',
          height: '3px',
          background: light ? 'rgba(255,255,255,0.5)' : 'var(--color-accent)',
          borderRadius: '2px',
        }}
      />
    </motion.div>
  );
}
