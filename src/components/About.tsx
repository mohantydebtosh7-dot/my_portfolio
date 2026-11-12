import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Target, 
  Award, 
  Compass, 
  GraduationCap, 
  MapPin, 
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0B0F19] relative border-y border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bridging Technical Systems, Precision & Data Insight
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A dedicated Computer Science graduate blending real-world IT infrastructure administration 
            with focused training in data annotation and data science.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Philosophy */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {PERSONAL_INFO.aboutDetailed.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Information Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-700/60 hover:shadow-xs transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-blue-100/70 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Education</h4>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">B.Tech in Computer Science & Engineering</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Gandhi Engineering College (2020–2025)</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-700/60 hover:shadow-xs transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-indigo-100/70 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Experience</h4>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">1 Year at Jetking Institute</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">IT Administrator & Data Annotation Engineer</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-700/60 hover:shadow-xs transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-sky-100/70 dark:bg-sky-950/80 text-sky-700 dark:text-sky-400">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Career Focus</h4>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">Data Annotation & Quality Checking</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Entry-level Data Science & IT Support</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-700/60 hover:shadow-xs transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Base Location</h4>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">Jajpur Road, Jajpur, Odisha</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Open to on-site and remote roles</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Core Strengths Highlight */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Core Professional Strengths
                </h3>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Direct strengths and working principles demonstrated across academic projects and professional lab roles:
              </p>

              <div className="space-y-4">
                {PERSONAL_INFO.strengths.map((strength, index) => (
                  <div 
                    key={index} 
                    className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-blue-300 dark:hover:border-blue-500/40 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 shrink-0">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {strength.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          {strength.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote / Mission */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 italic">
                  &ldquo;Passionate about ensuring high data quality and dependable technical infrastructure that drives modern AI and data pipelines.&rdquo;
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
