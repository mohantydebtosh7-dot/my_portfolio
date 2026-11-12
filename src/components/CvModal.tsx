import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
========================================================================
                          ${PERSONAL_INFO.name.toUpperCase()}
  ${PERSONAL_INFO.location} | Mobile: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
========================================================================

PROFESSIONAL SUMMARY
------------------------------------------------------------------------
${PERSONAL_INFO.summary}

CORE SKILLS
------------------------------------------------------------------------
• Data Annotation & Labeling: text/image data labeling concepts, categorization, tagging, data quality checking and consistency.
• Data Handling & Analysis: basic data cleaning, organizing datasets, filtering, sorting, validation and exploratory analysis.
• Python: basic programming, data manipulation concepts and problem-solving.
• Microsoft Excel: data entry, sorting, filtering, basic formulas and spreadsheet-based data organization.
• Data Science Fundamentals: understanding of datasets, data preprocessing, basic statistics and introductory machine-learning concepts.
• IT & Networking: Windows, Linux basics, hardware/networking fundamentals, troubleshooting and system maintenance.
• Cloud Computing: basics to intermediate knowledge.

PROFESSIONAL EXPERIENCE
------------------------------------------------------------------------
IT Administrator / Lab Demonstrator cum IT Support Engineer | 1 Year (JETKING)
• Provided technical guidance to students during computer hardware and networking laboratory sessions.
• Installed and configured Windows operating systems, drivers and academic software across lab systems.
• Maintained computer lab infrastructure, desktops, peripherals, troubleshooting and LAN connectivity.
• Diagnosed and resolved hardware, software and network connectivity issues.
• Performed preventive maintenance, system updates and routine system checks.
• Maintained accurate technical information and supported users with application and system issues.
• Worked as a data annotation engineer for one year.

DATA SCIENCE & TRAINING
------------------------------------------------------------------------
• Completed Data Science course – SDI Bhubaneswar.
• Completed internship through Internshala.
• Completed one-year hands-on technical training at Jetking Institute.
• Developed foundational knowledge of data analysis, Python and data-oriented problem solving.

PROJECTS
------------------------------------------------------------------------
• Networking Project: Designed and implemented real-life networking scenarios using Cisco Packet Tracer.
• Data Analysis Practice: Worked with structured datasets using basic Python/data-analysis concepts, including data organization, filtering and summary analysis.

EDUCATION & CERTIFICATIONS
------------------------------------------------------------------------
• B.Tech in Computer Science Engineering – Gandhi Engineering College, Bhubaneswar, Odisha (2020-2025)
• Data Science Course – SDI Bhubaneswar (2026)
• Cloud Computing Course – Jetking Institute (2025-2026)
• 12th – Vyasanagar Autonomous College, Jajpur Road (2018-2020)
• 10th – Saraswati Sishu Vidya Mandir, Madhusudan Nagar, Jajpur Road (2018)

