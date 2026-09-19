export interface NumerologyProfile {
  number: number;
  title: string;
  rulingPlanet: string;
  rulingPlanetSanskrit: string;
  birthDays: number[];
  keywords: string[];
  suggestedCrystals: string[];
  braceletName: string;
  braceletId: string;
  price: number;
  traditionalLore: string;
  affirmation: string;
}

export const NUMEROLOGY_PROFILES: Record<number, NumerologyProfile> = {
  1: {
    number: 1,
    title: 'The Sovereign Pioneer',
    rulingPlanet: 'Sun',
    rulingPlanetSanskrit: 'Surya (सूर्य)',
    birthDays: [1, 10, 19, 28],
    keywords: ['Leadership', 'Originality', 'Self-Reliance', 'Willpower'],
    suggestedCrystals: ['Ruby Zoisite', 'Golden Pyrite', 'Sunstone', 'Clear Quartz'],
    braceletName: 'Number 1 Sun Leader Bracelet',
    braceletId: 'numerology-bracelet-1',
    price: 2299,
    traditionalLore: 'Governed by Surya, Number 1 represents primal vitality, leadership capacity, and pioneering initiative.',
    affirmation: 'I stand firmly in my personal power and illuminate the path forward.'
  },
  2: {
    number: 2,
    title: 'The Intuitive Diplomat',
    rulingPlanet: 'Moon',
    rulingPlanetSanskrit: 'Chandra (चन्द्र)',
    birthDays: [2, 11, 20, 29],
    keywords: ['Harmony', 'Empathy', 'Diplomacy', 'Receptivity'],
    suggestedCrystals: ['Rainbow Moonstone', 'Rose Quartz', 'Selenite', 'Pearl'],
    braceletName: 'Number 2 Lunar Harmony Bracelet',
    braceletId: 'bracelet-calm-amethyst',
    price: 2199,
    traditionalLore: 'Ruled by Chandra, Number 2 reflects sensitivity, relational harmony, artistic empathy, and emotional depth.',
    affirmation: 'I flow with grace, honoring my intuition and nurturing mutual peace.'
  },
  3: {
    number: 3,
    title: 'The Creative Philosopher',
    rulingPlanet: 'Jupiter',
    rulingPlanetSanskrit: 'Brihaspati / Guru (गुरु)',
    birthDays: [3, 12, 21, 30],
    keywords: ['Wisdom', 'Expressiveness', 'Optimism', 'Expansion'],
    suggestedCrystals: ['Yellow Sapphire / Citrine', 'Lapis Lazuli', 'Tiger Eye'],
    braceletName: 'Number 3 Jupiter Wisdom Bracelet',
    braceletId: 'bracelet-money-pyrite',
    price: 2299,
    traditionalLore: 'Under the auspices of Guru, Number 3 radiates optimism, cultural curiosity, creative speech, and benevolent generosity.',
    affirmation: 'I speak my truth with wisdom and embrace expansive growth.'
  },
  4: {
    number: 4,
    title: 'The Master Architect',
    rulingPlanet: 'Rahu (North Node)',
    rulingPlanetSanskrit: 'Rahu (राहु)',
    birthDays: [4, 13, 22, 31],
    keywords: ['Structure', 'Unconventional Insight', 'Discipline', 'Grit'],
    suggestedCrystals: ['Hessonite Garnet', 'Black Tourmaline', 'Smoky Quartz'],
    braceletName: 'Number 4 Architect Grounding Bracelet',
    braceletId: 'bracelet-protection-tourmaline',
    price: 2399,
    traditionalLore: 'Influenced by Rahu, Number 4 possesses an unconventional perspective, intense grit, and the capacity to build lasting frameworks.',
    affirmation: 'I build enduring foundations with unwavering patience.'
  },
  5: {
    number: 5,
    title: 'The Versatile Catalyst',
    rulingPlanet: 'Mercury',
    rulingPlanetSanskrit: 'Budh (बुध)',
    birthDays: [5, 14, 23],
    keywords: ['Agility', 'Commerce', 'Adaptability', 'Communication'],
    suggestedCrystals: ['Green Aventurine', 'Emerald Quartz', 'Peridot', 'Pyrite'],
    braceletName: 'Number 5 Mercury Catalyst Bracelet',
    braceletId: 'bracelet-money-pyrite',
    price: 2199,
    traditionalLore: 'Governed by Budh, Number 5 moves with speed, intellectual agility, commercial flair, and a hunger for multi-faceted experiences.',
    affirmation: 'I adapt gracefully to life’s currents and welcome prosperous shifts.'
  },
  6: {
    number: 6,
    title: 'The Graceful Nurturer',
    rulingPlanet: 'Venus',
    rulingPlanetSanskrit: 'Shukra (शुक्र)',
    birthDays: [6, 15, 24],
    keywords: ['Elegance', 'Luxury', 'Family', 'Aesthetic Harmony'],
    suggestedCrystals: ['Opalite', 'Rose Quartz', 'Clear Quartz', 'Rhodonite'],
    braceletName: 'Number 6 Venus Luxury Harmony Bracelet',
    braceletId: 'ring-raw-amethyst',
    price: 2499,
    traditionalLore: 'Ruled by Shukra, Number 6 embodies artistic refinement, sensory appreciation, love of home, and social grace.',
    affirmation: 'I attract beauty, cultivate harmony, and express gracious love.'
  },
  7: {
    number: 7,
    title: 'The Mystic Seeker',
    rulingPlanet: 'Ketu (South Node)',
    rulingPlanetSanskrit: 'Ketu (केतु)',
    birthDays: [7, 16, 25],
    keywords: ['Introspection', 'Spiritual Insight', 'Mysticism', 'Analysis'],
    suggestedCrystals: ['Cat’s Eye Quartz', 'Chevron Amethyst', 'Labradorite'],
    braceletName: 'Number 7 Mystic Insight Bracelet',
    braceletId: 'numerology-bracelet-7',
    price: 2399,
    traditionalLore: 'Governed by Ketu, Number 7 is contemplative, mystical, analytically penetrating, and naturally inclined toward spiritual wisdom.',
    affirmation: 'I perceive subtle truths and honor my inner sanctum.'
  },
  8: {
    number: 8,
    title: 'The Sovereign Karmic Builder',
    rulingPlanet: 'Saturn',
    rulingPlanetSanskrit: 'Shani (शनि)',
    birthDays: [8, 17, 26],
    keywords: ['Karmic Mastery', 'Endurance', 'Material Authority', 'Integrity'],
    suggestedCrystals: ['Blue Sapphire / Blue Lace Agate', 'Black Onyx', 'Pyrite'],
    braceletName: 'Number 8 Saturn Karmic Mastery Bracelet',
    braceletId: 'combo-money-nazar',
    price: 2499,
    traditionalLore: 'Ruled by Shani, Number 8 symbolizes patience, justice, overcoming hardship, and attaining authentic material and spiritual authority.',
    affirmation: 'I honor patient discipline, mastering my fate through ethical integrity.'
  },
  9: {
    number: 9,
    title: 'The Universal Humanitarian',
    rulingPlanet: 'Mars',
    rulingPlanetSanskrit: 'Mangal (मंगल)',
    birthDays: [9, 18, 27],
    keywords: ['Compassion', 'Courage', 'Universal Vision', 'Completion'],
    suggestedCrystals: ['Red Carnelian', 'Bloodstone', 'Garnet', 'Amethyst'],
    braceletName: 'Number 9 Universal Compassion Bracelet',
    braceletId: 'zodiac-bracelet-aries',
    price: 2299,
    traditionalLore: 'Governed by Mangal, Number 9 represents courage harnessed in service of high humanitarian ideals, artistic passion, and spiritual culmination.',
    affirmation: 'I dedicate my vitality to uplifting others and creating lasting harmony.'
  }
};

/**
 * Calculates single digit numerology number (1 - 9)
 * Supports both birth day calculation (Mulank / Root Number) and full Life Path calculation (Bhagyank)
 */
export function calculateNumerologyNumber(dateString: string, type: 'day' | 'lifepath' = 'day'): number {
  if (!dateString) return 1;
  const parts = dateString.split('-');
  if (parts.length !== 3) return 1;

  const [year, month, day] = parts;

  if (type === 'day') {
    // Sum digits of day: e.g. 28 -> 2 + 8 = 10 -> 1 + 0 = 1
    let sum = parseInt(day, 10);
    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }
    return sum || 1;
  } else {
    // Full date sum: YYYY-MM-DD
    const allDigits = `${year}${month}${day}`.replace(/\D/g, '');
    let sum = allDigits.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }
    return sum || 1;
  }
}
