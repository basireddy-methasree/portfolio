import { motion } from 'framer-motion';
import { Github, Linkedin, Download, Send } from 'lucide-react';
import { Button } from './ui/button';
import contactPhoto from '@/assets/contact-photo.jpeg';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/methasreebasireddy31/' },
  { icon: Github, href: 'https://github.com/basireddy-methasree/' },
];

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-galaxy)' }} />
      
      <div className="section-container py-16 relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-display font-bold text-xl text-primary-foreground">BM</span>
            </div>
            <span className="font-display font-bold text-2xl gradient-text">Methasree</span>
          </motion.div>

          <p className="text-muted-foreground mb-6">Where code meets creativity.</p>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-6"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent/50 mx-auto mb-3">
              <img src={contactPhoto} alt="Basireddy Methasree" className="w-full h-full object-cover object-top" />
            </div>
            <p className="font-semibold">Basireddy Methasree</p>
            <p className="text-sm text-muted-foreground">CSE · ML & Python</p>
          </motion.div>

          {/* Social links */}
          <div className="flex items-center gap-3 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card border border-border/50 flex items-center justify-center hover:border-accent/50 hover:text-accent transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 mb-8">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-accent/50 hover:bg-accent/10 rounded-full"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download size={16} />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-primary/50 hover:bg-primary/10 rounded-full"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Send size={16} />
              Send Message
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Basireddy Methasree. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;