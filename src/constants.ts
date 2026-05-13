import { SeasonInfo } from './types';

export const SEASONS: Record<string, SeasonInfo> = {
  Autumn: {
    name: 'Autumn',
    description: 'Your natural coloring is characterized by deep intensity and warm undertones. You shine in rich, saturated colors that mirror the late harvest landscape.',
    colors: ['#CC7722', '#808000', '#FFDB58'],
    undertone: 'Warm & Rich',
    contrast: 'High',
    bestNeutrals: [
      { name: 'Chocolate', color: '#5d4037' },
      { name: 'Creamy White', color: '#f5f5dc' },
      { name: 'Charcoal', color: '#263238' },
      { name: 'Rich Espresso', color: '#3e2723' }
    ],
    accentColors: [
      { name: 'Dark Red', color: '#b71c1c' },
      { name: 'Orange', color: '#e65100' },
      { name: 'Amber', color: '#ffb300' },
      { name: 'Forest Green', color: '#1b5e20' },
      { name: 'Cobalt', color: '#0d47a1' },
      { name: 'Imperial Purple', color: '#4a148c' },
      { name: 'Rust', color: '#bf360c' },
      { name: 'Olive', color: '#33691e' },
      { name: 'Deep Pink', color: '#880e4f' }
    ],
    avoid: [
      { name: 'Cool Pastels', color: '#e1f5fe', reason: 'Washes out your warm glow' },
      { name: 'Icy Pinks', color: '#fce4ec', reason: 'Clashes with golden undertones' },
      { name: 'Neon Cyan', color: '#00bcd4', reason: 'Overpowers your natural depth' }
    ],
    makeup: {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9jCkATNtBpE6WHHJNVSzF7tcrhpnx6aB5ZdbH3aWj7nvHJQdqYgBnwOCzfL8UL1xkJ2wP4Z-IjI_EY2_Ox0zm2EI5rfTL60jQ7ZTISQO09BjNul1UiavTyjHO0UwvNXpdrplhOUxyQVIfzzI4zKYh6Sx4cU1BXFZYpSzwO8XWl6vVn8flMhy8gauG61jsmZo_vfEfBMRHlNwEqB3OQyRpV2ZkhPDYeYUfVEMntmbOH4w4-rM5Zc977VfmYMmHuR0DK9IefAa9wGdc',
      description: 'Opt for warm, earthy tones. Rich terracotta lips and golden shimmer eyes enhance your natural radiance.',
      tags: ['Warm Tones', 'Matte Finish', 'Earthy']
    }
  },
  Winter: {
    name: 'Winter',
    description: 'Vivid, high-contrast, and cool. Your palette is defined by icy clarity and jewel-toned intensity that makes your natural features pop.',
    colors: ['#002366', '#FF00FF', '#FFFFFF'],
    undertone: 'Cool & Vivid',
    contrast: 'High',
    bestNeutrals: [
      { name: 'True Black', color: '#000000' },
      { name: 'Icy Silver', color: '#F0F0F0' },
      { name: 'Navy Blue', color: '#000080' },
      { name: 'Pure White', color: '#FFFFFF' }
    ],
    accentColors: [
      { name: 'Royal Cobalt', color: '#1B1C44' },
      { name: 'Raspberry', color: '#C21E56' },
      { name: 'Jade', color: '#00A86B' },
      { name: 'Magenta', color: '#FF00FF' },
      { name: 'Electric Cyan', color: '#00FFFF' },
      { name: 'Deep Purple', color: '#4a148c' },
      { name: 'Emerald', color: '#1b5e20' },
      { name: 'Royal Blue', color: '#0d47a1' },
      { name: 'Ruby', color: '#b71c1c' }
    ],
    avoid: [
      { name: 'Dusty Orange', color: '#ff8a65', reason: 'Dulls your cool clarity' },
      { name: 'Warm Beige', color: '#f5f5dc', reason: 'Clashes with icy undertones' },
      { name: 'Olive Green', color: '#558b2f', reason: 'Makes your skin look sallow' }
    ],
    makeup: {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9jCkATNtBpE6WHHJNVSzF7tcrhpnx6aB5ZdbH3aWj7nvHJQdqYgBnwOCzfL8UL1xkJ2wP4Z-IjI_EY2_Ox0zm2EI5rfTL60jQ7ZTISQO09BjNul1UiavTyjHO0UwvNXpdrplhOUxyQVIfzzI4zKYh6Sx4cU1BXFZYpSzwO8XWl6vVn8flMhy8gauG61jsmZo_vfEfBMRHlNwEqB3OQyRpV2ZkhPDYeYUfVEMntmbOH4w4-rM5Zc977VfmYMmHuR0DK9IefAa9wGdc',
      description: 'Opt for cool-toned foundations and high-impact lip colors like true red or bright fuchsia. Avoid warm bronzers.',
      tags: ['Bold Lip', 'High Contrast', 'Cool Tone']
    }
  }
};
