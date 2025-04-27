import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState({});
  
  const services = [
    {
      title: 'HAIR',
      image: require('../../assets/services/hair.png'),
      alt: 'Hair styling and treatment services'
    },
    {
      title: 'SKINCARE',
      image: require('../../assets/services/skincare.png'),
      alt: 'Facial and skincare treatment services'
    },
    {
      title: 'MAKEUP',
      image: require('../../assets/services/makeup1.png'),
      alt: 'Professional makeup application services'
    },
    {
      title: 'NAILS',
      image: require('../../assets/services/nails.png'),
      alt: 'Manicure and nail art services'
    },
    {
      title: 'EYELASHES',
      image: require('../../assets/services/eyelashes.png'),
      alt: 'Eyelash extension and treatment services'
    },
    {
      title: 'AESTHETIC MEDICINE',
      image: require('../../assets/services/am.png'),
      alt: 'Non-surgical aesthetic procedures'
    }
  ];

  const handleServiceClick = (serviceTitle) => {
    navigate(`/search/${serviceTitle}`);
  };
  
  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({
      ...prev,
      [index]: true
    }));
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="section-title">OUR SERVICES</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              onClick={() => handleServiceClick(service.title)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleServiceClick(service.title);
                }
              }}
              tabIndex="0"
              role="button"
              aria-label={`View ${service.title.toLowerCase()} services`}
            >
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className="service-image"
                  onLoad={() => handleImageLoad(index)}
                  style={{ opacity: imagesLoaded[index] ? 1 : 0 }}
                />
              </div>
              <div className="service-title-container">
                <h3 className="service-title">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;