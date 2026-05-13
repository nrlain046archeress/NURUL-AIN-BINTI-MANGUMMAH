import { motion } from 'motion/react';
import { Sun, Cloud, Leaf, Snowflake, Palette, Users, Brain } from 'lucide-react';
import { AppView } from '../types';

interface Props {
  onStart: () => void;
}

export default function LandingView({ onStart }: Props) {
  const seasons = [
    { name: 'Spring', icon: Sun, color: 'bg-tertiary-container', text: 'text-on-tertiary-container', desc: 'Warm, bright, and clear. Peachy pinks and golden yellows.', swatches: ['#FFB347', '#FF69B4', '#40E0D0'] },
    { name: 'Summer', icon: Cloud, color: 'bg-primary-fixed', text: 'text-on-primary-fixed-variant', desc: 'Cool, muted, and soft. Lavender and dusty rose.', swatches: ['#E6E6FA', '#F08080', '#AFEEEE'] },
    { name: 'Autumn', icon: Leaf, color: 'bg-secondary-container', text: 'text-on-secondary-container', desc: 'Warm, rich, and earthy. Burnt orange and deep olive.', swatches: ['#CC7722', '#808000', '#FFDB58'] },
    { name: 'Winter', icon: Snowflake, color: 'bg-tertiary-container', text: 'text-on-tertiary-container', desc: 'Cool, vivid, and deep. Royal blue and magenta.', swatches: ['#002366', '#FF00FF', '#FFFFFF'] },
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-bold text-sm mb-6">
              Discover Your Natural Glow
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface mb-8 leading-[1.1]">
              Reveal the <span className="text-primary italic">Colors</span> That Love You Back.
            </h1>
            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed max-w-xl">
              Unlock your personal color palette in under 2 minutes. Our AI-driven analysis helps you find your season—Spring, Summer, Autumn, or Winter.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onStart}
                className="px-10 py-4 bg-primary text-on-primary rounded-full font-bold text-lg shadow-[0_8px_24px_rgba(224,64,160,0.4)] candy-shadow-primary"
              >
                Get Started
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-surface-container text-on-surface rounded-full font-bold text-lg border border-surface-container hover:bg-surface-container-low transition-all"
              >
                How it Works
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden aspect-square shadow-[0_20px_50px_rgba(124,82,170,0.2)]">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuJUNVzzu8EhJXvvvs7Ya37JvO-J_Thj0LglvA6cTZVZAUbpeSe_HZvETUdr4Ablc09cUdG2dgUlfxAVi_TE62_S8lxK7QC66ITzHiclpxvxNtx0TSLlQd-stoCzI0SwObm_MiQJh2YKuU3ey6WrKMdAdoEfJdvDChypbRAdJ60gMdoPDY2LkDWYRXAEMf2nqK1hBwFMoTnO6_ro0qlcBJkQ4ztqBNKzYbbnA5ua0EhKJFtzt5_c1qdRKX8LZDXnYuiAXrmNj3Fgiq" 
                alt="Personal Color Analysis"
              />
            </div>
            {/* Decorative Blurs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary-container/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-on-surface mb-4">The Four Pillars of Style</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Every individual falls into one of four harmonious seasonal categories based on skin undertones, eye color, and contrast.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasons.map((season, idx) => (
              <motion.div
                key={season.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-surface p-8 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] transition-all group"
              >
                <div className={`w-12 h-12 ${season.color} ${season.text} rounded-full flex items-center justify-center mb-6`}>
                  <season.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-on-surface">{season.name}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{season.desc}</p>
                <div className="flex gap-2">
                  {season.swatches.map((color) => (
                    <div key={color} className="w-6 h-6 rounded-full" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-2 lg:row-span-2 bg-secondary-container rounded-3xl p-12 flex flex-col justify-between overflow-hidden relative candy-shadow-secondary"
            >
              <div className="z-10">
                <h3 className="text-4xl font-black text-on-secondary-container mb-6 leading-tight">Fast-Track Your Style Journey</h3>
                <p className="text-on-secondary-container/80 text-lg max-w-md mb-8">
                  Our proprietary AI scan analyzes facial markers to determine your exact palette with professional accuracy.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onStart}
                  className="px-8 py-3 bg-secondary text-on-secondary rounded-full font-bold"
                >
                  Start Scan
                </motion.button>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] w-[60%] opacity-20 rotate-12">
                <Brain className="w-[300px] h-[300px] text-secondary" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-tertiary-container rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden candy-shadow-tertiary group"
            >
              <div className="absolute top-8 left-8 text-on-tertiary-container">
                <Palette className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-on-tertiary-container mb-2">Expert Palettes</h4>
              <p className="text-on-tertiary-container opacity-80 text-sm">Curated by top stylists for every occasion.</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-primary-container rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden candy-shadow-primary group"
            >
              <div className="absolute top-8 left-8 text-on-primary-container">
                <Users className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-on-primary-container mb-2">Community</h4>
              <p className="text-on-primary-container opacity-80 text-sm">Join 50k+ members sharing their looks.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white border-4 border-primary/20 rounded-3xl p-12 text-center shadow-[0_30px_60px_rgba(224,64,160,0.1)]">
          <h2 className="text-4xl font-black text-on-surface mb-6">Ready to Find Your Glow?</h2>
          <p className="text-on-surface-variant text-xl mb-10">Stop guessing and start wearing the colors that enhance your beauty.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="px-12 py-4 bg-primary text-on-primary rounded-full font-black text-xl shadow-[0_10px_30px_rgba(224,64,160,0.4)] candy-shadow-primary"
          >
            Get Started Now
          </motion.button>
        </div>
      </section>
    </div>
  );
}
