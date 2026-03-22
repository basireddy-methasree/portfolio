import { motion } from 'framer-motion';
import { GraduationCap, Target, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

interface Education {
  title: string;
  institution: string;
  description: string;
  score: string;
  scoreLabel: string;
  grade: string;
  year: string;
  subjects: string[];
  side: 'left' | 'right';
  achievement?: string;
  icon: React.ElementType;
  glowColor: string;
}

const educations: Education[] = [
  {
    title: 'Class 10 · SSC',
    institution: 'Secondary School (Board Examination)',
    description: 'Secondary School Certificate with perfect grade point.',
    score: '10.0',
    scoreLabel: 'GPA (out of 10)',
    grade: 'A+',
    year: '2020 – 2021',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Languages'],
    side: 'left',
    achievement: '🏆 Perfect 10.0 GPA',
    icon: BookOpen,
    glowColor: '#22d3ee',
  },
  {
    title: 'Intermediate — MBiPC',
    institution: 'RGUKT, Iddupulapaya, Andhra Pradesh',
    description: 'Higher secondary with Mathematics, Biology, Physics, and Chemistry',
    score: '9.3',
    scoreLabel: 'CGPA',
    grade: 'A+',
    year: 'Jun 2021 – May 2023',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    side: 'right',
    achievement: '⭐ Distinction',
    icon: GraduationCap,
    glowColor: '#a855f7',
  },
  {
    title: 'B.Tech Computer Science & Engineering',
    institution: 'Lovely Professional University, Punjab, India',
    description: 'Undergraduate degree with focus on software engineering, ML, and systems',
    score: '8.2',
    scoreLabel: 'CGPA',
    grade: 'A+',
    year: 'Aug 2023 – Present',
    subjects: ['Python', 'Django', 'DSA', 'DBMS', 'Machine Learning', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'MongoDB'],
    side: 'left',
    achievement: '🚀 In progress · A+ grade band',
    icon: Target,
    glowColor: '#f472b6',
  },
];

const stats = [
  { value: '6+', label: 'Academic Years', color: '#22d3ee' },
  { value: '90%+', label: 'Average Performance', color: '#a855f7' },
  { value: '10+', label: 'Major Projects', color: '#f472b6' },
  { value: '20+', label: 'Certifications', color: '#facc15' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const EducationSection = () => {
  return (
    <section id="education" className="section-slide relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-galaxy)' }} />
      <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-nebula)' }} />

      <motion.div
        className="section-container relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div 
            className="inline-block mb-4"
            animate={{ 
              boxShadow: ['0 0 20px rgba(139,92,246,0.3)', '0 0 40px rgba(139,92,246,0.5)', '0 0 20px rgba(139,92,246,0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="px-6 py-2 rounded-full glass-card border border-accent/50 text-accent font-medium flex items-center gap-2">
              <Sparkles size={16} />
              Academic Journey
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-4 drop-shadow-[0_0_24px_rgba(139,92,246,0.35)]">
            Academic Journey
          </h2>
          <p className="text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto font-medium leading-relaxed">
            SSC to engineering — <span className="text-primary font-semibold">A+ grades</span>, strong CGPA, and consistent academic performance.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden lg:block">
            <motion.div 
              className="w-full h-full rounded-full"
              style={{
                background: 'linear-gradient(to bottom, #22d3ee, #a855f7, #f472b6)',
                boxShadow: '0 0 20px rgba(139,92,246,0.5)',
              }}
              animate={{
                boxShadow: ['0 0 20px rgba(139,92,246,0.3)', '0 0 40px rgba(139,92,246,0.6)', '0 0 20px rgba(139,92,246,0.3)'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Glowing dots on timeline */}
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background"
                style={{ 
                  top: `${(index * 25) + 12}%`,
                  background: edu.glowColor,
                  boxShadow: `0 0 20px ${edu.glowColor}`,
                }}
                animate={{ 
                  scale: [1, 1.4, 1], 
                  boxShadow: [`0 0 20px ${edu.glowColor}`, `0 0 40px ${edu.glowColor}`, `0 0 20px ${edu.glowColor}`]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />
            ))}
          </div>

          <div className="space-y-12 lg:space-y-24">
            {educations.map((edu, index) => (
              <motion.div
                key={edu.title}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  edu.side === 'right' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Year badge - center */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 flex-col items-center z-10">
                  <motion.div
                    className="glass-card px-6 py-3 rounded-2xl"
                    style={{
                      border: `2px solid ${edu.glowColor}`,
                      boxShadow: `0 0 20px ${edu.glowColor}40`,
                    }}
                    whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${edu.glowColor}60` }}
                  >
                    <span className="font-display font-bold text-lg" style={{ color: edu.glowColor }}>{edu.year}</span>
                    {edu.achievement && (
                      <p className="text-xs text-center mt-1">{edu.achievement}</p>
                    )}
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  className={`flex-1 max-w-xl ${edu.side === 'right' ? 'lg:text-left' : 'lg:text-left'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div 
                    className="glass-card-hover p-6 rounded-3xl relative overflow-hidden"
                    style={{
                      border: `1px solid ${edu.glowColor}40`,
                    }}
                  >
                    {/* Gradient corner */}
                    <div 
                      className="absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-30"
                      style={{ background: `radial-gradient(circle at top right, ${edu.glowColor}, transparent 70%)` }}
                    />
                    
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className="p-3 rounded-2xl"
                        style={{ 
                          background: `linear-gradient(135deg, ${edu.glowColor}, ${edu.glowColor}80)`,
                          boxShadow: `0 0 20px ${edu.glowColor}50`,
                        }}
                        animate={{
                          boxShadow: [`0 0 20px ${edu.glowColor}30`, `0 0 30px ${edu.glowColor}60`, `0 0 20px ${edu.glowColor}30`],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <edu.icon size={24} className="text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold flex items-center gap-2">
                          {edu.title}
                          <CheckCircle2 size={18} style={{ color: edu.glowColor }} />
                        </h3>
                        <p className="text-muted-foreground text-sm">{edu.institution}</p>
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">{edu.description}</p>
                    )}

                    {/* High-visibility A+ band */}
                    {edu.grade === 'A+' && (
                      <div
                        className="mb-5 rounded-2xl px-4 py-4 sm:px-5 border-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4"
                        style={{
                          borderColor: `${edu.glowColor}88`,
                          background: `linear-gradient(135deg, ${edu.glowColor}24, ${edu.glowColor}08)`,
                          boxShadow: `0 0 32px ${edu.glowColor}28, inset 0 1px 0 ${edu.glowColor}35`,
                        }}
                      >
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-foreground/90">
                          Academic grade
                        </span>
                        <span
                          className="font-display text-4xl sm:text-5xl font-extrabold leading-none tabular-nums"
                          style={{
                            color: edu.glowColor,
                            textShadow: `0 0 28px ${edu.glowColor}, 0 0 48px ${edu.glowColor}55`,
                          }}
                        >
                          A+
                        </span>
                      </div>
                    )}

                    {/* Stats row with GLOWING SCORES */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {/* Main Score - Big and Glowing */}
                      <motion.div 
                        className="glass-card px-5 py-4 rounded-2xl relative overflow-hidden min-w-[9rem] flex-1 sm:flex-none"
                        style={{
                          border: `2px solid ${edu.glowColor}`,
                          boxShadow: `0 0 25px ${edu.glowColor}50, inset 0 0 20px ${edu.glowColor}20`,
                        }}
                        animate={{
                          boxShadow: [
                            `0 0 25px ${edu.glowColor}50, inset 0 0 20px ${edu.glowColor}20`,
                            `0 0 40px ${edu.glowColor}70, inset 0 0 30px ${edu.glowColor}30`,
                            `0 0 25px ${edu.glowColor}50, inset 0 0 20px ${edu.glowColor}20`,
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-xs sm:text-sm font-semibold text-muted-foreground block mb-1">{edu.scoreLabel}</span>
                        <motion.span 
                          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl block tracking-tight"
                          style={{ 
                            color: edu.glowColor,
                            textShadow: `0 0 24px ${edu.glowColor}, 0 0 48px ${edu.glowColor}`,
                          }}
                        >
                          {edu.score}
                        </motion.span>
                      </motion.div>
                      
                      {edu.grade !== 'A+' && (
                        <div className="glass-card px-4 py-3 rounded-2xl border-2 border-primary/40 min-w-[6.5rem] flex flex-col justify-center">
                          <span className="text-xs font-semibold text-muted-foreground block mb-0.5">Grade</span>
                          <span className="font-display font-extrabold text-2xl sm:text-3xl" style={{ color: edu.glowColor }}>{edu.grade}</span>
                        </div>
                      )}
                      <div className="glass-card px-4 py-3 rounded-2xl border border-border/60 min-w-[8rem] flex flex-col justify-center">
                        <span className="text-xs font-semibold text-muted-foreground block mb-0.5">Period</span>
                        <span className="font-display font-bold text-sm sm:text-base leading-snug">{edu.year}</span>
                      </div>
                    </div>

                    {/* Subjects */}
                    <div>
                      <span className="text-xs text-muted-foreground mb-2 block">Key Subjects/Skills:</span>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <motion.span
                            key={subject}
                            className="px-3 py-1 rounded-full glass-card text-xs border transition-colors"
                            style={{ borderColor: `${edu.glowColor}30` }}
                            whileHover={{ 
                              borderColor: edu.glowColor,
                              boxShadow: `0 0 15px ${edu.glowColor}40`,
                            }}
                          >
                            {subject}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Mobile year badge */}
                    <div className="lg:hidden mt-4 pt-4 border-t border-border/30">
                      <span className="font-display" style={{ color: edu.glowColor }}>{edu.year}</span>
                      {edu.achievement && (
                        <span className="ml-2 text-xs text-muted-foreground">• {edu.achievement}</span>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 max-w-xl hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass-card p-6 rounded-2xl relative overflow-hidden"
              style={{
                border: `1px solid ${stat.color}40`,
              }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: stat.color,
                boxShadow: `0 0 30px ${stat.color}40`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.span
                className="text-4xl md:text-5xl font-display font-bold block"
                style={{ 
                  color: stat.color,
                  textShadow: `0 0 30px ${stat.color}, 0 0 60px ${stat.color}50`,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: index * 0.1 + 0.2 }}
              >
                {stat.value}
              </motion.span>
              <span className="text-muted-foreground text-sm mt-2 block">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationSection;