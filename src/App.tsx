import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingView from './views/LandingView';
import AnalysisView from './views/AnalysisView';
import ResultView from './views/ResultView';
import { AppView, SeasonInfo } from './types';
import { SEASONS } from './constants';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [resultSeason, setResultSeason] = useState<SeasonInfo | null>(null);

  const handleStart = () => {
    setCurrentView('analysis');
  };

  const handleAnalysisComplete = (seasonName: string) => {
    setResultSeason(SEASONS[seasonName]);
    setCurrentView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view: AppView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          {currentView === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LandingView onStart={handleStart} />
            </motion.div>
          )}

          {currentView === 'analysis' && (
            <motion.div
              key="analysis"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AnalysisView onComplete={handleAnalysisComplete} />
            </motion.div>
          )}

          {currentView === 'results' && resultSeason && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ResultView season={resultSeason} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

