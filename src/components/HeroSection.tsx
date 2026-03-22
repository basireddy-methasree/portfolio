import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Linkedin, Github } from 'lucide-react';
import blackSuitPhoto from '@/assets/black-suit-photo.jpeg';

const socialLinks = [
  { icon: Github, href: 'https://github.com/basireddy-methasree/', label: 'GitHub', color: '#a855f7' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/methasreebasireddy31/', label: 'LinkedIn', color: '#0077b5' },
];

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < text.length) {
          setDisplayText(text.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(text.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-flex items-center">
      {displayText}
      <motion.span
        className="inline-block w-1 h-10 ml-1 rounded-full"
        style={{
          background: 'linear-gradient(180deg, #a855f7, #22d3ee)',
          boxShadow: '0 0 10px #a855f7, 0 0 20px #22d3ee',
        }}
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
    </span>
  );
};

const HeroSection = () => {
  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    })),
  []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="section-slide relative overflow-hidden" style={{ background: 'var(--gradient-galaxy)' }}>
      {/* Background layers */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-nebula)' }} />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-aurora)' }} />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.size > 2 ? 'radial-gradient(circle, #fff 0%, rgba(255,255,255,0.3) 100%)' : 'rgba(255,255,255,0.6)',
            boxShadow: particle.size > 2 ? `0 0 ${particle.size * 3}px rgba(255,255,255,0.5)` : 'none',
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ x: [0, -40, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm font-medium"
                style={{
                  border: '1px solid rgba(34,211,238,0.5)',
                  boxShadow: '0 0 25px rgba(34,211,238,0.3)',
                }}
                animate={{
                  boxShadow: ['0 0 25px rgba(34,211,238,0.3)', '0 0 40px rgba(34,211,238,0.5)', '0 0 25px rgba(34,211,238,0.3)'],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
                </span>
                <span className="text-cyan-400 font-semibold">Open to opportunities</span>
              </motion.span>
            </motion.div>

            {/* Name - fully visible */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              <motion.span 
                className="text-muted-foreground text-xl sm:text-2xl block mb-2 italic"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Hi, I'm
              </motion.span>
              <h1 className="font-bold leading-tight">
                <motion.span 
                  className="font-display block text-5xl sm:text-6xl md:text-7xl"
                  style={{
                    background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 30%, #8b5cf6 60%, #6366f1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 25px rgba(139,92,246,0.5))',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Basireddy
                </motion.span>
                <motion.span 
                  className="font-display block text-5xl sm:text-6xl md:text-7xl"
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 40%, #22d3ee 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 25px rgba(99,102,241,0.5))',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  Methasree
                </motion.span>
              </h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 h-12"
              style={{
                background: 'linear-gradient(90deg, #a855f7, #6366f1, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <TypewriterText text="Machine Learning & Python Developer" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              B.Tech Computer Science & Engineering student at LPU — building ML workflows, Django apps, and data-driven solutions
            </motion.p>

            {/* Social Links with glow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex items-center gap-4 justify-center lg:justify-start mb-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-4 rounded-xl glass-card transition-all"
                  style={{
                    border: '1px solid rgba(139,92,246,0.3)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -8,
                    boxShadow: `0 0 30px ${link.color}60`,
                    borderColor: link.color,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0"
                    style={{ background: `radial-gradient(circle, ${link.color}30 0%, transparent 70%)` }}
                    whileHover={{ opacity: 1 }}
                  />
                  <link.icon size={24} className="relative z-10" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons with unique hexagonal glow design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start"
            >
              <motion.button
                onClick={openResume}
                className="relative flex items-center gap-3 px-10 py-5 font-bold text-lg text-white overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #22d3ee 100%)',
                  clipPath: 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%)',
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(139,92,246,0.6), 0 0 80px rgba(34,211,238,0.4)',
                    '0 0 60px rgba(139,92,246,0.9), 0 0 120px rgba(34,211,238,0.6)',
                    '0 0 40px rgba(139,92,246,0.6), 0 0 80px rgba(34,211,238,0.4)',
                  ],
                }}
                transition={{ boxShadow: { duration: 1.5, repeat: Infinity } }}
              >
                {/* Animated shimmer */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.4) 50%, transparent 80%)',
                  }}
                  animate={{ x: ['-150%', '150%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                />
                {/* Glow layer */}
                <motion.div
                  className="absolute -inset-2 opacity-60"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #22d3ee)',
                    filter: 'blur(20px)',
                    clipPath: 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%)',
                  }}
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <Download size={22} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.button>
              
              <motion.button
                onClick={scrollToContact}
                className="relative flex items-center gap-3 px-10 py-5 font-bold text-lg overflow-hidden group"
                style={{
                  background: 'transparent',
                  color: '#c084fc',
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #6366f1, #22d3ee, #a855f7)',
                    backgroundSize: '300% 300%',
                    clipPath: 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%)',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                {/* Inner background */}
                <div 
                  className="absolute inset-[2px]"
                  style={{
                    background: 'rgba(10, 10, 20, 0.9)',
                    clipPath: 'polygon(11px 0%, calc(100% - 11px) 0%, 100% 50%, calc(100% - 11px) 100%, 11px 100%, 0% 50%)',
                  }}
                />
                {/* Glow on hover */}
                <motion.div
                  className="absolute -inset-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #22d3ee)',
                    filter: 'blur(15px)',
                  }}
                />
                <span className="relative z-10">Contact Me</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Large glow */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(99,102,241,0.3) 40%, transparent 70%)',
                  filter: 'blur(50px)',
                  transform: 'scale(1.5)',
                }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1.4, 1.6, 1.4],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Orbiting elements */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <motion.div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-5 h-5 rounded-full bg-cyan-400"
                  style={{ boxShadow: '0 0 25px #22d3ee, 0 0 50px #22d3ee' }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.div 
                  className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-purple-400"
                  style={{ boxShadow: '0 0 20px #a855f7, 0 0 40px #a855f7' }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-1/4 left-0 w-3 h-3 rounded-full bg-pink-400"
                  style={{ boxShadow: '0 0 15px #f472b6' }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>

              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] rounded-full overflow-hidden">
                {/* Animated gradient border */}
                <motion.div
                  className="absolute -inset-1 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, #a855f7, #6366f1, #22d3ee, #f472b6, #a855f7)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-1 rounded-full bg-background" />
                <img
                  src={blackSuitPhoto}
                  alt="Basireddy Methasree"
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover object-top"
                />
              </div>

              {/* Outer rings */}
              <motion.div
                className="absolute -inset-10 rounded-full"
                style={{ border: '1px solid rgba(139,92,246,0.3)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-20 rounded-full"
                style={{ border: '1px solid rgba(139,92,246,0.15)' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-3 rounded-full glass-card transition-all"
            style={{
              border: '1px solid rgba(139,92,246,0.4)',
              boxShadow: '0 0 20px rgba(139,92,246,0.2)',
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ 
              boxShadow: '0 0 30px rgba(139,92,246,0.5)',
              borderColor: 'rgba(139,92,246,0.8)',
            }}
          >
            <ArrowDown size={22} className="text-primary" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;