STRENGTHS
------------------------------------------------------------------------
• Strong attention to detail and data accuracy.
• Analytical and problem-solving mindset.
• Self-motivated, adaptable and eager to learn new technologies.
• Ability to work independently and as part of a team.
• Good communication and interpersonal skills.
`;

    const blob = new Blob([textContent.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Debtosh_Mohanty_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 dark:bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Curriculum Vitae Preview &bull; {PERSONAL_INFO.name}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Official document based on verified CV
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xs transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg shadow-xs transition-colors"
              title="Download text format"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download CV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors ml-2"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 text-slate-800 dark:text-slate-200 font-sans print:p-0 print:m-0 print:bg-white print:text-slate-900" id="printable-cv">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Header */}
            <div className="text-center pb-5 border-b-2 border-slate-900 dark:border-slate-200 print:border-slate-900">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-slate-900 uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 print:text-slate-600 mt-2">
                <span>{PERSONAL_INFO.location}</span>
                <span>|</span>
                <span>Mobile: {PERSONAL_INFO.phone}</span>
                <span>|</span>
                <span className="font-medium text-slate-900 dark:text-white print:text-slate-900">Email: {PERSONAL_INFO.email}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-slate-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-200 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-700 leading-relaxed text-justify">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Core Skills */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-slate-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-200 pb-1">
                Core Skills
              </h2>
              <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-700 space-y-1.5">
                <li><strong className="text-slate-900 dark:text-white print:text-slate-900">&bull; Data Annotation & Labeling:</strong> text/image data labeling concepts, categorization, tagging, data quality checking and consistency.</li>
                <li><strong className="text-slate-900 dark:text-white print:text-slate-900">&bull; Data Handling & Analysis:</strong> basic data cleaning, organizing datasets, filtering, sorting, validation and exploratory analysis.</li>
                <li><strong className="text-slate-900 dark:text-white print:text-slate-900">&bull; Python:</strong> basic programming, data manipulation concepts and problem-solving.</li>
                <li><strong className="text-slate-900 dark:text-white print:text-slate-900">&bull; Microsoft Excel:</strong> data entry, sorting, filtering, basic formulas and spreadsheet-based data organization.</li>
                <li><strong className="text-slate-900 dark:text-white print:text-slate-900">&bull; Data Science Fundamentals:</strong> understanding of datasets, data preprocessing, basic statistics and introductory machine-learning concepts.</li>
                <li><strong className="text-slate-900 dark:text-white print:text-slate-900">&bull; IT & Networking:</strong> Windows, Linux basics, hardware/networking fundamentals, troubleshooting and system maintenance.</li>
                <li><strong className="text-slate-900 dark:text-white print:text-slate-900">&bull; Cloud Computing:</strong> basics to intermediate knowledge.</li>
              </ul>
            </div>

            {/* Professional Experience */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-slate-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-200 pb-1">
                Professional Experience
              </h2>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white print:text-slate-900">
                  <span>IT Administrator / Lab Demonstrator cum IT Support Engineer</span>
                  <span className="text-slate-600 dark:text-slate-400 print:text-slate-600 font-semibold">1 Year (JETKING)</span>
                </div>
                <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-700 space-y-1 list-disc pl-5">
                  <li>Provided technical guidance to students during computer hardware and networking laboratory sessions.</li>
                  <li>Installed and configured Windows operating systems, drivers and academic software across lab systems.</li>
                  <li>Maintained computer lab infrastructure, desktops, peripherals, troubleshooting and LAN connectivity.</li>
                  <li>Diagnosed and resolved hardware, software and network connectivity issues.</li>
                  <li>Performed preventive maintenance, system updates and routine system checks.</li>
                  <li>Maintained accurate technical information and supported users with application and system issues.</li>
                  <li>Worked as a data annotation engineer for one year.</li>
                </ul>
              </div>
            </div>

            {/* Data Science & Training */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-slate-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-200 pb-1">
                Data Science & Training
              </h2>
              <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-700 space-y-1 list-disc pl-5">
                <li>Completed Data Science course – SDI Bhubaneswar.</li>
                <li>Completed internship through Internshala.</li>
                <li>Completed one-year hands-on technical training at Jetking Institute.</li>
                <li>Developed foundational knowledge of data analysis, Python and data-oriented problem solving.</li>
              </ul>
            </div>

            {/* Projects */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-slate-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-200 pb-1">
                Projects
              </h2>
              <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-700 space-y-2">
                <li>
                  <strong className="text-slate-900 dark:text-white print:text-slate-900">&bull; Networking Project:</strong> Designed and implemented real-life networking scenarios using Cisco Packet Tracer.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white print:text-slate-900">&bull; Data Analysis Practice:</strong> Worked with structured datasets using basic Python/data-analysis concepts, including data organization, filtering and summary analysis.
                </li>
              </ul>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-slate-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-200 pb-1">
                Education & Certifications
              </h2>
              <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-700 space-y-1 list-disc pl-5">
                <li>B.Tech in Computer Science Engineering – Gandhi Engineering College, Bhubaneswar, Odisha (2020-2025)</li>
                <li>Data Science Course – SDI Bhubaneswar (2026)</li>
                <li>Cloud Computing Course – Jetking Institute (2025-2026)</li>
                <li>12th – Vyasanagar Autonomous College, Jajpur Road (2018-2020)</li>
                <li>10th – Saraswati Sishu Vidya Mandir, Madhusudan Nagar, Jajpur Road (2018)</li>
              </ul>
            </div>

            {/* Strengths */}
            <div className="space-y-2 pb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-slate-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-200 pb-1">
                Strengths
              </h2>
              <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-700 space-y-1 list-disc pl-5">
                <li>Strong attention to detail and data accuracy.</li>
                <li>Analytical and problem-solving mindset.</li>
                <li>Self-motivated, adaptable and eager to learn new technologies.</li>
                <li>Ability to work independently and as part of a team.</li>
                <li>Good communication and interpersonal skills.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Document generated directly from original CV content.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
