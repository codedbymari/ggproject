// src/pages/Service/components/tabs/PortfolioTab.js
import React from 'react';
import ImageGallery from '../ImageGallery';

const PortfolioTab = ({ businessName }) => {
  // Mock portfolio images - will be replaced with real data from backend
  const portfolioImages = [
    { url: 'https://source.unsplash.com/random/300x300?haircut', alt: 'Haircut service', caption: 'Professional haircut' },
    { url: 'https://source.unsplash.com/random/300x300?nails', alt: 'Nail service', caption: 'Manicure' },
    { url: 'https://source.unsplash.com/random/300x300?massage', alt: 'Massage service', caption: 'Relaxing massage' },
    { url: 'https://source.unsplash.com/random/300x300?facial', alt: 'Facial service', caption: 'Facial treatment' },
    { url: 'https://source.unsplash.com/random/300x300?haircolor', alt: 'Hair coloring', caption: 'Hair coloring service' },
    { url: 'https://source.unsplash.com/random/300x300?spa', alt: 'Spa treatment', caption: 'Spa treatment' },
  ];
  
  return (
    <div className="portfolio-tab-content">
      
      {/* BACKEND INTEGRATION POINT:
          This would fetch portfolio images from your backend
      */}
      <ImageGallery images={portfolioImages} />
    </div>
  );
};

export default PortfolioTab;