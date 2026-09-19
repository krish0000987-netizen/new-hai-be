export interface ZodiacSign {
  id: string;
  name: string;
  sanskritName: string;
  dates: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  rulingPlanet: string;
  symbol: string;
  coreTraits: string[];
  crystalSymbolism: string;
  suggestedCrystals: string[];
  description: string;
  braceletId: string;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    sanskritName: 'Mesha (मेष)',
    dates: 'March 21 – April 19',
    element: 'Fire',
    rulingPlanet: 'Mars (Mangal)',
    symbol: '♈',
    coreTraits: ['Pioneering', 'Passionate', 'Courageous', 'Independent'],
    crystalSymbolism: 'Red Jasper, Carnelian & Pyrite for grounding fiery dynamism and enhancing courageous focus.',
    suggestedCrystals: ['Red Jasper', 'Carnelian', 'Pyrite', 'Bloodstone'],
    description: 'Aries embodies pure kinetic vitality and the spark of new beginnings. Known for indomitable leadership and fiery determination.',
    braceletId: 'zodiac-bracelet-aries'
  },
  {
    id: 'taurus',
    name: 'Taurus',
    sanskritName: 'Vrishabha (वृषभ)',
    dates: 'April 20 – May 20',
    element: 'Earth',
    rulingPlanet: 'Venus (Shukra)',
    symbol: '♉',
    coreTraits: ['Grounded', 'Sensual', 'Patient', 'Steadfast'],
    crystalSymbolism: 'Rose Quartz & Green Aventurine to foster heart-centered abundance, beauty, and steadfast harmony.',
    suggestedCrystals: ['Rose Quartz', 'Green Aventurine', 'Emerald', 'Malachite'],
    description: 'Anchored in earthy grace, Taurus appreciates sensory luxury, loyal companionship, and enduring material stability.',
    braceletId: 'bracelet-money-pyrite'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    sanskritName: 'Mithuna (मिथुन)',
    dates: 'May 21 – June 20',
    element: 'Air',
    rulingPlanet: 'Mercury (Budh)',
    symbol: '♊',
    coreTraits: ['Intellectual', 'Curious', 'Adaptable', 'Articulate'],
    crystalSymbolism: 'Citrine & Sodalite to sharpen communicative clarity and harmonize dual streams of creative thought.',
    suggestedCrystals: ['Citrine', 'Sodalite', 'Agate', 'Clear Quartz'],
    description: 'Governed by Mercury, Gemini moves like gentle wind through diverse spheres of curiosity, literature, and wit.',
    braceletId: 'bracelet-money-pyrite'
  },
  {
    id: 'cancer',
    name: 'Cancer',
    sanskritName: 'Karka (कर्क)',
    dates: 'June 21 – July 22',
    element: 'Water',
    rulingPlanet: 'Moon (Chandra)',
    symbol: '♋',
    coreTraits: ['Intuitive', 'Nurturing', 'Empathetic', 'Protective'],
    crystalSymbolism: 'Moonstone & Selenite to support deep emotional intuition and create a serene inner sanctuary.',
    suggestedCrystals: ['Rainbow Moonstone', 'Selenite', 'Rose Quartz', 'Pearl'],
    description: 'Deeply intuitive and heart-oriented, Cancer moves to the rhythmic tides of the lunar cycle with devotion.',
    braceletId: 'bracelet-calm-amethyst'
  },
  {
    id: 'leo',
    name: 'Leo',
    sanskritName: 'Simha (सिंह)',
    dates: 'July 23 – August 22',
    element: 'Fire',
    rulingPlanet: 'Sun (Surya)',
    symbol: '♌',
    coreTraits: ['Charismatic', 'Generous', 'Noble', 'Radiant'],
    crystalSymbolism: 'Golden Tiger Eye, Sunstone & Pyrite to radiate solar warmth and heartfelt commanding presence.',
    suggestedCrystals: ['Tiger Eye', 'Sunstone', 'Pyrite', 'Amber'],
    description: 'Basking in the golden radiance of Surya, Leo inspires others through boundless generosity, honor, and expressive elegance.',
    braceletId: 'zodiac-bracelet-leo'
  },
  {
    id: 'virgo',
    name: 'Virgo',
    sanskritName: 'Kanya (कन्या)',
    dates: 'August 23 – September 22',
    element: 'Earth',
    rulingPlanet: 'Mercury (Budh)',
    symbol: '♍',
    coreTraits: ['Analytical', 'Mindful', 'Diligent', 'Discerning'],
    crystalSymbolism: 'Amazonite & Green Jade to invite tranquility into meticulous contemplation and nurture holistic health.',
    suggestedCrystals: ['Amazonite', 'Green Jade', 'Moss Agate', 'Amethyst'],
    description: 'Virgo finds sacred beauty in intentional details, purposeful craftsmanship, and selfless everyday service.',
    braceletId: 'bracelet-calm-amethyst'
  },
  {
    id: 'libra',
    name: 'Libra',
    sanskritName: 'Tula (तुला)',
    dates: 'September 23 – October 22',
    element: 'Air',
    rulingPlanet: 'Venus (Shukra)',
    symbol: '♎',
    coreTraits: ['Diplomatic', 'Harmonious', 'Artistic', 'Just'],
    crystalSymbolism: 'Lapis Lazuli & Opalite to balance aesthetic sensibilities and promote conscious equanimity.',
    suggestedCrystals: ['Lapis Lazuli', 'Opalite', 'Rose Quartz', 'Aquamarine'],
    description: 'Striving perpetually for supreme equilibrium, Libra cherishes symmetrical art, civil discourse, and refined elegance.',
    braceletId: 'bracelet-money-pyrite'
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    sanskritName: 'Vrishchika (वृश्चिक)',
    dates: 'October 23 – November 21',
    element: 'Water',
    rulingPlanet: 'Mars & Pluto (Ketu)',
    symbol: '♏',
    coreTraits: ['Transformative', 'Intuitive', 'Magnetic', 'Resilient'],
    crystalSymbolism: 'Black Tourmaline & Malachite to anchor deep transformation and preserve energetic sanctity.',
    suggestedCrystals: ['Black Tourmaline', 'Malachite', 'Obsidian', 'Labradorite'],
    description: 'Scorpio journeys into profound depths of human emotion, possessing unmatched spiritual endurance and insight.',
    braceletId: 'bracelet-protection-tourmaline'
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    sanskritName: 'Dhanu (धनु)',
    dates: 'November 22 – December 21',
    element: 'Fire',
    rulingPlanet: 'Jupiter (Guru / Brihaspati)',
    symbol: '♐',
    coreTraits: ['Philosophical', 'Optimistic', 'Expansive', 'Free-Spirited'],
    crystalSymbolism: 'Sodalite & Turquoise to align high philosophical pursuits with expansive spiritual discovery.',
    suggestedCrystals: ['Sodalite', 'Turquoise', 'Lapis Lazuli', 'Amethyst'],
    description: 'Under the benevolent eye of Guru, Sagittarius seeks higher wisdom, philosophical truth, and cultural richness.',
    braceletId: 'bracelet-money-pyrite'
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    sanskritName: 'Makara (मकर)',
    dates: 'December 22 – January 19',
    element: 'Earth',
    rulingPlanet: 'Saturn (Shani)',
    symbol: '♑',
    coreTraits: ['Disciplined', 'Strategic', 'Architectural', 'Enduring'],
    crystalSymbolism: 'Garnet & Smoky Quartz to support patient perseverance and ground ambitious long-term goals.',
    suggestedCrystals: ['Garnet', 'Smoky Quartz', 'Hematite', 'Onyx'],
    description: 'Governed by Shani, Capricorn commands structural mastery, supreme discipline, and generational legacy.',
    braceletId: 'bracelet-protection-tourmaline'
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    sanskritName: 'Kumbha (कुम्भ)',
    dates: 'January 20 – February 18',
    element: 'Air',
    rulingPlanet: 'Saturn & Uranus (Rahu)',
    symbol: '♒',
    coreTraits: ['Visionary', 'Altruistic', 'Original', 'Independent'],
    crystalSymbolism: 'Aquamarine & Amethyst to illuminate visionary breakthroughs and forward-thinking harmony.',
    suggestedCrystals: ['Aquamarine', 'Amethyst', 'Labradorite', 'Clear Quartz'],
    description: 'Aquarius pours cosmic water upon humanity, envisioning enlightened communities and progressive paradigms.',
    braceletId: 'bracelet-calm-amethyst'
  },
  {
    id: 'pisces',
    name: 'Pisces',
    sanskritName: 'Meena (मीन)',
    dates: 'February 19 – March 20',
    element: 'Water',
    rulingPlanet: 'Jupiter & Neptune',
    symbol: '♓',
    coreTraits: ['Compassionate', 'Mystical', 'Artistic', 'Transcendent'],
    crystalSymbolism: 'Amethyst & Aquamarine to dissolve boundaries between waking life and transcendent spiritual grace.',
    suggestedCrystals: ['Amethyst', 'Aquamarine', 'Moonstone', 'Fluorite'],
    description: 'The final oceanic sign of the zodiac, Pisces dissolves ego boundaries into boundless universal compassion.',
    braceletId: 'bracelet-calm-amethyst'
  }
];
