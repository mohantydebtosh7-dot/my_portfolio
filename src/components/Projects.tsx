import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Network, 
  Database, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Search,
  Terminal,
  FileSpreadsheet
} from 'lucide-react';
import { PROJECTS, type Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#F8FAFC] dark:bg-[#080C16] relative transition-colors">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            Applied Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Practical Work
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Real implementations highlighting network topology design in Cisco Packet Tracer 
            and structured dataset analysis using Python and spreadsheet analytics.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, idx) => {
            const isNetworking = project.id === 'networking-project';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Project Visual / Diagram Header */}
                <div className="relative h-56 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 p-6 flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle Background Circuit / Pattern */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`pattern-${idx}`} width="30" height="30" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1.5" fill="#93c5fd" />
                          <path d="M 0 15 L 30 15 M 15 0 L 15 30" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pattern-${idx})`} />
                    </svg>
                  </div>

                  {/* Top Bar inside diagram */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/15">
                      {isNetworking ? (
                        <Network className="w-3.5 h-3.5 text-sky-400" />
                      ) : (
                        <Database className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                      {project.category}
                    </span>

                    <span className="text-[11px] font-mono text-blue-200/90 bg-blue-900/60 px-2.5 py-0.5 rounded-md border border-blue-500/30">
                      {isNetworking ? 'Cisco Packet Tracer' : 'Python & Pandas'}
                    </span>
                  </div>

                  {/* Visual Diagram Representation */}
                  <div className="relative z-10 my-auto">
                    {isNetworking ? (
                      /* Cisco Packet Tracer Diagram Simulation */
                      <div className="flex items-center justify-around py-2 px-4 bg-slate-950/60 rounded-xl border border-slate-700/60 backdrop-blur-sm">
                        <div className="text-center">
                          <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center mx-auto mb-1">
                            <Activity className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] text-slate-300 font-mono block">Router R1</span>
                        </div>
                        <div className="flex-1 max-w-[80px] h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 relative">
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] text-sky-300 font-mono">LAN/WAN</span>
                        </div>
                        <div className="text-center">
                          <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/40 flex items-center justify-center mx-auto mb-1">
                            <Layers className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] text-slate-300 font-mono">Switch SW1</span>
                        </div>
                        <div className="flex-1 max-w-[80px] h-0.5 bg-gradient-to-r from-sky-400 to-emerald-400 relative">
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] text-emerald-300 font-mono">VLAN 10/20</span>
                        </div>
                        <div className="text-center">
                          <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-1">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] text-slate-300 font-mono">Subnet Hosts</span>
                        </div>
                      </div>
                    ) : (
                      /* Data Pipeline Simulation */
                      <div className="flex items-center justify-around py-2 px-4 bg-slate-950/60 rounded-xl border border-slate-700/60 backdrop-blur-sm">
                        <div className="text-center">
                          <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto mb-1">
                            <FileSpreadsheet className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] text-slate-300 font-mono block">Raw Dataset</span>
                        </div>
                        <div className="flex-1 max-w-[80px] h-0.5 bg-gradient-to-r from-amber-400 to-blue-400 relative">
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] text-blue-300 font-mono">Clean & Sort</span>
                        </div>
                        <div className="text-center">
                          <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center mx-auto mb-1">
                            <Terminal className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] text-slate-300 font-mono">Python Script</span>
                        </div>
                        <div className="flex-1 max-w-[80px] h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 relative">
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] text-emerald-300 font-mono">Validation</span>
                        </div>
                        <div className="text-center">
                          <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-1">
                            <Database className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] text-slate-300 font-mono">EDA Insights</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom tagline */}
                  <div className="relative z-10 flex items-center justify-between text-xs text-slate-300">
                    <span className="font-medium truncate">{project.tagline}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Key Deliverables & Capabilities
                      </h4>
                      <div className="space-y-1.5">
                        {project.keyFeatures.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack & Action */}
                  <div className="space-y-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                      >
                        <Search className="w-3.5 h-3.5" />
                        <span>View Project Breakdown</span>
                      </button>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <span>Discuss Implementation</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              ✕
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider bg-blue-50 dark:bg-blue-950/80 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-800">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {selectedProject.tagline}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Project Description
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Detailed Feature Breakdown
                </h4>
                <ul className="space-y-2">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200/70 dark:border-blue-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
                >
                  Inquire About This Project
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
