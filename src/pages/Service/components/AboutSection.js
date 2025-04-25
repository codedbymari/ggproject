// src/pages/Service/components/AboutSection.jsx
import React, { useState, useRef, useEffect } from 'react';
import './AboutSection.css';

const AboutSection = ({ 
  title = "About Us", 
  description = "", 
  fullDescription = "", 
  maxPreviewLength = 150 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const previewText = fullDescription ? 
    (description || fullDescription.substring(0, maxPreviewLength) + (fullDescription.length > maxPreviewLength ? '...' : '')) : 
    description;
  const hasMoreContent = fullDescription && fullDescription.length > maxPreviewLength;
  
  // Handle click outside modal to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = ''; // Restore scrolling
    };
  }, [isModalOpen]);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <section className="about-section" aria-labelledby="about-title">
        <h2 id="about-title">{title}</h2>
        <p>{previewText}</p>
        
        {hasMoreContent && (
          <button 
            className="read-more-button" 
            onClick={openModal}
            aria-expanded={isModalOpen}
            aria-controls="about-modal"
          >
            Read more <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        )}
      </section>
      
      {isModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-content" ref={modalRef}>
            <div className="modal-header">
              <h3 id="modal-title">{title}</h3>
              <button 
                className="modal-close" 
                onClick={closeModal}
                aria-label="Close"
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
            <div className="modal-body">
              <p>{fullDescription || description}</p>
            </div>
            <div className="modal-footer">
              <button className="modal-done-button" onClick={closeModal}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;