//src/components/Services/Services.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: 'HAIR',
      image: require('../../assets/services/hair.png')
    },
    {
      title: 'SKINCARE',
      image: require('../../assets/services/skincare.png')
    },
    {
      title: 'MAKEUP',
      image: require('../../assets/services/makeup1.png'),
    },
    {
      title: 'NAILS',
      image: require('../../assets/services/nails.png')
    },
    {
      title: 'EYELASHES',
      image: require('../../assets/services/eyelashes.png')
    },
    {
      title: 'AESTHETIC MEDICINE',
      image: require('../../assets/services/am.png')
    }
  ];

  const handleServiceClick = (serviceTitle) => {
    navigate(`/search/${serviceTitle}`);
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
            >
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
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