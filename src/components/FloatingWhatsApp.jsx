import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const phoneNumber = '919112893227';
  const defaultMessage = encodeURIComponent('Hello BSence, I would like to know more about your crystal products.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with BSence Concierge on WhatsApp"
      title="Chat with BSence Kolkata Concierge"
    >
      <MessageCircle size={20} fill="#FFFFFF" color="#25D366" />
      <span>Concierge</span>
    </a>
  );
};
