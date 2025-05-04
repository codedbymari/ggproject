// src/pages/SearchPage/components/ResultCard/ResultCard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa';
import './ResultCard.css';

/**
 * ResultCard Component
 * 
 * Displays information about a single service provider including image,
 * name, rating, services, and pricing. The entire card is clickable
 * and navigates to the service page using dynamic routing. 
 */
const ResultCard = ({ result, onToggleFavorite }) => {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  
  const handleImageError = () => {
    console.log("Image failed to load:", result.image);
    setImageError(true);
  };

  // Get fallback image if the original fails to load
  const getImageSrc = () => {
    if (imageError) {
      return '/images/placeholder.jpg'; // create a fallback placeholder
    }
    return result.image;
  };

  const formatPrice = (price) => {
    return typeof price === 'number' 
      ? price % 1 === 0 
        ? `£${price}` 
        : `£${price.toFixed(2)}`
      : 'Price unavailable';
  };

  // Navigate to service page when card is clicked
  const navigateToService = () => {
    navigate(`/services/${result.id}`);
  };

  const handleActionClick = (e, callback) => {
    e.stopPropagation();
    callback();
  };

  return (
    <div className="result-card" onClick={navigateToService}>
      <div className="card-image">
        <img 
          src={getImageSrc()} 
          alt={result.name} 
          onError={handleImageError}
          loading="lazy"
        />
        
        <div className="card-actions">
          <button 
            className={`favorite-btn ${result.favorite ? 'active' : ''}`}
            onClick={(e) => handleActionClick(e, () => onToggleFavorite(result.id))}
            aria-label={result.favorite ? "Remove from favorites" : "Add to favorites"}
          >
            {result.favorite ? <FaHeart /> : <FaRegHeart />}
          </button>
          
          <button 
            className="photo-btn" 
            aria-label="View photos"
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 18L7 13L11 17L16 12L22 18" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
          </button>
        </div>
        
        <div className="distance-badge">{result.distance}</div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{result.name}</h3>
        
        <div className="card-location">
          <FaMapMarkerAlt className="location-icon" />
          <span>{result.address}</span>
        </div>
        
        <div className="card-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < Math.floor(result.rating) ? 'filled' : 'empty'} 
              />
            ))}
          </div>
          <span className="rating-text">
            {result.rating.toFixed(1)} ({result.reviews})
          </span>
        </div>
        
        <div className="card-services">
          {result.services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-info">
                <span className="service-name">{service.name}</span>
                <div className="service-time">
                  <FaClock className="time-icon" />
                  <span>{service.time}</span>
                </div>
              </div>
              <span className="service-price">{formatPrice(service.price)}</span>
            </div>
          ))}
        </div>
        
        <div className="card-footer">
          <button 
            className="view-more-btn"
            onClick={(e) => {
              e.stopPropagation();
              // make the view more clickable
              navigate(`/booking/${result.id}`);
            }}
          >
            View More 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;