import { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Lightbulb, UserCheck, Palette, MoreHorizontal } from 'lucide-react';

interface Props {
  onComplete: (season: string) => void;
}

export default function AnalysisView({ onComplete }: Props) {
  const [step] = useState(1);
  const skinTones = [
    '#F9E4D4', '#F3D1BB', '#EBC1A2', '#E2B18E',
    '#D4A373', '#C68958', '#A16D41', '#7D5230',
    '#5C3A21', '#3F2512', '#2D1B0D'
  ];

  return (
    <div className="flex-grow w-full max-w-6xl mx-auto py-8 px-4">
      {/* Progress Bar */}
      <div className="w-full max-w-2xl mx-auto mb-12">
        <div className="flex justify-between items-end mb-3">
          <span className="text-sm font-bold text-primary italic">Step {step} of 3: Base Identification</span>
          <span className="text-sm font-medium text-on-surface-variant">33% Complete</span>
        </div>
        <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden p-1 shadow-inner">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '33%' }}
            className="h-full bg-primary rounded-full" 
          />
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mb-4">Discover Your Glow</h1>
        <p className="text-on-surface-variant max-w-xl mx-auto text-lg leading-relaxed">
          Our AI analyzes 15+ facial markers to determine your exact palette based on skin undertones, eye color, and contrast.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start">
        {/* Left: Upload */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-white p-8 rounded-3xl border-4 border-dashed border-primary-container flex flex-col items-center justify-center min-h-[400px] text-center candy-shadow-primary group cursor-pointer hover:bg-surface-container-low transition-all"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mb-6"
            >
              <Camera className="w-10 h-10 text-primary" />
            </motion.div>
            <h3 className="text-2xl font-bold text-on-surface mb-2">Upload Selfie</h3>
            <p className="text-on-surface-variant mb-8">Drag and drop or click to select a photo</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-on-primary px-10 py-3 rounded-full font-bold shadow-lg"
            >
              Select File
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 rounded-2xl flex gap-4 items-start border border-surface-container">
              <div className="p-2 bg-tertiary/10 rounded-lg">
                <Lightbulb className="w-6 h-6 text-tertiary" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Natural Lighting</h4>
                <p className="text-sm text-on-surface-variant leading-snug">Stand near a window. Avoid harsh overhead or yellow lamps.</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl flex gap-4 items-start border border-surface-container">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <UserCheck className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Face Setup</h4>
                <p className="text-sm text-on-surface-variant leading-snug">Pull hair back and remove makeup for the most accurate scan.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Manual Selection */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 bg-white p-8 rounded-3xl border border-surface-container shadow-xl candy-shadow-secondary"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <Palette className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-on-surface">Manual Selection</h3>
          </div>
          <p className="text-on-surface-variant mb-8 text-sm">
            Can't upload? Select the skin tone swatch that best matches your jawline in natural light.
          </p>
          
          <div className="grid grid-cols-4 gap-3 mb-8">
            {skinTones.map((tone) => (
              <motion.button
                key={tone}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                whileTap={{ scale: 0.9 }}
                style={{ backgroundColor: tone }}
                className="aspect-square rounded-xl border-4 border-transparent hover:border-primary transition-all shadow-sm"
              />
            ))}
            <div className="aspect-square rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant">
              <MoreHorizontal className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-on-surface-variant mb-2 ml-1">Eye Color</label>
              <select className="w-full bg-surface-container rounded-full px-6 py-3 font-medium focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer">
                <option>Light Blue / Grey</option>
                <option>Emerald / Olive Green</option>
                <option>Hazel / Golden Brown</option>
                <option>Dark Brown / Black</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-on-surface-variant mb-2 ml-1">Natural Hair Color</label>
              <select className="w-full bg-surface-container rounded-full px-6 py-3 font-medium focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer">
                <option>Icy Blonde / White</option>
                <option>Golden Blonde / Light Brown</option>
                <option>Copper / Auburn / Red</option>
                <option>Medium to Dark Brown</option>
                <option>Deep Black</option>
              </select>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onComplete('Autumn')}
            className="w-full mt-8 bg-secondary text-on-secondary px-8 py-4 rounded-full font-bold shadow-lg candy-shadow-secondary"
          >
            Continue Analysis
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
