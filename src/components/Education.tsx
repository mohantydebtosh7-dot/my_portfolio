import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Building2, 
  BookOpen
} from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white dark:bg-[#0B0F19] relative border-y border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Formal engineering degree and foundational academic education in science and mathematics.
          </p>
        </motion.div>

        {/* Education Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION_LIST.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 sm:p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 shadow-xs">
                    {idx === 0 ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <BookOpen className="w-5 h-5" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                      {edu.status}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-0.5">
                      <span className="flex items-center gap-1 font-medium text-slate-800 dark:text-slate-200">
                        <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        {edu.institution}
                      </span>
                      <span className="text-slate-300 dark:text-slate-700">&bull;</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-xs self-start shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{edu.period}</span>
                </div>

              </div>

              {edu.details && (
                <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.details}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
