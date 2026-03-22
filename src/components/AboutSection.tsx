import { motion } from 'framer-motion';
import { User, Code2, Brain, Rocket, Target, Zap, Cpu, Lightbulb } from 'lucide-react';
import blueCoatPhoto from '@/assets/blue-coat-photo.jpeg';

const highlights = [
  { icon: Brain, label: 'AI/ML Expert', color: 'from-purple-500 to-pink-500' },
  { icon: Code2, label: 'Clean Coder', color: 'from-cyan-500 to-blue-500' },
  { icon: Rocket, label: 'Fast Learner', color: 'from-orange-500 to-red-500' },
  { icon: Target, label: 'Problem Solver', color: 'from-green-500 to-emerald-500' },
];

const floatingIcons = [
  { icon: Cpu, x: '10%', y: '20%', delay: 0 },
  { icon: Lightbulb, x: '85%', y: '15%', delay: 1 },
  { icon: Zap, x: '5%', y: '70%', delay: 2 },
  { icon: Brain, x: '90%', y: '75%', delay: 1.5 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const AboutSection = () => {
  return (
    <section id="about" className="section-slide relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-galaxy)' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20" style={{ background: 'var(--gradient-nebula)' }} />

      {/* Floating decorative icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block opacity-10"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <item.icon size={48} className="text-primary" />
        </motion.div>
      ))}

      <motion.div
        className="section-container relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
          <div className="p-3 rounded-2xl glass-card border border-primary/30">
            <User size={28} className="text-primary" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text">About Me</h2>
            <p className="text-muted-foreground mt-1">Get to know me better</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: Image (2 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-2 rounded-3xl opacity-70"
                style={{
                  background: 'conic-gradient(from 0deg, #a855f7, #6366f1, #22d3ee, #ec4899, #a855f7)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute -inset-1 rounded-3xl bg-background" />
              
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden border border-border/50">
                <img
                  src={blueCoatPhoto}
                  alt="Basireddy Methasree"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Floating badge */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 glass-card p-3 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm font-medium text-center">
                    <span className="gradient-text">B.Tech CSE</span> @ LPU
                  </p>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-primary/20"
                animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border-2 border-accent/20"
                animate={{ scale: [1, 1.2, 1], rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

          {/* Right: Content (3 cols) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Bio Text */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I am a <span className="text-primary font-semibold">B.Tech Computer Science and Engineering</span> student 
                at Lovely Professional University, focused on machine learning, Python, and Django-backed applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy building ML workflows, recommendation systems, and full-stack projects. 
                Passionate about <span className="text-accent">continuous learning</span>, data-driven problem-solving, and clean engineering.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass-card-hover p-4 rounded-2xl text-center group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} p-3 
                    transition-all group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <p className="text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
              {[
                { value: '10+', label: 'Projects' },
                { value: '20+', label: 'Certifications' },
                { value: '3+', label: 'Years Learning' },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center p-4 rounded-2xl glass-card group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.p 
                    className="text-3xl font-bold font-display gradient-text"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
