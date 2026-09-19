import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, ShieldCheck } from 'lucide-react';

export const AnnouncementBar = () => {
  const announcements = [
    {
      desktop: '✨ Every Crystal Is Cleansed & Energized In Kolkata Before Dispatch ✨',
      mobile: '✨ Cleansed & Energized In Kolkata Before Dispatch ✨',
      icon: Sparkles
    },
    {
      desktop: 'Complimentary Insured Express Delivery Pan-India on Orders Above ₹1,999',
      mobile: 'Complimentary Insured Delivery Across India on ₹1,999+',
      icon: Truck
    },
    {
      desktop: 'Use Privilege Code BSENCE10 For 10% Off Your Inaugural Order',
      mobile: 'Use Privilege Code BSENCE10 For 10% Off',
      icon: ShieldCheck
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const current = announcements[currentIndex];
  const CurrentIcon = current.icon;

  return (
    <div className="announcement-bar" role="region" aria-label="Announcement">
      <div className="announcement-content">
        <CurrentIcon size={12} className="text-gold announcement-icon" />
        <span className="announcement-text-desktop">{current.desktop}</span>
        <span className="announcement-text-mobile">{current.mobile}</span>
      </div>
    </div>
  );
};
