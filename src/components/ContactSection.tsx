import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin, Linkedin, Github, MessageCircle, FileText, Sparkles, Heart, Rocket, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '@/hooks/use-toast';
import contactPhoto from '@/assets/contact-photo.jpeg';

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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct WhatsApp message
    const whatsappMessage = `Hi! I'm ${formData.name}.%0A%0AEmail: ${formData.email}%0A%0ASubject: ${formData.subject}%0A%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/917842450377?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
      title: '✨ Redirecting to WhatsApp!',
      description: "You'll be connected with me shortly.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'basireddymethasree2004@gmail.com',
      href: 'mailto:basireddymethasree2004@gmail.com',
      color: '#22d3ee',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7842450377',
      href: 'tel:+917842450377',
      color: '#a855f7',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Punjab, India',
      href: '#',
      color: '#f472b6',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/methasreebasireddy31/', color: '#0077b5', name: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/basireddy-methasree/', color: '#6e5494', name: 'GitHub' },
  ];

  return (
    <section id="contact" className="section-slide relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-galaxy)' }} />
      <div className="absolute inset-0 opacity-50" style={{ background: 'var(--gradient-nebula)' }} />
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: ['#22d3ee', '#a855f7', '#f472b6', '#facc15'][i % 4],
            boxShadow: `0 0 10px ${['#22d3ee', '#a855f7', '#f472b6', '#facc15'][i % 4]}`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

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
            className="inline-flex items-center gap-2 mb-4 px-6 py-2 rounded-full glass-card"
            style={{
              border: '2px solid rgba(139,92,246,0.5)',
              boxShadow: '0 0 30px rgba(139,92,246,0.3)',
            }}
            animate={{
              boxShadow: ['0 0 30px rgba(139,92,246,0.3)', '0 0 50px rgba(139,92,246,0.5)', '0 0 30px rgba(139,92,246,0.3)'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="text-accent" size={18} />
            <span className="text-accent font-medium">Ready to Connect</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-4">
            <span style={{
              background: 'linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.5))',
            }}>
              Let's Create Something Amazing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you have an exciting project in mind, want to discuss AI & ML innovations, 
            or simply want to connect — I'd love to hear from you! Every great collaboration 
            starts with a simple "Hello" ✨
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left side - Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <motion.div 
              className="glass-card p-8 rounded-3xl relative overflow-hidden"
              style={{
                border: '1px solid rgba(34,211,238,0.3)',
              }}
              whileHover={{
                boxShadow: '0 0 40px rgba(34,211,238,0.2)',
              }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-30"
                style={{ background: 'radial-gradient(circle at top right, #22d3ee, transparent 70%)' }}
              />
              
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="p-3 rounded-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, #25d366, #128c7e)',
                    boxShadow: '0 0 20px rgba(37,211,102,0.4)',
                  }}
                  animate={{
                    boxShadow: ['0 0 20px rgba(37,211,102,0.4)', '0 0 35px rgba(37,211,102,0.6)', '0 0 20px rgba(37,211,102,0.4)'],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MessageCircle size={24} className="text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold">Send Me a Message</h3>
                  <p className="text-sm text-muted-foreground">I'll respond within 24 hours!</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block flex items-center gap-2">
                      <Star size={12} className="text-accent" /> Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-secondary/50 border-border focus:border-accent rounded-xl transition-all focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block flex items-center gap-2">
                      <Mail size={12} className="text-accent" /> Your Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-secondary/50 border-border focus:border-accent rounded-xl transition-all focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block flex items-center gap-2">
                    <Rocket size={12} className="text-accent" /> Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Project Collaboration / Job Opportunity / Just Saying Hi!"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-12 bg-secondary/50 border-border focus:border-accent rounded-xl transition-all focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block flex items-center gap-2">
                    <Heart size={12} className="text-accent" /> Your Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your exciting project, share your ideas, or just say hello! I'm always eager to connect with passionate people..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-accent resize-none rounded-xl transition-all focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full h-14 gap-3 text-lg font-bold rounded-xl text-white relative overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                      boxShadow: '0 0 30px rgba(37,211,102,0.4)',
                    }}
                    disabled={isSubmitting}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: 'linear-gradient(135deg, #34d399 0%, #25d366 100%)',
                      }}
                    />
                    <span className="relative z-10 flex items-center gap-3">
                      <MessageCircle size={22} />
                      Send via WhatsApp
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>

          {/* Right side - Profile & Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <motion.div 
              className="glass-card p-6 rounded-3xl text-center relative overflow-hidden"
              style={{
                border: '1px solid rgba(168,85,247,0.3)',
              }}
              whileHover={{
                boxShadow: '0 0 40px rgba(168,85,247,0.2)',
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-20"
                style={{ background: 'radial-gradient(circle at top, #a855f7, transparent 60%)' }}
              />
              
              <div className="relative inline-block mb-4">
                <motion.div
                  className="w-32 h-32 rounded-full overflow-hidden mx-auto relative"
                  style={{
                    border: '4px solid transparent',
                    background: 'linear-gradient(#000, #000) padding-box, linear-gradient(135deg, #22d3ee, #a855f7, #f472b6) border-box',
                  }}
                  animate={{ 
                    boxShadow: [
                      '0 0 30px rgba(139,92,246,0.4)',
                      '0 0 50px rgba(139,92,246,0.6)',
                      '0 0 30px rgba(139,92,246,0.4)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img
                    src={contactPhoto}
                    alt="Basireddy Methasree"
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold mb-1">Basireddy Methasree</h3>
              <motion.p 
                className="text-sm mb-4 font-medium"
                style={{
                  background: 'linear-gradient(90deg, #22d3ee, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                ✨ Open to Exciting Opportunities
              </motion.p>
              
              <div className="flex justify-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 rounded-xl"
                    style={{
                      border: '2px solid #22d3ee',
                      color: '#22d3ee',
                    }}
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <FileText size={16} />
                    Resume
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 rounded-xl"
                    style={{
                      border: '2px solid #a855f7',
                      color: '#a855f7',
                    }}
                    onClick={() => window.location.href = 'mailto:basireddymethasree2004@gmail.com'}
                  >
                    <Mail size={16} />
                    Email Me
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Get In Touch */}
            <motion.div 
              className="glass-card p-6 rounded-3xl"
              style={{
                border: '1px solid rgba(34,211,238,0.3)',
              }}
            >
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Sparkles size={16} className="text-accent" />
                Get In Touch
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-3 text-sm group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-11 h-11 rounded-xl glass-card flex items-center justify-center transition-all"
                      style={{ border: `1px solid ${info.color}40` }}
                      whileHover={{ 
                        borderColor: info.color,
                        boxShadow: `0 0 20px ${info.color}40`,
                      }}
                    >
                      <info.icon size={18} style={{ color: info.color }} />
                    </motion.div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      <p className="font-medium group-hover:text-accent transition-colors">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Follow Me */}
            <motion.div 
              className="glass-card p-6 rounded-3xl"
              style={{
                border: '1px solid rgba(244,114,182,0.3)',
              }}
            >
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Heart size={16} className="text-pink-400" />
                Let's Connect
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Follow my journey and stay updated with my latest projects!
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-60 blur-lg transition-opacity"
                      style={{ background: link.color }}
                    />
                    <div 
                      className="relative w-12 h-12 rounded-xl glass-card flex items-center justify-center transition-all"
                      style={{ border: `1px solid ${link.color}40` }}
                    >
                      <link.icon size={22} style={{ color: link.color }} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;