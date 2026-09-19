export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'bracelets' | 'zodiac' | 'numerology' | 'rings' | 'rudraksha' | 'chunks' | 'charging' | 'combos';
  intention?: 'money' | 'calm' | 'focus' | 'protection' | 'confidence' | 'love';
  zodiacSign?: string;
  numerologyNumber?: number;
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  images: string[];
  badge?: string;
  crystalType: string;
  origin?: string;
  material?: string;
  beadSize?: string;
  wristSizes?: string[];
  dimensions?: string;
  weight?: string;
  shortDesc: string;
  fullDesc: string;
  traditionalSymbolism: string;
  howToUse: string;
  careInstructions: string;
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'combo-money-nazar',
    name: 'Super Balanced Combo: Money + Nazar Protection',
    subtitle: 'Golden Pyrite & Nazar Talisman Duo',
    category: 'combos',
    intention: 'money',
    price: 3499,
    originalPrice: 4999,
    discountPercent: 30,
    rating: 4.95,
    reviewCount: 142,
    images: [
      '/assets/images/combo_money_nazar.jpg',
      '/assets/images/hero_slide_1.jpg',
      '/assets/images/cat_lifestyle.jpg'
    ],
    badge: 'Bestseller Duo',
    crystalType: 'Natural Peruvian Pyrite & Handmade Greek-style Nazar Bead',
    material: 'Natural Mineral & 18k Gold Plated Brass Accents',
    beadSize: '8mm faceted & smooth round beads',
    wristSizes: ['Small (6.0")', 'Medium (6.5")', 'Large (7.0")', 'Custom Fit'],
    shortDesc: 'A thoughtfully paired bracelet combination inspired by traditional symbolism and modern Indian spiritual lifestyle.',
    fullDesc: 'The Super Balanced Combo brings together two of the most revered symbols in contemporary wellness jewelry. The radiant golden Pyrite bracelet—traditionally appreciated as a symbol of abundance, determination, and focus—is harmoniously paired with the timeless Nazar protective amulet, traditionally cherished across cultures as a symbol of safeguarding positive energy. Each piece is cleansed using sacred dhoop and pure sandalwood oil before leaving our Kolkata studio.',
    traditionalSymbolism: 'Traditionally associated in folklore with attracting prosperous opportunities, fostering confidence, and acting as a mindful talisman against negative glances (nazar).',
    howToUse: 'Wear the Pyrite on the left wrist to welcome intentions of abundance, and the Nazar on the right wrist to safeguard personal space during social and professional engagements.',
    careInstructions: 'Avoid direct contact with harsh perfumes or chlorine. Gently wipe with a soft micro-fiber cloth. Periodically cleanse under indirect sunlight or on a Selenite charging plate.',
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: 'bracelet-money-pyrite',
    name: 'Peruvian Pyrite & Citrine Abundance Bracelet',
    subtitle: 'Golden Radiance for Manifestation',
    category: 'bracelets',
    intention: 'money',
    price: 2199,
    originalPrice: 2899,
    discountPercent: 24,
    rating: 4.92,
    reviewCount: 98,
    images: [
      '/assets/images/hero_slide_1.jpg',
      '/assets/images/cat_lifestyle.jpg',
      '/assets/images/combo_money_nazar.jpg'
    ],
    badge: 'Popular',
    crystalType: 'Grade AAA Pyrite & Brazilian Citrine',
    material: 'Natural Gemstones with 18k Gold Plated Spacer Rings',
    beadSize: '8mm micro-faceted beads',
    wristSizes: ['Small (6.0")', 'Medium (6.5")', 'Large (7.0")'],
    shortDesc: 'Handcrafted golden pyrite beads paired with radiant citrine to inspire confidence and personal drive.',
    fullDesc: 'Reflecting the golden warmth of the morning sun, this handcrafted piece pairs dense, metallic Peruvian Pyrite with natural Brazilian Citrine. Historically revered in traditional lore as stones of solar vitality and clarity, this bracelet is built with reinforced stretch silicone for enduring daily elegance.',
    traditionalSymbolism: 'Traditionally associated with the Solar Plexus chakra, personal willpower, clarity in commercial ventures, and positive abundance mindset.',
    howToUse: 'Set a clear personal intention upon waking, place the bracelet on your dominant wrist, and wear during important meetings or creative sessions.',
    careInstructions: 'Keep dry. Pyrite should not be soaked in water due to natural iron content. Cleanse with sage smoke or on our Selenite plate.',
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: 'bracelet-calm-amethyst',
    name: 'Brazilian Amethyst & Lavender Jade Serenity Bracelet',
    subtitle: 'Tranquility & Mental Stillness',
    category: 'bracelets',
    intention: 'calm',
    price: 1899,
    originalPrice: 2499,
    discountPercent: 24,
    rating: 4.88,
    reviewCount: 76,
    images: [
      '/assets/images/hero_slide_5.jpg',
      '/assets/images/hero_slide_1.jpg'
    ],
    badge: 'Calm & Peace',
    crystalType: 'Natural Deep Purple Amethyst & Lavender Jade',
    material: 'Natural Untreated Crystals with Sterling Silver Accent',
    beadSize: '8mm spherical beads',
    wristSizes: ['Small (6.0")', 'Medium (6.5")', 'Large (7.0")'],
    shortDesc: 'Deep royal purple amethyst beads designed to promote mindfulness and quiet reflection.',
    fullDesc: 'Sourced from mineral-rich deposits in Brazil, the soothing deep violet hues of natural Amethyst have for centuries symbolized tranquility, restful sleep, and meditative stillness. Paired with calming Lavender Jade, this bracelet offers an oasis of serene elegance for urban living.',
    traditionalSymbolism: 'Traditionally connected to the Crown and Third Eye chakras, encouraging mental stillness, composure during stressful situations, and restful sleep.',
    howToUse: 'Wear on your non-dominant (receiving) wrist during meditation, yoga practice, or throughout a demanding workday.',
    careInstructions: 'Safe for gentle rinsing in lukewarm water. Avoid prolonged direct exposure to intense harsh sunlight to preserve deep amethyst color.',
    inStock: true,
    featured: true
  },
  {
    id: 'bracelet-protection-tourmaline',
    name: 'Black Tourmaline & Hematite Shield Bracelet',
    subtitle: 'Grounding & Energetic Boundary',
    category: 'bracelets',
    intention: 'protection',
    price: 1999,
    originalPrice: 2699,
    discountPercent: 26,
    rating: 4.9,
    reviewCount: 64,
    images: [
      '/assets/images/cat_lifestyle.jpg',
      '/assets/images/combo_money_nazar.jpg'
    ],
    badge: 'Grounding',
    crystalType: 'Raw Black Tourmaline & Magnetic Hematite',
    material: 'Natural Gemstones with Charcoal Matte Finish',
    beadSize: '8mm matte and polished combo',
    wristSizes: ['Small (6.0")', 'Medium (6.5")', 'Large (7.0")'],
    shortDesc: 'Deep pitch-black tourmaline beads paired with reflective hematite for mindful presence and grounded focus.',
    fullDesc: 'Deep pitch-black Tourmaline is celebrated globally as the quintessential grounding mineral. In this bespoke BSence design, untreated black tourmaline is interlaced with sleek metallic hematite beads, anchoring you throughout busy commutes and crowded environments.',
    traditionalSymbolism: 'Traditionally associated with the Root Chakra (Muladhara), stability, emotional resilience, and grounding scattered thoughts.',
    howToUse: 'Wear on the right wrist when travelling or interacting in overwhelming environments to sustain grounded boundaries.',
    careInstructions: 'Cleanse weekly with natural incense or sound vibrations from a Tibetan singing bowl.',
    inStock: true,
    featured: false
  },
  {
    id: 'ring-raw-amethyst',
    name: 'The Royal Amethyst & Rose Quartz Cluster Ring',
    subtitle: '18k Champagne Gold Vermeil Statement Piece',
    category: 'rings',
    price: 4299,
    originalPrice: 5999,
    discountPercent: 28,
    rating: 4.97,
    reviewCount: 52,
    images: [
      '/assets/images/hero_slide_2.jpg',
      '/assets/images/hero_slide_5.jpg'
    ],
    badge: 'High Atelier',
    crystalType: 'Natural Raw Violet Amethyst Geode & Madagascar Rose Quartz',
    material: '18k Champagne Gold Vermeil over 925 Sterling Silver',
    wristSizes: ['US 6 / Indian 12', 'US 7 / Indian 14', 'US 8 / Indian 16', 'Adjustable Band'],
    shortDesc: 'Handcrafted luxury statement ring featuring untreated amethyst crystals nestled alongside soft rose quartz.',
    fullDesc: 'An ode to nature’s raw geometry. Each ring features hand-selected raw amethyst crystalline points paired with blush Madagascar rose quartz, set in a textured, hand-hammered 18k champagne gold vermeil bezel. No two rings are identical, making each piece an exclusive personal talisman.',
    traditionalSymbolism: 'Represents the harmonious balance between intuitive wisdom (Amethyst) and heartfelt compassion (Rose Quartz).',
    howToUse: 'Wear as a luxury statement piece on the index or middle finger. Ideal for evening gatherings or personal rituals.',
    careInstructions: 'Store in the provided velvet BSence luxury box. Avoid contact with water, sanitizer, or abrasive surfaces.',
    inStock: true,
    featured: true,
    bestSeller: true,
    newArrival: true
  },
  {
    id: 'ring-green-aventurine',
    name: 'Green Aventurine Raw Gemstone Cocktail Ring',
    subtitle: 'Hand-Forged 18k Gold Plated Setting',
    category: 'rings',
    price: 3499,
    originalPrice: 4499,
    discountPercent: 22,
    rating: 4.89,
    reviewCount: 38,
    images: [
      '/assets/images/hero_slide_5.jpg',
      '/assets/images/hero_slide_2.jpg'
    ],
    badge: 'Exclusive',
    crystalType: 'Natural Green Aventurine Nugget',
    material: 'Hand-Hammered Brass with 2.5 Micron 18k Gold Dipping',
    wristSizes: ['Adjustable Comfort Fit (Sizes 5 - 9)'],
    shortDesc: 'A captivating raw green aventurine centerpiece celebrating organic elegance and natural vitality.',
    fullDesc: 'Known affectionately as the stone of opportunity and good fortune, this raw Green Aventurine cocktail ring highlights the untreated natural texture of the stone, held in place by organic claw prongs hand-hammered by skilled artisans.',
    traditionalSymbolism: 'Traditionally associated with the Anahata (Heart) chakra, emotional rejuvenation, and welcoming new beginnings.',
    howToUse: 'Pair with neutral ivory linens or formal festive wear to allow the vibrant emerald tones to shine.',
    careInstructions: 'Gently wipe with a jewelry cloth after wear. Remove before washing hands.',
    inStock: true,
    featured: false
  },
  {
    id: 'rudraksha-5mukhi-mala',
    name: 'Sacred 5 Mukhi Nepali Rudraksha Mala (108 Beads)',
    subtitle: '925 Sterling Silver Caps & Crimson Silk Tassel',
    category: 'rudraksha',
    price: 4999,
    originalPrice: 6999,
    discountPercent: 29,
    rating: 4.98,
    reviewCount: 114,
    images: [
      '/assets/images/hero_slide_4.jpg',
      '/assets/images/hero_slide_1.jpg'
    ],
    badge: 'Sacred Heritage',
    crystalType: 'Authentic 5 Mukhi Nepali Rudraksha Beads',
    material: 'Natural Rudraksha with 925 Solid Sterling Silver Mountings',
    beadSize: '10mm - 12mm hand-selected beads',
    shortDesc: 'Authentic high-grade Nepali 5 Mukhi Rudraksha beads strung in traditional 108+1 sacred sequence.',
    fullDesc: 'Harvested from high-altitude groves in Nepal, each Rudraksha bead is selected for symmetrical Mukhi contours and natural density. Strung by seasoned masters in traditional sequence with ornate sterling silver caps on each bead, culminating in a hand-tied crimson silk tassel. Cleansed and energized in Kolkata with pure cow milk, Gangajal, and bilva leaves prior to dispatch.',
    traditionalSymbolism: 'Associated with Lord Shiva (Panchabrahma), symbolizing mental clarity, inner peace, and spiritual discipline.',
    howToUse: 'May be worn around the neck during spiritual practices, or used as a sacred japa mala for mantra meditation.',
    careInstructions: 'Condition occasionally with pure sandalwood or mustard oil using a soft bristle brush. Remove before bathing.',
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: 'rudraksha-pyrite-bracelet',
    name: 'Nepali Rudraksha & Pyrite Harmony Bracelet',
    subtitle: 'Ancient Spiritual Heritage meets Modern Luxury',
    category: 'rudraksha',
    price: 2499,
    originalPrice: 3299,
    discountPercent: 24,
    rating: 4.93,
    reviewCount: 82,
    images: [
      '/assets/images/hero_slide_4.jpg',
      '/assets/images/hero_slide_1.jpg'
    ],
    badge: 'Spiritual Edit',
    crystalType: 'Nepali Rudraksha & Golden Pyrite',
    material: 'Natural Beads with 18k Gold Plated Spacers',
    beadSize: '9mm beads',
    wristSizes: ['Small (6.0")', 'Medium (6.5")', 'Large (7.0")'],
    shortDesc: 'A bridge between spiritual reverence and everyday wrist luxury for conscious individuals.',
    fullDesc: 'Combining the grounding, ancient resonance of authentic Nepali Rudraksha with the radiant, motivating shimmer of natural Pyrite. This piece seamlessly complements both traditional Indian attire and modern corporate tailoring.',
    traditionalSymbolism: 'Represents the synthesis of spiritual equanimity (Rudraksha) and purposeful material manifestation (Pyrite).',
    howToUse: 'Wear on the right wrist to maintain centered composure during business transactions or family ceremonies.',
    careInstructions: 'Avoid dampness. Wipe with dry cotton cloth and preserve in its sacred cloth pouch.',
    inStock: true,
    featured: false
  },
  {
    id: 'chunk-amethyst-geode',
    name: 'Raw Brazilian Royal Amethyst Geode Cluster',
    subtitle: 'Natural Crystalline Specimen for Home Sanctuary',
    category: 'chunks',
    price: 3899,
    originalPrice: 5200,
    discountPercent: 25,
    rating: 4.96,
    reviewCount: 47,
    images: [
      '/assets/images/cat_chunks.jpg',
      '/assets/images/hero_slide_5.jpg'
    ],
    badge: 'Natural Specimen',
    crystalType: 'Untreated Brazilian Deep Purple Amethyst',
    origin: 'Rio Grande do Sul, Brazil',
    dimensions: 'Approx. 4.5" x 3.5" x 2.8"',
    weight: '650g - 850g',
    shortDesc: 'A museum-quality untreated amethyst geode featuring lustrous, deep violet crystalline terminations.',
    fullDesc: 'Directly sourced from geological deposits in Brazil, this substantial geode piece displays rich saturated violet quartz points radiating outward from a natural basalt host rock. Every piece is unique, bringing organic beauty and serene sophistication to coffee tables, consoles, or home meditation spaces.',
    traditionalSymbolism: 'Traditionally revered for creating a calming ambiance, absorbing chaotic environmental energies, and enhancing focus.',
    howToUse: 'Place in the living room, office desk, or beside the bed to bring natural beauty and tranquil energy to your interior space.',
    careInstructions: 'Dust with a soft makeup brush. Cleanse occasionally under moonlight or with sage smoke.',
    inStock: true,
    featured: true
  },
  {
    id: 'chunk-citrine-radiance',
    name: 'Natural Golden Citrine Rough Point Specimen',
    subtitle: 'Sunlit Amber Quartz from Madagascar',
    category: 'chunks',
    price: 2899,
    originalPrice: 3800,
    discountPercent: 24,
    rating: 4.91,
    reviewCount: 39,
    images: [
      '/assets/images/cat_chunks.jpg',
      '/assets/images/hero_slide_5.jpg'
    ],
    badge: 'Solar Stone',
    crystalType: 'Natural Golden Citrine Quartz',
    origin: 'Madagascar',
    dimensions: 'Approx. 3.2" x 2.2" x 2.0"',
    weight: '350g - 450g',
    shortDesc: 'A radiant golden-honey raw crystal cluster embodying the warmth and vitality of sunlight.',
    fullDesc: 'Celebrated as the Merchant’s Stone in centuries of folklore, natural Citrine exhibits luminous warm amber and golden facets that capture ambient light splendidly. Perfect for the wealth corner (South-East in Vastu Shastra) of your home or workspace.',
    traditionalSymbolism: 'Symbolizes warm optimism, clarity of thought, commercial enterprise, and creative inspiration.',
    howToUse: 'Position on your workstation, cash register, or study desk to inspire creativity and focus.',
    careInstructions: 'Do not wash with acid cleaners. Gentle dry dusting is recommended.',
    inStock: true,
    featured: false
  },
  {
    id: 'charging-selenite-plate',
    name: 'The Sacred Selenite Cleansing Round Plate (6 Inch)',
    subtitle: 'Luminous Cleansing & Recharge Station',
    category: 'charging',
    price: 2499,
    originalPrice: 3299,
    discountPercent: 24,
    rating: 4.97,
    reviewCount: 88,
    images: [
      '/assets/images/cat_charging.jpg',
      '/assets/images/hero_slide_5.jpg'
    ],
    badge: 'Essential Ritual',
    crystalType: 'Natural White Moroccan Selenite (Satin Spar)',
    origin: 'Morocco',
    dimensions: '6.0" Diameter x 0.8" Thickness',
    weight: '480g',
    shortDesc: 'A polished round slab of natural Selenite designed to hold, cleanse, and recharge your crystal collection.',
    fullDesc: 'Named after the Greek moon goddess Selene, natural Selenite possesses a translucent pearlescent sheen and a fiber-optic luminous glow. In modern crystal wellness practices, Selenite is revered as an energetic amplifier that never requires cleansing itself, making it the ideal charging bed for your daily bracelets and rings.',
    traditionalSymbolism: 'Symbol of pure white light, mental clarity, spiritual cleansing, and peaceful sanctuary.',
    howToUse: 'Place your crystal bracelets, rings, and pendants flat on the plate overnight to rest, recharge, and set new daily intentions.',
    careInstructions: 'CRITICAL: Do NOT expose Selenite to water as it is a soft gypsum mineral and will dissolve or lose its luster. Clean with dry lint-free cloth only.',
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: 'zodiac-bracelet-aries',
    name: 'Aries Zodiac Crystal Power Bracelet',
    subtitle: 'Red Jasper, Carnelian & Golden Pyrite',
    category: 'zodiac',
    zodiacSign: 'Aries',
    price: 2299,
    originalPrice: 2999,
    discountPercent: 23,
    rating: 4.94,
    reviewCount: 31,
    images: [
      '/assets/images/hero_slide_3.jpg',
      '/assets/images/hero_slide_1.jpg'
    ],
    badge: 'Fire Sign',
    crystalType: 'Red Jasper, Carnelian & Pyrite with Zodiac Charm',
    material: 'Natural Crystals with 18k Gold Plated Aries Ram Charm',
    beadSize: '8mm beads',
    wristSizes: ['Small (6.0")', 'Medium (6.5")', 'Large (7.0")'],
    shortDesc: 'Dynamic fire-energy crystals curated for the bold, pioneering spirit of Aries (Mar 21 - Apr 19).',
    fullDesc: 'Tailored specifically for the pioneering first sign of the zodiac. Rich terracotta Red Jasper is married with vibrant fiery Carnelian and metallic Pyrite, anchored by a delicate 18k gold-plated Aries ram medallion.',
    traditionalSymbolism: 'Aligns with the fiery courage, unyielding initiative, and passionate drive ruled by Mars.',
    howToUse: 'Wear during competitive endeavors, athletic training, or whenever leadership presence is required.',
    careInstructions: 'Recharge periodically on your Selenite plate under early morning sunlight.',
    inStock: true,
    featured: false
  },
  {
    id: 'zodiac-bracelet-leo',
    name: 'Leo Zodiac Crystal Radiance Bracelet',
    subtitle: 'Tiger Eye, Sunstone & Golden Pyrite',
    category: 'zodiac',
    zodiacSign: 'Leo',
    price: 2399,
    originalPrice: 3199,
    discountPercent: 25,
    rating: 4.96,
    reviewCount: 45,
    images: [
      '/assets/images/hero_slide_3.jpg',
      '/assets/images/cat_lifestyle.jpg'
    ],
    badge: 'Solar Sign',
    crystalType: 'Golden Tiger Eye, Sunstone & Pyrite with Leo Lion Charm',
    material: 'Natural Crystals with 18k Gold Plated Leo Medallion',
    beadSize: '8mm beads',
    wristSizes: ['Small (6.0")', 'Medium (6.5")', 'Large (7.0")'],
    shortDesc: 'Regal golden crystals celebrating the heart-centered charisma of Leo (Jul 23 - Aug 22).',
    fullDesc: 'Ruled by the Sun, Leo commands warmth, magnanimity, and expressive vitality. This bracelet captures solar energy through iridescent golden Tiger Eye, sparkling Sunstone, and faceted Pyrite, finished with an engraved Leo lion insignia.',
    traditionalSymbolism: 'Celebrates heart-centered leadership, creative vitality, self-confidence, and generosity.',
    howToUse: 'Wear on the right wrist to broadcast charisma during public speaking, stage appearances, or executive functions.',
    careInstructions: 'Cleanse with sandalwood incense and store in luxury packaging.',
    inStock: true,
    featured: true
  },
  {
    id: 'numerology-bracelet-1',
    name: 'Number 1 Sun Leader Bracelet',
    subtitle: 'For Birth Dates 1, 10, 19, 28 | Ruby Zoisite & Pyrite',
    category: 'numerology',
    numerologyNumber: 1,
    price: 2299,
    originalPrice: 2999,
    discountPercent: 23,
    rating: 4.93,
    reviewCount: 29,
    images: [
      '/assets/images/hero_slide_1.jpg',
      '/assets/images/cat_lifestyle.jpg'
    ],
    badge: 'Number 1',
    crystalType: 'Ruby Zoisite, Golden Pyrite & Clear Quartz',
    material: 'Natural Gemstones with Engraved Gold Number Charm',
    beadSize: '8mm beads',
    wristSizes: ['Small (6.0")', 'Medium (6.5")', 'Large (7.0")'],
    shortDesc: 'Inspired by the solar vibration of Number 1: Independence, leadership, and ambition.',
    fullDesc: 'In Vedic and Western numerology, Number 1 is ruled by Surya (The Sun), symbolizing individuality, executive command, and visionary breakthroughs. Handcrafted with energizing Ruby Zoisite, golden Pyrite, and amplifying Clear Quartz.',
    traditionalSymbolism: 'Enhances initiative, self-reliance, and decisive executive direction.',
    howToUse: 'Wear on Sundays or during important professional transitions to anchor focus.',
    careInstructions: 'Avoid submerging in hot water. Cleanse on your Selenite charging plate.',
    inStock: true,
    featured: false
  },
  {
    id: 'numerology-bracelet-7',
    name: 'Number 7 Ketu Mystic Insight Bracelet',
    subtitle: 'For Birth Dates 7, 16, 25 | Cat’s Eye & Amethyst',
    category: 'numerology',
    numerologyNumber: 7,
    price: 2399,
    originalPrice: 3199,
    discountPercent: 25,
    rating: 4.95,
    reviewCount: 34,
    images: [
      '/assets/images/hero_slide_5.jpg',
      '/assets/images/cat_charging.jpg'
    ],
    badge: 'Number 7',
    crystalType: 'Natural Cat’s Eye Quartz & Chevron Amethyst',
    material: 'Natural Gemstones with 18k Gold Plated Accent',
    beadSize: '8mm beads',
    wristSizes: ['Small (6.0")', 'Medium (6.5")', 'Large (7.0")'],
    shortDesc: 'Deep intuitive and analytical resonance for Number 7 thinkers, philosophers, and spiritual seekers.',
    fullDesc: 'Number 7 is governed by deep contemplative insight, analytical research, and spiritual evolution. Formulated with chatoyant Cat’s Eye and high-grade Chevron Amethyst to deepen meditative focus.',
    traditionalSymbolism: 'Historically associated with philosophical contemplation, intuitive discernment, and sacred knowledge.',
    howToUse: 'Wear during reading, solitary meditation, or analytical research work.',
    careInstructions: 'Gently wipe with dry micro-fiber cloth.',
    inStock: true,
    featured: false
  }
];

export const TRUST_POINTS = [
  {
    icon: 'Sparkles',
    title: 'Cleansed & Energized',
    desc: 'Every crystal and Rudraksha piece is ritually prepared in Kolkata before dispatch.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Authentic Selection',
    desc: 'Thoughtfully curated, natural untreated gemstones sourced from ethical origin mines.'
  },
  {
    icon: 'PackageCheck',
    title: 'Secure Packaging',
    desc: 'Packed in bespoke rigid keepsake gift boxes with velvet pouches and certificates.'
  },
  {
    icon: 'Truck',
    title: 'Pan-India Insured Delivery',
    desc: 'Fast, insured express shipping across 19,000+ pincodes with real-time tracking.'
  }
];
