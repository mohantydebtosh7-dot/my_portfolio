import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, 
  FolderTree, 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  Database, 
  Filter, 
  BarChart3, 
  Binary, 
  Code2, 
  FileSpreadsheet, 
  Monitor, 
  Terminal, 
  Wrench, 
  ShieldCheck, 
  Network, 
  Wifi, 
  Cloud, 
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Map icon names to actual Lucide icon components
const iconMap: Record<string, React.ElementType> = {
  Tag,
  FolderTree,
  CheckCircle2,
  Cpu,
  Sparkles,
  Database,
  Filter,
  BarChart3,
  Binary,
  Code2,
  FileSpreadsheet,
  Monitor,
  Terminal,
  Wrench,
  ShieldCheck,
  Network,
  Wifi,
  Cloud,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#F8FAFC] dark:bg-[#080C16] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Skills & Specializations
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A structured breakdown of hands-on technical abilities verified through 
            industry experience at Jetking and formal training in Data Science & Cloud.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredCategories.map((categoryGroup) => (
              <motion.div 
                key={categoryGroup.title} 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-200/80 dark:border-slate-800 pb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {categoryGroup.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {categoryGroup.description}
                  </p>
                </div>

                {/* Skills Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {categoryGroup.skills.map((skill) => {
                    const IconComponent = iconMap[skill.iconName] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="group p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-colors duration-200">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                            CV Verified
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 opacity-60 group-hover:scale-125 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
