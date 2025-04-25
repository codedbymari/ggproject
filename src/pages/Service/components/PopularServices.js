// src/pages/Service/components/PopularServices.js
import React from 'react';
import './PopularServices.css';

const PopularServices = ({ services }) => {
  // Enhanced validation with debugging
  if (!services) {
    console.warn('PopularServices: No services data provided');
    return null;
  }
  
  if (!Array.isArray(services)) {
    console.warn('PopularServices: Services prop is not an array', services);
    return null;
  }
  
  if (services.length === 0) {
    console.warn('PopularServices: Services array is empty');
    return null;
  }

  console.log('Rendering PopularServices with:', services);

  return (
    <section className="popular-services-section">
<h2 className="popular-services-heading">Popular Services</h2>      
      <div className="services-grid-container">
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id || `service-${Math.random()}`} 
              className="service-card" 
              tabIndex="0" 
              role="button"
              aria-label={`View details for ${service.name || 'Service'}`}
            >
              <div className="service-image">
                <img 
                  src={service.image || "/images/placeholder.jpg"} 
                  alt={service.name || 'Service'}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
              </div>
              <div className="service-info">
                <div className="service-name-container">
                  <span className="service-name">{service.name || 'Service Type'}</span>
                </div>
                <span className="service-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;