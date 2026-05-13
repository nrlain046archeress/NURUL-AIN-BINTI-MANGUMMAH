import { Share2, Camera } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-surface-container mt-auto rounded-t-xl">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-bold text-secondary">ColorSeason</div>
          <p className="text-on-surface-variant text-sm font-medium">© 2024 ColorSeason. Discover your natural glow.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {['Privacy Policy', 'Terms of Service', 'Contact Us', 'Seasonal Guide'].map((link) => (
            <motion.a
              key={link}
              whileHover={{ scale: 1.05 }}
              className="text-on-surface-variant hover:text-primary transition-colors text-sm font-bold cursor-pointer"
            >
              {link}
            </motion.a>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary hover:text-primary transition-colors cursor-pointer border border-surface-container"
          >
            <Share2 className="w-5 h-5" />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary hover:text-primary transition-colors cursor-pointer border border-surface-container"
          >
            <Camera className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
