import { motion } from 'framer-motion';
import { Award, ExternalLink, Download, Sparkles, FileText } from 'lucide-react';
import { Button } from './ui/button';

interface Certificate {
  title: string;
  issuer: string;
  period: string;
  description: string;
  file: string;
  accent: string;
}

const certificates: Certificate[] = [
  {
    title: 'Oracle Cloud AI Foundation Associate',
    issuer: 'Oracle',
    period: 'Oct 2025',
    description: 'Oracle Cloud Infrastructure 2025 Certified AI Foundation Associate.',
    file: '/certificates/oracle-ai-foundation.pdf',
    accent: '#f59e0b',
  },
  {
    title: 'Machine Learning Made Easy',
    issuer: 'Lovely Professional University',
    period: 'Jun – Jul 2025',
    description: 'From fundamentals to applied ML — supervised & unsupervised learning with Python and Scikit-Learn.',
    file: '/certificates/lpu-machine-learning-certificate.pdf',
    accent: '#a855f7',
  },
  {
    title: 'Machine Learning Internship',
    issuer: 'Techno Hacks',
    period: 'Nov – Dec 2025',
    description: 'Internship completion — ML workflows, data pipelines, and Python implementations.',
    file: '/certificates/techno-hacks-internship.pdf',
    accent: '#22d3ee',
  },
  {
    title: 'Personality Development Introductory Course',
    issuer: 'Infosys',
    period: 'Oct 2024',
    description: 'Foundational soft skills and professional development through Infosys Springboard.',
    file: '/certificates/infosys-personality-development.pdf',
    accent: '#3b82f6',
  },
  {
    title: 'Google Professional Certificate',
    issuer: 'Google',
    period: 'Completed',
    description: 'Industry-recognized credential from Google’s training program.',
    file: '/certificates/google-certificate.pdf',
    accent: '#34a853',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-slide relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-galaxy)' }} />
      <div className="absolute inset-0 opacity-35" style={{ background: 'var(--gradient-nebula)' }} />

      <motion.div
        className="section-container relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-14">
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full glass-card border border-primary/30"
            animate={{
              boxShadow: [
                '0 0 20px rgba(139,92,246,0.2)',
                '0 0 35px rgba(139,92,246,0.35)',
                '0 0 20px rgba(139,92,246,0.2)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="text-primary" size={18} />
            <span className="text-sm font-semibold text-primary">Credentials</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-3">
            Certificates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Verified certifications and program completions — open or download each PDF.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <motion.article
              key={cert.file}
              variants={itemVariants}
              className="group relative rounded-3xl overflow-hidden glass-card-hover border border-border/40"
              whileHover={{ y: -4 }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, ${cert.accent}, ${cert.accent}66)`,
                  boxShadow: `0 0 20px ${cert.accent}50`,
                }}
              />
              <div className="p-6 pt-8">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="p-3 rounded-2xl shrink-0"
                    style={{
                      background: `${cert.accent}22`,
                      border: `1px solid ${cert.accent}44`,
                    }}
                  >
                    <Award size={26} style={{ color: cert.accent }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg leading-snug mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground/80 mt-1">{cert.period}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex items-start gap-2">
                  <FileText size={16} className="shrink-0 mt-0.5 opacity-60" />
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    className="gap-2 rounded-xl text-white border-0"
                    style={{
                      background: `linear-gradient(135deg, ${cert.accent}, ${cert.accent}99)`,
                      boxShadow: `0 0 20px ${cert.accent}35`,
                    }}
                    onClick={() => window.open(cert.file, '_blank', 'noopener,noreferrer')}
                  >
                    <ExternalLink size={16} />
                    View PDF
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2 rounded-xl border-border/60"
                    onClick={() => {
                      const a = document.createElement('a');
                      a.href = cert.file;
                      a.download = cert.file.split('/').pop() || 'certificate.pdf';
                      a.rel = 'noopener';
                      document.body.appendChild(a);
                      a.click();
                      a.remove();
                    }}
                  >
                    <Download size={16} />
                    Download
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificatesSection;
