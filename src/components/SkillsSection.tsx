import { motion } from 'framer-motion';
import { Code, Globe, Database, Wrench, Brain } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  iconGradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code,
    iconGradient: 'from-cyan-400 to-blue-500',
    skills: [
      { name: 'Python', level: 92, color: 'from-cyan-400 to-cyan-600' },
      { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
      { name: 'HTML', level: 93, color: 'from-orange-400 to-orange-600' },
      { name: 'CSS', level: 90, color: 'from-blue-400 to-blue-600' },
    ],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    iconGradient: 'from-purple-400 to-pink-500',
    skills: [
      { name: 'Django', level: 88, color: 'from-green-500 to-emerald-600' },
      { name: 'HTML/CSS', level: 92, color: 'from-orange-400 to-orange-600' },
      { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-cyan-600' },
      { name: 'REST APIs', level: 80, color: 'from-green-400 to-green-600' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    iconGradient: 'from-orange-400 to-red-500',
    skills: [
      { name: 'MySQL', level: 88, color: 'from-blue-400 to-blue-600' },
      { name: 'MongoDB', level: 82, color: 'from-green-500 to-emerald-600' },
      { name: 'SQLite', level: 85, color: 'from-slate-400 to-slate-600' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    iconGradient: 'from-green-400 to-emerald-500',
    skills: [
      { name: 'Git', level: 90, color: 'from-orange-400 to-red-500' },
      { name: 'GitHub', level: 85, color: 'from-gray-400 to-gray-600' },
      { name: 'VS Code', level: 95, color: 'from-blue-400 to-blue-600' },
      { name: 'Postman', level: 80, color: 'from-orange-400 to-orange-600' },
      { name: 'Vercel', level: 75, color: 'from-gray-400 to-gray-600' },
      { name: 'Google Colab', level: 85, color: 'from-yellow-400 to-orange-500' },
    ],
  },
  {
    title: 'ML & Data Science',
    icon: Brain,
    iconGradient: 'from-pink-400 to-rose-500',
    skills: [
      { name: 'NumPy & Pandas', level: 88, color: 'from-cyan-400 to-blue-500' },
      { name: 'Scikit-Learn', level: 86, color: 'from-orange-400 to-amber-500' },
      { name: 'Matplotlib', level: 84, color: 'from-purple-400 to-purple-600' },
      { name: 'Model workflows', level: 82, color: 'from-pink-400 to-rose-500' },
    ],
  },
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-slide relative overflow-hidden">
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
          <div className="inline-block mb-4">
            <span className="px-6 py-2 rounded-full glass-card border border-accent/50 text-accent font-medium">
              Skills
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-4">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Futuristic tech arsenal for building tomorrow's solutions
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-xl bg-gradient-to-br ${category.iconGradient}`}>
                  <category.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent ml-4" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="glass-card p-4 rounded-2xl border border-border/50 group-hover:border-accent/50 transition-all h-full">
                      {/* Icon placeholder - in real app, use actual icons */}
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                        <span className="text-2xl">
                          {skill.name === 'Python' && '🐍'}
                          {skill.name === 'C' && '⚙️'}
                          {skill.name === 'C++' && '💠'}
                          {skill.name === 'Java' && '☕'}
                          {skill.name === 'JavaScript' && '⚡'}
                          {skill.name === 'TypeScript' && '📘'}
                          {skill.name === 'HTML5' && '🌐'}
                          {skill.name === 'CSS3' && '🎨'}
                          {skill.name === 'Tailwind CSS' && '💨'}
                          {skill.name === 'REST APIs' && '🔗'}
                          {skill.name === 'MySQL' && '🗃️'}
                          {skill.name === 'PostgreSQL' && '🐘'}
                          {skill.name === 'Supabase' && '⚡'}
                          {skill.name === 'Firebase' && '🔥'}
                          {skill.name === 'Git' && '📦'}
                          {skill.name === 'GitHub' && '🐙'}
                          {skill.name === 'VS Code' && '💻'}
                          {skill.name === 'Postman' && '📮'}
                          {skill.name === 'Vercel' && '▲'}
                          {skill.name === 'Google Colab' && '📓'}
                          {skill.name === 'Figma' && '🎯'}
                          {skill.name === 'Canva' && '✏️'}
                          {skill.name === 'UI/UX' && '✨'}
                          {skill.name === 'Web Design' && '🖼️'}
                        </span>
                      </div>
                      
                      <p className="text-sm font-medium text-center mb-3">{skill.name}</p>
                      
                      {/* Progress bar */}
                      <div className="relative h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.05 }}
                        />
                      </div>
                      <p className={`text-xs text-center mt-2 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-medium`}>
                        {skill.level}%
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;