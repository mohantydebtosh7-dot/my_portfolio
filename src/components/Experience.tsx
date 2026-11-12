import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white relative border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Professional Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Experience & Internships
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real-world technical experience in laboratory administration, end-user IT support, 
            and data annotation workflows.
          </p>
        </motion.div>

        {/* Experience Cards / Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-slate-200" />

          <div className="space-y-10">
            {EXPERIENCES.map((item, idx) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative sm:pl-20 group"
              >
                {/* Node Dot on Timeline */}
                <div className="hidden sm:flex absolute left-6 -translate-x-1/2 top-7 w-5 h-5 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform duration-200 z-10 shadow-sm" />

                {/* Card Container */}
                <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-card-hover transition-all duration-300">
                  
                  {/* Top Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-5 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800">
                          {item.organization}
                        </span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-200 text-slate-700">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.summary}
                  </p>

                  {/* Responsibilities List */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      Key Responsibilities & Achievements
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {item.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Gained Tags */}
                  <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-700 mr-2">Skills Applied:</span>
                    {item.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Jetking Technical Training Callout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 sm:ml-20 p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-white border border-blue-200/70 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                1-Year Hands-On Technical Training Program
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Completed one full year of intensive hands-on technical training at Jetking Institute, 
                building a solid base in data-oriented problem solving, Python programming, and enterprise system administration.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
