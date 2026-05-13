import { UserCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { AppView } from '../types';

interface Props {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

export default function Navbar({ currentView, onNavigate }: Props) {
  const navItems: { label: string; view: AppView }[] = [
    { label: 'Analysis', view: 'analysis' },
    { label: 'Palettes', view: 'landing' },
    { label: 'Community', view: 'landing' },
    { label: 'About', view: 'landing' },
  ];

  return (
    <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-surface-container shadow-[0_4px_16px_rgba(224,64,160,0.1)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black tracking-tight text-primary cursor-pointer"
          onClick={() => onNavigate('landing')}
        >
          ColorSeason
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-bold text-lg transition-colors cursor-pointer ${
                currentView === item.view && item.label === 'Analysis' 
                  ? 'text-primary border-b-4 border-primary pb-1' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              onClick={() => onNavigate(item.view)}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <UserCircle className="w-8 h-8" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold shadow-[0_4px_12px_rgba(224,64,160,0.3)] candy-shadow-primary"
          >
            Sign In
          </motion.button>
        </div>
      </div>
    </header>
  );
}
