import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  Building2, 
  ShieldCheck
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#F8FAFC] relative">
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
            <Award className="w-3.5 h-3.5" />
            Credentials & Training
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certifications & Specialized Training
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Formal technical certifications in Data Science, Cloud Computing, and Enterprise Hardware/Systems.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/70">
                    {cert.credentialBadge}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{cert.period}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 mt-1 mb-3">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span>{cert.issuer}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cert.focus}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700">
                <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Curriculum Completed
                </span>
                <span className="text-[11px] font-semibold text-slate-600 uppercase">
                  Verified In CV
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
