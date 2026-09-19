export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  productName: string;
  productId: string;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  avatarText: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Ananya Mukherjee',
    location: 'Salt Lake, Kolkata',
    rating: 5,
    productName: 'Super Balanced Combo: Money + Nazar Protection',
    productId: 'combo-money-nazar',
    date: '3 days ago',
    title: 'Exquisite craftsmanship and genuinely energized packaging',
    comment: 'The presentation is simply unmatched. You can immediately smell the gentle sandalwood and dhoop upon unboxing the white velvet box. The Pyrite has a dense, authentic metallic luster and the Nazar charm is so delicately crafted. Proud to have such a world-class luxury brand originating from Kolkata!',
    verified: true,
    avatarText: 'AM'
  },
  {
    id: 'rev-2',
    author: 'Vikramaditya Sen',
    location: 'Bandra West, Mumbai',
    rating: 5,
    productName: 'Sacred 5 Mukhi Nepali Rudraksha Mala',
    productId: 'rudraksha-5mukhi-mala',
    date: '1 week ago',
    title: 'Authentic Nepali beads with impeccable silver work',
    comment: 'I have looked at numerous Rudraksha malas across Haridwar and Varanasi, but the density of the Nepali beads and the silver cap craftsmanship from BSence is at a high-jewelry standard. The energization certificate and care guide were thoughtfully detailed.',
    verified: true,
    avatarText: 'VS'
  },
  {
    id: 'rev-3',
    author: 'Pooja Agarwal',
    location: 'Vasant Vihar, New Delhi',
    rating: 5,
    productName: 'The Royal Amethyst & Rose Quartz Cluster Ring',
    productId: 'ring-raw-amethyst',
    date: '2 weeks ago',
    title: 'A true high-fashion statement ring',
    comment: 'Received compliments from everyone at a festive dinner last night. The contrast between the raw amethyst crystal points and the warm champagne gold band looks like something straight out of an international design atelier. Will be ordering the Green Aventurine ring next!',
    verified: true,
    avatarText: 'PA'
  },
  {
    id: 'rev-4',
    author: 'Rajesh Iyer',
    location: 'Indiranagar, Bengaluru',
    rating: 5,
    productName: 'The Sacred Selenite Cleansing Round Plate',
    productId: 'charging-selenite-plate',
    date: '2 weeks ago',
    title: 'Pure white luminous beauty on my bedside altar',
    comment: 'The Selenite plate has a wonderful pearlescent glow when the morning sun hits it. I keep my watch, wedding band, and BSence bracelets resting on it every night. Delivery to Bengaluru took just 48 hours in heavy protective bubble and rigid box packaging.',
    verified: true,
    avatarText: 'RI'
  },
  {
    id: 'rev-5',
    author: 'Sunita Roy Chowdhury',
    location: 'Ballygunge, Kolkata',
    rating: 5,
    productName: 'Peruvian Pyrite & Citrine Abundance Bracelet',
    productId: 'bracelet-money-pyrite',
    date: '3 weeks ago',
    title: 'Flawless quality, custom sizing fit perfectly',
    comment: 'Requested a custom 6.2 inch wrist fit via their WhatsApp concierge (+91 91128 93227) and the team accommodated it effortlessly. The weight of the Pyrite beads confirms their natural mineral authenticity. Beautifully cleansed and presented.',
    verified: true,
    avatarText: 'SR'
  }
];
