import { motion } from 'motion/react';
import { Download, Share2, Sparkles, Palette, Ban, Shirt } from 'lucide-react';
import { SeasonInfo } from '../types';

interface Props {
  season: SeasonInfo;
}

export default function ResultView({ season }: Props) {
  const images = {
    Autumn: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2Tzi5L29rRnbDLDbE4U4ahwzP9GRnDaCpBl5p4m_ja1IgxPoZJi1xL73JJCcSaz9Ht3yF8RQYOONnFWRPFMmrAR4uHG-fIBQ1A062XDWlArRqe26uLga7yWuNo8lXh47XLbk3Iacuni0WxUFE3InWRmbGWXLcKvVnAx7Cbo52G0WUhCNbvpeY9GNM0riT5k-NvZ82iHW6KB3OXnSTrIKdo0InwIWK0qzB6IUP0IZl1jazGv1gOor5riW63cyRztFjAKGGKTrViK57',
    Winter: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9jCkATNtBpE6WHHJNVSzF7tcrhpnx6aB5ZdbH3aWj7nvHJQdqYgBnwOCzfL8UL1xkJ2wP4Z-IjI_EY2_Ox0zm2EI5rfTL60jQ7ZTISQO09BjNul1UiavTyjHO0UwvNXpdrplhOUxyQVIfzzI4zKYh6Sx4cU1BXFZYpSzwO8XWl6vVn8flMhy8gauG61jsmZo_vfEfBMRHlNwEqB3OQyRpV2ZkhPDYeYUfVEMntmbOH4w4-rM5Zc977VfmYMmHuR0DK9IefAa9wGdc',
  };

  const outfits = [
    { title: 'Sophisticated Moss', tag: 'Workwear', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiearrLUUrIL4aeQNY3yECpvaWY6J3yuIhdmrnNtoGqgQXV1ST1DSSj9Nqq_FzxCiw-3tAsUbUBgrZIk_Z87c36ORPBqnA4nXDqzcJqdbybO_tJoQnSkaJidN5L3qTMZkEs4aXfia2N1xNUyxuo88KDyYK37vaqH_sH7PlR-QMexIgat2H-kHodnVKjsxApEkgZIPwThgpbx9RhHbpZ-1wfh1FFEU7TNWgyZ_BX6e2x19z67Mkg7TEPLmHd66h6R0cNrYdg0DoA-VK' },
    { title: 'Golden Harvest', tag: 'Casual', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq9ODh6zLmTbvYmCSXP0qsT57mOqEVh6FKyh4up37ta8DfJHUNVCt_8NXoIOi-h7jgPoH9h1bjAkdnVZl6FfSHHXifcoZJT3U32SorsDmMJh8uIteGTmpcx0ssOOlGEvlZm21l70CGsD0oJONTlKtIMernsIaUBW7opS8fJXasMx5osxfCbPHv8kTwIEzy5_NqdGmJXfwZTVvaOdIK0IY77dDy-ixbmlhOxsimCRy8U_soCbGvDlb_S5e8pz0jytYYjkDCFHKfmJ77' },
    { title: 'Midnight Merlot', tag: 'Evening', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC8js-Lc7q5zFZnXbMyL-i3zu1kFE2hRNjRF6OjNd0yft9O2y-gVezqvwE7Quh6hRyd3t1WJA2iNo3RSYqxS9nnrJeng75xp-JpQwPLv5-h-cONfj9-WkmHKp13Gm5MafvVdh1SIB8Kkun8fw-Vw_hStj35TTTMPYNWooQvVnKZGGB1Lqo9QA74cXsF3XE8HTxz07l0knuJWXPLpxPNGjZv0ThJA-PjPgMgte7md6KDEqbbdoMZg9FbyHFMfcuaOqEd3kXx7yCpUVB' },
    { title: 'Spiced Layers', tag: 'Creative', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz5XgDl52PWj4maWTWWeqy9ug8s3P9mx5XGbFwmIf8TcyR7KvwOrBTk6ZnZmJV4KduiztsuWWmgRgiK-omWff7XTtujU1CBHnlQvRO6sX9_OxjBYD_EwCme9aohAYENK8ubooaxDme-Z1sX_cWZ6nXeC6SV68EeH4do7ET_0qCYl97oExyKt8fkz23-LAUAmnPFf6z14ypBCxuASREOH4vYUJ_h4TDnYsJNgU6_-MFr_0fOSjR5OWCXndkdIgoFPf1dKWKBVMqLWn0' }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Hero Result Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-16"
      >
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[500px]">
          <div className="lg:w-1/2 relative overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src={images[season.name as keyof typeof images]} 
              alt={season.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
          </div>
          <div className="lg:w-1/2 p-10 flex flex-col justify-center">
            <div className="mb-4">
              <span className="bg-primary-fixed text-on-primary-fixed-variant px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-widest">Your Result</span>
            </div>
            <h1 className="text-6xl font-black text-on-surface mb-6 tracking-tight">
              {season.name === 'Autumn' ? 'Deep Autumn' : 'Bright Winter'}
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10">
              {season.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-surface-container p-5 rounded-2xl border border-surface-container-highest/20">
                <span className="text-sm font-bold text-on-surface-variant block mb-1 uppercase tracking-tighter">Undertone</span>
                <span className="text-2xl font-black text-secondary">{season.undertone}</span>
              </div>
              <div className="bg-surface-container p-5 rounded-2xl border border-surface-container-highest/20">
                <span className="text-sm font-bold text-on-surface-variant block mb-1 uppercase tracking-tighter">Contrast</span>
                <span className="text-2xl font-black text-secondary">{season.contrast}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-black flex items-center gap-2 shadow-lg candy-shadow-secondary"
              >
                <Download className="w-5 h-5" /> Download Palette
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full border-2 border-surface-container flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all"
              >
                <Share2 className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Bento Palette Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {/* Best Neutrals */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white p-8 rounded-3xl border border-surface-container shadow-xl flex flex-col"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black">Best Neutrals</h3>
          </div>
          <div className="grid grid-cols-2 gap-6 flex-grow">
            {season.bestNeutrals.map((color) => (
              <div key={color.name} className="space-y-3 group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="h-28 w-full rounded-2xl shadow-inner border border-surface-container ring-4 ring-transparent group-hover:ring-secondary/10 transition-all" 
                  style={{ backgroundColor: color.color }} 
                />
                <span className="text-xs font-black text-center block text-on-surface-variant uppercase tracking-wider">{color.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accent Colors */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white p-8 rounded-3xl border border-surface-container shadow-xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black">Accent Colors</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {season.accentColors.map((color) => (
              <motion.div
                key={color.name}
                whileHover={{ scale: 1.1, rotate: 10 }}
                style={{ backgroundColor: color.color }}
                className="aspect-square rounded-full shadow-lg border-4 border-white cursor-pointer"
                title={color.name}
              />
            ))}
          </div>
          <p className="mt-8 text-sm text-on-surface-variant text-center font-medium italic">
            Tap to see styling tips for each shade.
          </p>
        </motion.div>

        {/* Avoid */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-surface-container p-8 rounded-3xl border border-red-100 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-8 text-red-600">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <Ban className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black">Avoid</h3>
          </div>
          <div className="space-y-6">
            {season.avoid.map((item) => (
              <div key={item.name} className="flex items-center gap-4 bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white">
                <div className="w-14 h-14 rounded-xl shadow-inner flex-shrink-0" style={{ backgroundColor: item.color }} />
                <div>
                  <span className="font-black block text-sm">{item.name}</span>
                  <span className="text-xs text-on-surface-variant italic leading-tight">{item.reason}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Wardrobe Section */}
      <section>
        <div className="flex items-center justify-center gap-3 mb-10">
          <Shirt className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-black text-center">Style Your Season</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outfits.map((outfit) => (
            <motion.div 
              key={outfit.title}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden mb-5 shadow-xl transition-all duration-500">
                <img 
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={outfit.img} 
                  alt={outfit.title}
                />
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-secondary uppercase tracking-widest">
                  {outfit.tag}
                </div>
              </div>
              <h4 className="font-black text-xl text-on-surface tracking-tight">{outfit.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
