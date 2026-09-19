import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InstantSearchModal } from './components/InstantSearchModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// 10 Dedicated Pages
import { PageHome } from './pages/PageHome';
import { PageShopAll } from './pages/PageShopAll';
import { PageLifestyleBracelets } from './pages/PageLifestyleBracelets';
import { PageZodiacBracelets } from './pages/PageZodiacBracelets';
import { PageNumerologyBracelets } from './pages/PageNumerologyBracelets';
import { PageCrystalRings } from './pages/PageCrystalRings';
import { PageRudraksha } from './pages/PageRudraksha';
import { PageCrystalChunks } from './pages/PageCrystalChunks';
import { PageChargingPlates } from './pages/PageChargingPlates';
import { PageAboutContact } from './pages/PageAboutContact';
import { PageAdmin } from './pages/PageAdmin';

const AppContent = () => {
  const { currentPage, toastMessage } = useShop();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PageHome />;
      case 'shop':
        return <PageShopAll />;
      case 'lifestyle-bracelets':
        return <PageLifestyleBracelets />;
      case 'zodiac-bracelets':
        return <PageZodiacBracelets />;
      case 'numerology-bracelets':
        return <PageNumerologyBracelets />;
      case 'crystal-rings':
        return <PageCrystalRings />;
      case 'rudraksha':
        return <PageRudraksha />;
      case 'crystal-chunks':
        return <PageCrystalChunks />;
      case 'charging-plates':
        return <PageChargingPlates />;
      case 'about-contact':
        return <PageAboutContact />;
      case 'admin':
        return <PageAdmin />;
      default:
        return <PageHome />;
    }
  };

  return (
    <div className="bsence-app-wrapper">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Luxury Header */}
      <Header />

      {/* Dynamic Main Page Content */}
      <main id="primary-view">
        {renderPage()}
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Modals and Overlays */}
      <CartDrawer />
      <CheckoutModal />
      <ProductDetailModal />
      <InstantSearchModal />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '85px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 300,
            backgroundColor: '#171717',
            color: '#FFFFFF',
            padding: '0.8rem 1.6rem',
            border: '1px solid var(--color-gold)',
            boxShadow: 'var(--shadow-modal)',
            fontSize: '0.85rem',
            letterSpacing: '0.04em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
