import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import bookRecommenderImg from '@/assets/book-recommender-screenshot.png';
import inspiringBlogsImg from '@/assets/inspiring-blogs-screenshot.png';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  gradient: string;
  color: string;
  github?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'Book Recommendation System',
    description: 'ML-powered book suggestions',
    longDescription:
      'An intelligent recommendation engine using K-Means clustering and cosine similarity, with visualizations and hyperparameter tuning — aligned with my LPU coursework and resume project.',
    tags: ['Python', 'Scikit-Learn', 'K-Means', 'Matplotlib', 'Pandas'],
    gradient: 'from-cyan-500 to-blue-600',
    color: '#22d3ee',
    github: 'https://github.com/basireddy-methasree/book-recommender-system',
    image: bookRecommenderImg,
  },
  {
    title: 'Emotion Detection Project',
    description: 'Applied ML for classification',
    longDescription:
      'High-accuracy emotion detection and related ML work developed at LPU — part of my applied machine learning portfolio alongside recommendation systems.',
    tags: ['Python', 'Machine Learning', 'Classification', 'Data Science'],
    gradient: 'from-violet-600 to-purple-600',
    color: '#a855f7',
    github: 'https://github.com/basireddy-methasree/emotion-detection-project',
  },
  {
    title: 'Inspiring Blogs',
    description: 'Django full-stack blogging platform',
    longDescription:
      'A Django-powered site with a responsive UI: category navigation, article search, featured stories, user accounts, bookmarks, a personal dashboard, and live stats for articles and categories — built with Django ORM, templates, and authentication.',
    tags: [
      'Django',
      'Python',
      'SQLite',
      'Authentication',
      'Search',
      'Categories',
      'Dashboard',
    ],
    gradient: 'from-amber-500 to-orange-600',
    color: '#f59e0b',
    github: 'https://github.com/basireddy-methasree/blog',
    image: inspiringBlogsImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-slide relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-galaxy)' }} />
      <div className="absolute inset-0 opacity-40" style={{ background: 'var(--gradient-nebula)' }} />

      <motion.div
        className="section-container relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 rounded-2xl glass-card border border-primary/30">
            <FolderGit2 size={28} className="text-primary" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text">Projects</h2>
            <p className="text-muted-foreground mt-1">Featured work & experiments</p>
          </div>
        </motion.div>

        {/* Featured Project Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Project Visual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-3xl overflow-hidden"
              style={{
                border: `2px solid ${projects[activeIndex].color}40`,
                boxShadow: `0 0 40px ${projects[activeIndex].color}20`,
              }}
            >
              {projects[activeIndex].image ? (
                <img 
                  src={projects[activeIndex].image} 
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <div className={`absolute inset-0 bg-gradient-to-br ${projects[activeIndex].gradient} opacity-20`} />
                  <div className="absolute inset-0 glass-card border border-border/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${projects[activeIndex].gradient} 
                        flex items-center justify-center`}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <FolderGit2 size={48} className="text-white" />
                    </motion.div>
                  </div>
                </>
              )}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Project Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Project number */}
              <motion.span 
                className="text-7xl font-display font-bold"
                style={{ color: `${projects[activeIndex].color}30` }}
              >
                0{activeIndex + 1}
              </motion.span>

              <h3 
                className="text-3xl md:text-4xl font-bold -mt-12"
                style={{ color: projects[activeIndex].color }}
              >
                {projects[activeIndex].title}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {projects[activeIndex].longDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {projects[activeIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full glass-card text-sm font-medium"
                    style={{
                      border: `1px solid ${projects[activeIndex].color}40`,
                      color: projects[activeIndex].color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                {projects[activeIndex].github && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      className="gap-2 px-6 py-5 rounded-xl font-bold text-white"
                      style={{
                        background: `linear-gradient(135deg, ${projects[activeIndex].color}, ${projects[activeIndex].color}80)`,
                        boxShadow: `0 0 25px ${projects[activeIndex].color}40`,
                      }}
                      onClick={() => window.open(projects[activeIndex].github, '_blank')}
                    >
                      <Github size={18} />
                      View Code
                    </Button>
                  </motion.div>
                )}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline"
                    className="gap-2 px-6 py-5 rounded-xl font-bold"
                    style={{
                      border: `2px solid ${projects[activeIndex].color}50`,
                      color: projects[activeIndex].color,
                    }}
                    onClick={() => window.open(projects[activeIndex].github, '_blank')}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Navigation */}
        <div className="flex items-center justify-between">
          {/* Project indicators */}
          <div className="flex gap-3">
            {projects.map((project, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative h-3 rounded-full transition-all duration-300 overflow-hidden"
                style={{
                  width: index === activeIndex ? '3rem' : '0.75rem',
                  background: index === activeIndex ? project.color : 'rgba(255,255,255,0.2)',
                  boxShadow: index === activeIndex ? `0 0 15px ${project.color}` : 'none',
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-3">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                className="rounded-full w-12 h-12"
                style={{
                  border: '2px solid rgba(139,92,246,0.5)',
                  boxShadow: '0 0 15px rgba(139,92,246,0.2)',
                }}
              >
                <ChevronLeft size={24} />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                className="rounded-full w-12 h-12"
                style={{
                  border: '2px solid rgba(139,92,246,0.5)',
                  boxShadow: '0 0 15px rgba(139,92,246,0.2)',
                }}
              >
                <ChevronRight size={24} />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card-hover p-6 rounded-2xl cursor-pointer relative overflow-hidden"
              style={{
                border: index === activeIndex ? `2px solid ${project.color}` : '1px solid rgba(255,255,255,0.1)',
                boxShadow: index === activeIndex ? `0 0 30px ${project.color}30` : 'none',
              }}
              onClick={() => setActiveIndex(index)}
              whileHover={{ y: -5, boxShadow: `0 0 30px ${project.color}30` }}
            >
              {/* Corner glow */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 opacity-30"
                style={{ background: `radial-gradient(circle at top right, ${project.color}, transparent 70%)` }}
              />
              
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ 
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}80)`,
                  boxShadow: `0 0 20px ${project.color}40`,
                }}
              >
                <FolderGit2 size={28} className="text-white" />
              </div>
              <h4 className="font-bold mb-2 text-lg" style={{ color: project.color }}>{project.title}</h4>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
