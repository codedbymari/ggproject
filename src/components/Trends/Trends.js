import React, { useState } from 'react';
import './Trends.css';

const Trends = () => {
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [touchedIndex, setTouchedIndex] = useState(null);
  
  const trends = [
    {
      title: 'Sugar Wax',
      image: require('../../assets/trends/sugar-wax.png'),
      alt: 'Natural sugar wax hair removal technique',
      description: 'Gentle, natural hair removal'
    },
    {
      title: 'BIAB Nails',
      image: require('../../assets/trends/biab.png'),
      alt: 'Builder In A Bottle nail enhancement technique',
      description: 'Stronger, healthier nail enhancement'
    },
    {
      title: 'Curly Hair',
      image: require('../../assets/trends/curls.png'),
      alt: 'Natural curly hair styling techniques',
      description: 'Embrace your natural texture'
    },
    {
      title: 'Microblading',
      image: require('../../assets/trends/microblading.png'),
      alt: 'Microblading eyebrow enhancement technique',
      description: 'Semi-permanent brow perfection'
    }
  ];

  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleTouchStart = (index) => {
    setTouchedIndex(index);
  };

  const handleTouchEnd = () => {
    setTouchedIndex(null);
  };

  return (
    <section className="trends" id="trends">
      <div className="container">
        <h2 className="section-title">Discover the latest trends</h2>
        <p className="trends-subtitle">Stay up to date with the newest beauty techniques and styles</p>
        
        <div className="trends-grid">
          {trends.map((trend, index) => (
            <div 
              className={`trend-card ${touchedIndex === index ? 'touched' : ''}`}
              key={index}
              tabIndex="0"
              role="button"
              aria-label={`Explore ${trend.title}: ${trend.description}`}
              onClick={() => console.log(`Clicked on ${trend.title}`)}
              onTouchStart={() => handleTouchStart(index)}
              onTouchEnd={handleTouchEnd}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  console.log(`Activated ${trend.title} with keyboard`);
                }
              }}
            >
              <div className="trend-image">
                <img 
                  src={trend.image} 
                  alt={trend.alt}
                  onLoad={() => handleImageLoad(index)}
                  style={{ opacity: imagesLoaded[index] ? 1 : 0 }}
                />
                <div className="trend-title-overlay">
                  <h3 className="trend-title">{trend.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trends;