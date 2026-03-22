import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/basireddy-methasree/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/methasreebasireddy31/', label: 'LinkedIn' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      style={{
        borderBottom: isScrolled ? '1px solid rgba(139,92,246,0.2)' : 'none',
        boxShadow: isScrolled ? '0 4px 30px rgba(139,92,246,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with glow */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <motion.div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(139,92,246,0.4)',
                    '0 0 35px rgba(139,92,246,0.6)',
                    '0 0 20px rgba(139,92,246,0.4)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="font-display font-bold text-lg text-white">BM</span>
              </motion.div>
              <motion.div
                className="absolute -inset-1 rounded-xl opacity-50"
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                  filter: 'blur(10px)',
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-muted-foreground hover:text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(99,102,241,0.2) 100%)',
                      border: '1px solid rgba(139,92,246,0.4)',
                      boxShadow: '0 0 15px rgba(139,92,246,0.3)',
                    }}
                    layoutId="activeNav"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Right side: Social + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Links with glow on hover */}
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-white transition-all"
                style={{
                  border: '1px solid transparent',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.15,
                  borderColor: 'rgba(139,92,246,0.5)',
                  boxShadow: '0 0 20px rgba(139,92,246,0.3)',
                  background: 'rgba(139,92,246,0.1)',
                }}
              >
                <link.icon size={18} />
              </motion.a>
            ))}

            {/* CTA Button with strong glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
            >
              <motion.button
                onClick={() => handleNavClick('#contact')}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(139,92,246,0.4)',
                    '0 0 35px rgba(139,92,246,0.6)',
                    '0 0 20px rgba(139,92,246,0.4)',
                  ],
                }}
                transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
              >
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <Sparkles size={16} className="relative z-10" />
                <span className="relative z-10">Hire Me</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
              style={{
                background: 'rgba(10,0,30,0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: '0 0 16px 16px',
              }}
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-muted-foreground hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
                
                <div className="flex items-center gap-3 px-4 pt-4 border-t border-purple-500/20">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-purple-500/10 text-muted-foreground hover:text-white transition-colors"
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;