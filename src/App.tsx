import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { BackToTop } from './components/BackToTop';

export function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 font-sans selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-200 flex flex-col transition-colors duration-300">
        {/* Top Sticky Navigation */}
        <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to Top floating button */}
        <BackToTop />

        {/* Curriculum Vitae Modal */}
        <CvModal
          isOpen={isCvModalOpen}
          onClose={() => setIsCvModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
