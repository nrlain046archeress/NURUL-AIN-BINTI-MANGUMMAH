export type Season = 'Spring' | 'Summer' | 'Autumn' | 'Winter';

export interface SeasonInfo {
  name: Season;
  description: string;
  colors: string[];
  undertone: string;
  contrast: string;
  bestNeutrals: Array<{ name: string; color: string }>;
  accentColors: Array<{ name: string; color: string }>;
  avoid: Array<{ name: string; color: string; reason: string }>;
  makeup: {
    image: string;
    description: string;
    tags: string[];
  };
}

export type AppView = 'landing' | 'analysis' | 'results';
