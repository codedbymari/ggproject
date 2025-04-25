import React, { useState, useEffect } from 'react';
import './ServiceHeader.css';

const ServiceHeader = ({ businessInfo, popularServices, onMessageClick, onBackClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [galleryLayout, setGalleryLayout] = useState('grid');
  const [isSaved, setIsSaved] = useState(false);
  
  // Filter valid images from popular services
  const images = popularServices
    .map(service => service.image)
    .filter(Boolean);
    
  // Add fallback image if needed
  if (images.length === 0) {
    images.push('/images/placeholder.jpg');
  }
  
  // Set gallery layout based on image count
  useEffect(() => {
    setGalleryLayout(images.length > 1 ? 'grid' : 'single');
  }, [images.length]);
  
  // Auto-rotate gallery images every 6 seconds
  useEffect(() => {
    if (images.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 6000);
      
      return () => clearInterval(intervalId);
    }
  }, [images.length]);
  
  const navigateGallery = (direction) => {
    setCurrentImageIndex(prevIndex => {
      if (direction === 'next') {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };
  
  // Toggle save status
  const toggleSave = () => {
    setIsSaved(prev => !prev);
    // TODO: Backend integration for saving business
    // This is where you would call your API to save/unsave the business
    // Example: api.saveBusinessProfile(businessInfo.id, !isSaved)
    //   .then(response => console.log('Save status updated'))
    //   .catch(error => console.error('Failed to update save status', error));
  };
  
  // Format phone number for display
  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return '';
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneNumber;
  };

  // Bookmark SVG icon component
  const BookmarkIcon = ({ isSaved }) => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      xmlns="http://www.w3.org/2000/svg"
      className="bookmark-icon"
      aria-hidden="true"
    >
      <path 
        d={isSaved 
          ? "M12.5 1h-9l-.5.5v13l.872.335L8 10.247l4.128 4.588L13 14.5v-13z" 
          : "M12.5 1h-9l-.5.5v13l.872.335L8 10.247l4.128 4.588L13 14.5v-13zM12 13.2 8.372 9.165h-.744L4 13.2V2h8z"
        }
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div className="service-header">
      <div className={`service-gallery-container gallery-layout-${galleryLayout}`}>
        <div className="image-gallery">
          {images.slice(0, 8).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${businessInfo.name} - Image ${index + 1}`}
              className={`gallery-image ${index === currentImageIndex ? 'active' : ''}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/placeholder.jpg";
              }}
            />
          ))}
          
          {images.length > 1 && (
            <div className="gallery-indicators">
              {images.map((_, index) => (
                <button 
                  key={index}
                  aria-label={`Go to image ${index + 1}`}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          )}
          
          {images.length > 8 && (
            <button className="view-all-photos" aria-label="View all photos">
              <i className="fas fa-images"></i>
              <span>View All Photos ({images.length})</span>
            </button>
          )}
        </div>
        
        <div className="gallery-business-info">
          <div className="business-quick-info">
            <div className="business-location-pill">
              <i className="fas fa-map-marker-alt"></i>
              <span>{businessInfo.location}</span>
            </div>
            
            <div className="business-rating-pill">
              <i className="fas fa-star"></i>
              <div className="rating-label-value">
                <span className="rating-label">Rating:</span>
                <span className="rating-value">{businessInfo.rating}</span>
              </div>
              <div className="rating-stars-mini">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span 
                    key={star} 
                    className={`star-mini ${star <= Math.round(businessInfo.rating) ? 'filled' : 'empty'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-count-mini">({businessInfo.reviews})</span>
            </div>
            
            <div className="business-phone-pill">
              <i className="fas fa-phone-alt"></i>
              <span>{formatPhoneNumber(businessInfo.phone)}</span>
            </div>
            
            {/* Save button with custom bookmark SVG icon */}
            <button 
              className={`save-button ${isSaved ? 'saved' : ''}`}
              onClick={toggleSave}
              aria-label={isSaved ? "Remove from saved" : "Save business"}
            >
              <BookmarkIcon isSaved={isSaved} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="service-info-container">
        <div className="service-info-content">
          <div className="service-main-info">
            <div className="business-header">
              <h1 className="business-name">{businessInfo.name}</h1>
              {businessInfo.verified && (
                <span className="verified-badge" title="Verified Business">
                  <i className="fas fa-check-circle"></i>
                </span>
              )}
            </div>
          </div>
        </div>
        
        {businessInfo.hours && (
          <div className="business-hours">
            <div className="hours-header">
              <i className="far fa-clock"></i>
              <span className="hours-title">Hours</span>
              {businessInfo.openNow && <span className="open-now">Open Now</span>}
              {businessInfo.openNow === false && <span className="closed-now">Closed Now</span>}
            </div>
            <div className="hours-content">
              {Object.entries(businessInfo.hours).map(([day, hours]) => (
                <div key={day} className={`hours-row ${day === 'Today' ? 'today' : ''}`}>
                  <span className="day">{day}</span>
                  <span className="time">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceHeader;