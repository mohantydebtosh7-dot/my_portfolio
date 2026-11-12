import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  MapPin, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Database, 
  Network,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-100/60 via-sky-50/50 to-indigo-100/40 blur-3xl rounded-full opacity-70" />
        <div className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-gradient-to-br from-amber-50/60 via-sky-100/40 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-gradient-to-tr from-blue-50/70 via-indigo-50/30 to-transparent blur-2xl rounded-full opacity-50" />
        <div className="absolute inset-0 bg-subtle-grid opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200/80 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700">
                Ready for Data Annotation, IT & Data Science Roles
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-sm sm:text-base font-semibold tracking-wide text-blue-700 uppercase">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 pt-1">
                Computer Science Graduate &middot;{' '}
                <span className="text-blue-700 font-semibold">IT Support & Data Annotation Specialist</span>
              </p>
            </motion.div>

            {/* Short Narrative Intro */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              Computer Science graduate with hands-on experience in IT support, computer hardware, 
              networking, Python, and structured data analysis. Trained in Data Science and Cloud Computing, 
              with specialized expertise in data annotation, dataset consistency, and analytical troubleshooting.
            </motion.p>

            {/* Key Quick Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">&bull;</span>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-700 underline-offset-2 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-xl shadow-sm hover:shadow transition-all duration-200 group"
              >
                <FileDown className="w-4 h-4 text-blue-600 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </button>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full border-t border-slate-200/80"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">1-Year Jetking Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">SDI Data Science Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Cloud Computing Trained</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Elegant Visual Identity Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 via-sky-400/20 to-indigo-600/20 rounded-3xl blur-xl opacity-70"></div>

              {/* Main Visual Showcase Card */}
              <div className="relative bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/60">
                
                {/* Header of the Card */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-900/20 ring-4 ring-blue-50">
                      {PERSONAL_INFO.initials}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 leading-tight">
                        {PERSONAL_INFO.name}
                      </h2>
                      <p className="text-xs font-medium text-blue-700 flex items-center gap-1 mt-0.5">
                        <Sparkles className="w-3 h-3" />
                        Verified Credentials
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    Active
                  </span>
                </div>

                {/* Core Focus Areas */}
                <div className="py-5 space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3.5 hover:bg-blue-50/50 hover:border-blue-200/60 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Data Annotation & Labeling</p>
                      <p className="text-[11px] text-slate-500">Text/Image labeling, quality checking & consistency</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3.5 hover:bg-blue-50/50 hover:border-blue-200/60 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Python & Data Handling</p>
                      <p className="text-[11px] text-slate-500">Data cleaning, sorting, filtering & exploratory analysis</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3.5 hover:bg-blue-50/50 hover:border-blue-200/60 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">IT Infrastructure & Networking</p>
                      <p className="text-[11px] text-slate-500">Cisco Packet Tracer, Windows/Linux, hardware support</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Snapshot Footer */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50/80">
                    <p className="text-[11px] text-slate-500 font-medium">B.Tech Engineering</p>
                    <p className="text-xs font-bold text-slate-900">Computer Science</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50/80">
                    <p className="text-[11px] text-slate-500 font-medium">Training Programs</p>
                    <p className="text-xs font-bold text-slate-900">SDI & Jetking</p>
                  </div>
                </div>

              </div>

              {/* Floating Accent Badge: Cloud Computing */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium leading-none">Cloud & Systems</p>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Virtualization & Maintenance</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
