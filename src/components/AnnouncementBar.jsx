import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, ShieldCheck } from 'lucide-react';

export const AnnouncementBar = () => {
  const announcements = [
    {
      text: '✨ Every Crystal Is Cleansed & Energized In Kolkata Before Dispatch ✨',
      icon: Sparkles
    },
    {
      text: 'Complimentary Insured Express Delivery Pan-India on Orders Above ₹1,999',
      icon: Truck
    },
    {
      text: 'Use Privilege Code BSENCE10 For 10% Off Your Inaugural Order',
      icon: ShieldCheck
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const CurrentIcon = announcements[currentIndex].icon;

  return (
    <div className="announcement-bar" role="region" aria-label="Announcement">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.5s ease' }}>
        <CurrentIcon size={13} className="text-gold" />
        <span>{announcements[currentIndex].text}</span>
      </div>
    </div>
  );
};
