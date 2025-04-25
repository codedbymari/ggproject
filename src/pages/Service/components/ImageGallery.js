// src/pages/Service/components/ImageGallery.js
import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(null);
  
  const openLightbox = (index) => {
    setActiveImage(index);
  };
  
  const closeLightbox = () => {
    setActiveImage(null);
  };
  
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <>
      <div className="portfolio-grid">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="portfolio-item"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image.url} 
              alt={image.alt || `Portfolio image ${index + 1}`}
              loading="lazy"
            />
            <div className="portfolio-overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>
      
      {activeImage !== null && (
        <div className="lightbox">
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-prev" onClick={prevImage}>‹</button>
            <div className="lightbox-image-container">
              <img 
                src={images[activeImage].url} 
                alt={images[activeImage].alt || `Portfolio image ${activeImage + 1}`}
              />
            </div>
            <button className="lightbox-next" onClick={nextImage}>›</button>
          </div>
          <div className="lightbox-caption">
            {images[activeImage].caption || `Image ${activeImage + 1} of ${images.length}`}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;