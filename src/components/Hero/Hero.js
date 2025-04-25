import React, { useState, useEffect } from 'react';
import { FiSearch, FiMapPin, FiChevronDown } from 'react-icons/fi';
import heroImage from '../../assets/hero-image.jpg';
import './Hero.css';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Check if viewport is desktop size
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    // Set initial value
    checkIfDesktop();
    
    // Add event listener
    window.addEventListener('resize', checkIfDesktop);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery, 'in', location);
    // Here you would typically handle the search
  };

  const scrollToContent = () => {
    const servicesSection = document.getElementById('services');
    
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hero-wrapper">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-image-container">
            <img 
              src={heroImage} 
              alt="Beauty treatment" 
              loading="eager" 
              className="hero-img"
              width={isDesktop ? "553" : "100%"}
              height={isDesktop ? "563" : "auto"}
            />
          </div>
          
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">Beauty on your Schedule</span>
              <span className="title-secondary">WHEREVER YOU ARE</span>
            </h1>
            
            <div className="search-container">
              <form 
                className={`search-bar ${isFocused ? 'focused' : ''}`}
                onSubmit={handleSearch}
              >
                <div className="search-input-wrapper">
                  <FiSearch className="search-icon-hero" />
                  <input 
                    type="text" 
                    placeholder="Search for service" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    aria-label="Search for beauty services"
                  />
                </div>
                
                <div className="location-divider"></div>
                
                <div className="location-input-wrapper">
                  <FiMapPin className="location-hero-icon" />
                  <input 
                    type="text" 
                    placeholder="City" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    aria-label="Enter location"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="search-hero-button"
                  aria-label="Search"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Browse indicator shown on desktop browsers */}
      {isDesktop && (
        <div 
          className="browse-indicator" 
          onClick={scrollToContent}
          onKeyDown={(e) => e.key === 'Enter' && scrollToContent()}
          role="button"
          tabIndex={0}
          aria-label="Scroll down to browse content"
        >
          <div className="browse-text">
            <span>Browse & get inspired</span>
          </div>
          <FiChevronDown className="browse-icon" aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

export default Hero;