import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Sparkles, BookOpen, Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  type: 'work' | 'training';
  color: string;
  icon: typeof Briefcase;
  /** Public path under /certificates/ — shows View + Download when set */
  certificatePdf?: string;
}

const experiences: Experience[] = [
  {
    title: 'Machine Learning Intern',
    company: 'Techno Hacks',
    location: 'Remote',
    period: 'Nov 2025 – Dec 2025',
    points: [
      'Implemented ML algorithms and statistical models in Python for data-driven problems',
      'Cleaned datasets, feature extraction, and preparation for modeling',
      'Designed ML workflows and data pipelines for training and deployment',
    ],
    type: 'work',
    color: '#a855f7',
    icon: Briefcase,
    certificatePdf: '/certificates/techno-hacks-internship.pdf',
  },
  {
    title: 'Machine Learning Made Easy',
    company: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    period: 'Jun 2025 – Jul 2025',
    points: [
      'Supervised and unsupervised ML fundamentals through LPU certificate program',
      'Built models with Python and Scikit-Learn — training, testing, and optimization',
      'Applied concepts to classification, clustering, and recommendation projects',
    ],
    type: 'training',
    color: '#f472b6',
    icon: BookOpen,
    certificatePdf: '/certificates/lpu-machine-learning-certificate.pdf',
  },
];

const downloadCertificate = (href: string) => {
  const name = href.split('/').pop() || 'certificate.pdf';
  const a = document.createElement('a');
  a.href = href;
  a.download = name;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const } }
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-slide relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-galaxy)' }} />
      <div className="absolute inset-0 opacity-40" style={{ background: 'var(--gradient-nebula)' }} />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)', filter: 'blur(50px)' }}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

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
            className="inline-flex items-center gap-2 mb-4 px-6 py-2.5 rounded-full"
            style={{
              background: 'rgba(139,92,246,0.15)',
              border: '1px solid rgba(139,92,246,0.4)',
              boxShadow: '0 0 30px rgba(139,92,246,0.2)',
            }}
            animate={{
              boxShadow: ['0 0 30px rgba(139,92,246,0.2)', '0 0 50px rgba(139,92,246,0.4)', '0 0 30px rgba(139,92,246,0.2)'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="text-purple-400" size={18} />
            <span className="text-purple-400 font-semibold">Professional Journey</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-4">
            <span style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.4))',
            }}>
              Experience & Training
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on learning and real-world projects
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, #a855f7, #6366f1, #22d3ee)',
              boxShadow: '0 0 20px rgba(139,92,246,0.5)',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const IconComponent = exp.icon;
              
              return (
                <motion.div
                  key={exp.title + exp.company}
                  variants={itemVariants}
                  className={`relative flex items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full -translate-x-1/2 z-10"
                    style={{
                      background: exp.color,
                      boxShadow: `0 0 20px ${exp.color}, 0 0 40px ${exp.color}`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [`0 0 20px ${exp.color}`, `0 0 40px ${exp.color}`, `0 0 20px ${exp.color}`],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Card */}
                  <motion.div
                    className={`ml-20 md:ml-0 md:w-[45%] ${isLeft ? '' : 'md:ml-auto'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      className="relative p-6 md:p-8 rounded-3xl overflow-hidden"
                      style={{
                        background: 'rgba(20,10,40,0.6)',
                        backdropFilter: 'blur(20px)',
                        border: `1px solid ${exp.color}40`,
                      }}
                      whileHover={{
                        boxShadow: `0 0 50px ${exp.color}30`,
                        borderColor: `${exp.color}60`,
                      }}
                    >
                      {/* Gradient accent */}
                      <motion.div 
                        className="absolute top-0 left-0 w-full h-1 rounded-t-3xl"
                        style={{ background: `linear-gradient(90deg, ${exp.color}, ${exp.color}80, transparent)` }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Corner glow */}
                      <div 
                        className="absolute -top-20 -right-20 w-40 h-40 opacity-30"
                        style={{ background: `radial-gradient(circle, ${exp.color}, transparent 70%)` }}
                      />

                      <div className="relative flex items-start gap-5">
                        {/* Icon */}
                        <motion.div
                          className="p-4 rounded-2xl shrink-0"
                          style={{ 
                            background: `linear-gradient(135deg, ${exp.color}, ${exp.color}80)`,
                            boxShadow: `0 0 30px ${exp.color}50`,
                          }}
                          animate={{
                            boxShadow: [`0 0 25px ${exp.color}40`, `0 0 40px ${exp.color}60`, `0 0 25px ${exp.color}40`],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <IconComponent size={28} className="text-white" />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          {/* Type badge */}
                          <div className="flex items-center gap-3 mb-3">
                            <span 
                              className="px-4 py-1.5 rounded-full text-sm font-semibold"
                              style={{
                                background: `${exp.color}20`,
                                color: exp.color,
                                border: `1px solid ${exp.color}50`,
                                boxShadow: `0 0 15px ${exp.color}20`,
                              }}
                            >
                              {exp.type === 'work' ? '💼 Work Experience' : '📚 Training Program'}
                            </span>
                          </div>

                          <h3 
                            className="text-2xl md:text-3xl font-bold mb-2 font-display"
                            style={{ color: exp.color }}
                          >
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-foreground mb-3">{exp.company}</p>

                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-5">
                            <span 
                              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                              style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}
                            >
                              <MapPin size={14} style={{ color: exp.color }} />
                              {exp.location}
                            </span>
                            <span 
                              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                              style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}
                            >
                              <Calendar size={14} style={{ color: exp.color }} />
                              {exp.period}
                            </span>
                          </div>

                          <ul className="space-y-3">
                            {exp.points.map((point, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-3 text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <motion.div
                                  className="mt-2 w-2 h-2 rounded-full shrink-0"
                                  style={{ background: exp.color, boxShadow: `0 0 10px ${exp.color}` }}
                                  animate={{ scale: [1, 1.3, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                                />
                                <span className="text-base leading-relaxed">{point}</span>
                              </motion.li>
                            ))}
                          </ul>

                          {exp.certificatePdf && (
                            <div className="mt-6 pt-5 border-t border-border/40 flex flex-wrap gap-2">
                              <Button
                                size="sm"
                                className="gap-2 rounded-xl text-white border-0"
                                style={{
                                  background: `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)`,
                                  boxShadow: `0 0 18px ${exp.color}40`,
                                }}
                                onClick={() => window.open(exp.certificatePdf, '_blank', 'noopener,noreferrer')}
                              >
                                <ExternalLink size={16} />
                                View certificate
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="gap-2 rounded-xl border-border/70"
                                style={{ borderColor: `${exp.color}55` }}
                                onClick={() => downloadCertificate(exp.certificatePdf!)}
                              >
                                <Download size={16} />
                                Download PDF
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;