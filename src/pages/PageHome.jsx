import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { TrustStrip } from '../components/TrustStrip';
import { ShopByCollection } from '../components/ShopByCollection';
import { BsenceEditCarousel } from '../components/BsenceEditCarousel';
import { LuxuryRingsEditorial } from '../components/LuxuryRingsEditorial';
import { ZodiacSelector } from '../components/ZodiacSelector';
import { NumerologySection } from '../components/NumerologySection';
import { MoneyNazarCombo } from '../components/MoneyNazarCombo';
import { KnowYourCrystal } from '../components/KnowYourCrystal';
import { PreparationProcess } from '../components/PreparationProcess';
import { BrandStoryEditorial } from '../components/BrandStoryEditorial';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import { InstagramGrid } from '../components/InstagramGrid';
import { Newsletter } from '../components/Newsletter';

export const PageHome = () => {
  return (
    <main id="main-content">
      {/* 1. Hero 3-Second Automatic Slideshow */}
      <HeroSlider />

      {/* 2. Trust Strip (4 Pillars) */}
      <TrustStrip />

      {/* 3. Shop by Collection (6 visual cards) */}
      <ShopByCollection />

      {/* 4. Featured Collection: The BSence Edit */}
      <BsenceEditCarousel />

      {/* 5. Luxury Crystal Rings Editorial */}
      <LuxuryRingsEditorial />

      {/* 6. Zodiac Selector (12 signs) */}
      <ZodiacSelector />

      {/* 7. Numerology Section (1-9 cards + CTA) */}
      <NumerologySection />

      {/* 8. Super Balanced Combo (Money + Nazar) */}
      <MoneyNazarCombo />

      {/* 9. Know Your Crystal Educational Cards */}
      <KnowYourCrystal />

      {/* 10. How BSence Prepares Your Order (4-step timeline) */}
      <PreparationProcess />

      {/* 11. Brand Story Editorial */}
      <BrandStoryEditorial />

      {/* 12. Customer Reviews Carousel */}
      <ReviewsCarousel />

      {/* 13. Instagram Gallery */}
      <InstagramGrid />

      {/* 14. Newsletter Signup */}
      <Newsletter />
    </main>
  );
};
