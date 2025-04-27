import React, { useState, useEffect, useRef} from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import heroImage from '../../assets/hero-image.jpg';
import './Hero.css';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const searchFormRef = useRef(null);
  const searchInputRef = useRef(null);
  const locationInputRef = useRef(null);

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && isDesktop) {
      handleSearch(e);
    }
  };
  
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkIfDesktop();
    
    window.addEventListener('resize', checkIfDesktop);
    
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery, 'in', location);
    //  handles the search
  };

  return (
    <div className="hero-wrapper">
      <section className="heropage-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">Beauty on your Schedule</span>
              <span className="title-secondary">WHEREVER YOU ARE</span>
            </h1>
            
            <div className="search-container-hero">
              <form 
                className={`search-bar ${isFocused ? 'focused' : ''}`}
                onSubmit={handleSearch}
                ref={searchFormRef}
              >
                <div className="search-input-wrapper">
                  <FiSearch className="search-icon-hero" />
                  <input 
                    ref={searchInputRef}
                    type="text" 
                    placeholder="Search for service" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyDown={handleInputKeyDown}
                    aria-label="Search for beauty services"
                  />
                </div>
                
                <div className="location-divider"></div>
                
                <div className="location-input-wrapper">
                  <FiMapPin className="location-hero-icon" />
                  <input 
                    ref={locationInputRef}
                    type="text" 
                    placeholder="City" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyDown={handleInputKeyDown}
                    aria-label="Enter location"
                  />
                </div>
                
                {/* search button only shows on mobile screens */}
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
        </div>
      </section>
    </div>
  );
};

export default Hero;