export interface CrystalInfo {
  id: string;
  name: string;
  sanskritName?: string;
  subtitle: string;
  chakra: string;
  element: string;
  color: string;
  traditionalSymbolism: string;
  mindfulUsage: string;
  cleansingMethod: string;
  image: string;
}

export const CRYSTALS_DATA: CrystalInfo[] = [
  {
    id: 'amethyst',
    name: 'Amethyst',
    sanskritName: 'Katela (कटेला)',
    subtitle: 'The Stone of Serenity & Intuitive Stillness',
    chakra: 'Ajna (Third Eye) & Sahasrara (Crown)',
    element: 'Wind / Ether',
    color: '#7D5BA6',
    traditionalSymbolism: 'Traditionally associated with soothing overactive thoughts, encouraging mindfulness during meditation, and promoting restful emotional equilibrium.',
    mindfulUsage: 'Keep beside your bed or on your meditation altar to create a peaceful sanctuary for daily contemplation.',
    cleansingMethod: 'Cleanse with gentle sage smoke or overnight on a Selenite charging plate. Avoid direct scorching sun.',
    image: '/assets/images/hero_slide_5.jpg'
  },
  {
    id: 'rose-quartz',
    name: 'Rose Quartz',
    sanskritName: 'Gulabi Sphatik (गुलाबी स्फटिक)',
    subtitle: 'The Stone of Unconditional Compassion',
    chakra: 'Anahata (Heart Chakra)',
    element: 'Water',
    color: '#E8A598',
    traditionalSymbolism: 'Revered in traditional lore as a gentle amplifier of self-acceptance, harmonious relationships, and soft heartfelt empathy.',
    mindfulUsage: 'Hold over the heart center while practicing loving-kindness (Metta) meditation or wear daily as jewelry.',
    cleansingMethod: 'Rinse briefly with cool water or rest upon a Selenite plate surrounded by white flower petals.',
    image: '/assets/images/hero_slide_2.jpg'
  },
  {
    id: 'citrine',
    name: 'Citrine',
    sanskritName: 'Sunela (सुनेला)',
    subtitle: 'The Stone of Solar Vitality & Abundance',
    chakra: 'Manipura (Solar Plexus)',
    element: 'Fire',
    color: '#E0A93B',
    traditionalSymbolism: 'Historically nicknamed the "Merchant’s Stone", traditionally celebrated for its warm sunny resonance, optimism, and commercial determination.',
    mindfulUsage: 'Place in the South-East corner (wealth area) of your office or on your creative working desk.',
    cleansingMethod: 'Natural Citrine thrives in morning sunlight and needs minimal cleansing due to its bright solar nature.',
    image: '/assets/images/cat_chunks.jpg'
  },
  {
    id: 'black-tourmaline',
    name: 'Black Tourmaline',
    subtitle: 'The Stone of Root Grounding & Protection',
    chakra: 'Muladhara (Root Chakra)',
    element: 'Earth',
    color: '#2B2B2B',
    traditionalSymbolism: 'Celebrated across global traditions as a premier mineral for absorbing heavy environmental stagnation and anchoring personal boundaries.',
    mindfulUsage: 'Place near entryways of homes or wear on the right wrist when traversing busy crowded spaces.',
    cleansingMethod: 'Cleanse with sandalwood incense smoke or sound vibration from a brass singing bowl.',
    image: '/assets/images/cat_lifestyle.jpg'
  },
  {
    id: 'tiger-eye',
    name: 'Tiger Eye',
    subtitle: 'The Stone of Golden Courage & Discernment',
    chakra: 'Manipura (Solar Plexus) & Muladhara (Root)',
    element: 'Fire & Earth',
    color: '#A06E28',
    traditionalSymbolism: 'With its chatoyant bands of golden amber and rich brown, it is traditionally cherished for courage, decisive focus, and grounded willpower.',
    mindfulUsage: 'Carry during important negotiations or creative hurdles to stay centered and clear-headed.',
    cleansingMethod: 'Bathe in gentle early morning sun rays for 15 minutes or rest on a Selenite charging disc.',
    image: '/assets/images/hero_slide_1.jpg'
  },
  {
    id: 'green-aventurine',
    name: 'Green Aventurine',
    subtitle: 'The Stone of Opportunity & Rejuvenation',
    chakra: 'Anahata (Heart Chakra)',
    element: 'Earth & Wood',
    color: '#4B7B5B',
    traditionalSymbolism: 'Known as the stone of opportunity, Green Aventurine is associated with vital growth, release of old limitations, and fresh beginnings.',
    mindfulUsage: 'Wear as an intention ring or bracelet when embarking on new life chapters or business ventures.',
    cleansingMethod: 'Place near potted house plants or on a charging plate overnight.',
    image: '/assets/images/hero_slide_5.jpg'
  },
  {
    id: 'clear-quartz',
    name: 'Clear Quartz',
    sanskritName: 'Shuddha Sphatik (शुद्ध स्फटिक)',
    subtitle: 'The Master Healer & Intention Amplifier',
    chakra: 'All 7 Chakras',
    element: 'All Elements / Light',
    color: '#D4E2E8',
    traditionalSymbolism: 'Revered in Indian Vedic tradition as sacred Sphatik, symbolizing pristine purity, amplification of positive thoughts, and clarity of mind.',
    mindfulUsage: 'Use to program personal affirmations during daily meditation or keep in quiet study areas.',
    cleansingMethod: 'Rinse with pure mountain spring water or Gangajal, and dry with a soft white muslin cloth.',
    image: '/assets/images/cat_charging.jpg'
  }
];
