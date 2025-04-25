import React from 'react';
import './Features.css';
import Disover from '../../assets/whychoose/discover.png'; 
import Payment from '../../assets/whychoose/payment.png'; 
import TopRated from '../../assets/whychoose/thumbsup.png'; 
import Calendar from '../../assets/whychoose/calendar.png'; 
import Deals from '../../assets/whychoose/heart.png';

const Features = () => {
  const features = [
    {
      icon: Disover,
      description: 'Discover hundreds of beauty professionals in one place.'
    },
    {
      icon: Payment,
      description: 'Secure and seamless transactions.'
    },
    {
      icon: TopRated,
      description: 'Vetted beauty experts for top-notch experiences.'
    },
    {
      icon: Calendar,
      description: 'Schedule your next appointment with a simple click.'
    },
    {
      icon: Deals,
      description: 'Exclusive deals that cater to your needs'
    }
  ];

  return (
    <section className="features">
      <div className="features-inner">
        <h2 className="section-title">
          Why choose <span>GLAMORGRAM?</span>
        </h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <img 
                    src={feature.icon} 
                    alt={`Feature icon ${index + 1}`} 
                    width="40" 
                    height="40"
                    className="feature-image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="feature-content">
                <p>{feature.description}</p>
              </div>
              <div className="feature-card-bg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;