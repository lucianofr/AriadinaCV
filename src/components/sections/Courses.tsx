import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from '../../i18n/useTranslation';
import { resume } from '../../data/resume';

export function Courses() {
  const t = useTranslation();

  // Separate standard courses and PMI workshops
  const pmiWorkshops = resume.courses.filter(
    (c) => c.provider.includes('PMI') || c.name.includes('PMI')
  );
  const standardCourses = resume.courses.filter(
    (c) => !c.provider.includes('PMI') && !c.name.includes('PMI')
  );

  return (
    <section
      id="cursos"
      style={{
        background: 'var(--color-bg)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle title={t.sections.courses} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Standard Courses */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.75rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(13,39,71,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BookOpen size={16} color="var(--color-primary)" />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: 'var(--color-primary)',
                  margin: 0,
                }}
              >
                Capacitação Profissional
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {standardCourses.map((course, idx) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderLeft: '4px solid var(--color-primary)',
                    borderRadius: '10px',
                    padding: '1rem 1.25rem',
                    boxShadow: '0 1px 3px rgba(13,39,71,0.02)',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = '0 4px 15px rgba(13,39,71,0.06)';
                    el.style.transform = 'translateX(2px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = '0 1px 3px rgba(13,39,71,0.02)';
                    el.style.transform = 'none';
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      color: 'var(--color-primary)',
                      margin: '0 0 0.25rem 0',
                      lineHeight: 1.4,
                    }}
                  >
                    {course.name}
                  </h4>
                  {(course.provider || course.period) && (
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.78rem',
                        color: 'var(--color-text-muted)',
                        margin: 0,
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      {course.provider && <span>{course.provider}</span>}
                      {course.provider && course.period && <span>·</span>}
                      {course.period && (
                        <span style={{ fontWeight: 500, color: 'var(--color-accent)' }}>
                          {course.period}
                        </span>
                      )}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: PMI Workshops */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.75rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(63,184,214,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Award size={16} color="var(--color-accent)" />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: 'var(--color-primary)',
                  margin: 0,
                }}
              >
                Workshops & Extensões PMI
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {pmiWorkshops.map((course, idx) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderLeft: '4px solid var(--color-accent)',
                    borderRadius: '10px',
                    padding: '1rem 1.25rem',
                    boxShadow: '0 1px 3px rgba(13,39,71,0.02)',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = '0 4px 15px rgba(13,39,71,0.06)';
                    el.style.transform = 'translateX(2px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = '0 1px 3px rgba(13,39,71,0.02)';
                    el.style.transform = 'none';
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      color: 'var(--color-primary)',
                      margin: '0 0 0.25rem 0',
                      lineHeight: 1.4,
                    }}
                  >
                    {course.name}
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      color: 'var(--color-text-muted)',
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span>{course.provider}</span>
                    <span>·</span>
                    <span style={{ fontWeight: 500, color: 'var(--color-accent)' }}>
                      {course.period}
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
