import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.svg';
import userIcon from '../../assets/user-icon.svg';
import facebookIcon from '../../assets/social/facebook.svg';
import instagramIcon from '../../assets/social/instagram.svg';
import twitterIcon from '../../assets/social/twitter.svg';
import tiktokIcon from '../../assets/social/tiktok.svg';
import AuthModal from '../Auth/Signup-login';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); 
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileAuthOpen, setIsMobileAuthOpen] = useState(false);
  const [activeAuthTab, setActiveAuthTab] = useState('login'); 
  
  const servicesDropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);
  
  const services = [
    { title: 'HAIR' },
    { title: 'SKINCARE'},
    { title: 'MAKEUP'},
    { title: 'NAILS'},
    { title: 'EYELASHES'},
    { title: 'AESTHETIC MEDICINE' }
  ];
  
  useEffect(() => {
    if (isMenuOpen || isMobileAuthOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen, isMobileAuthOpen]);
  
  const handleMenuItemClick = useCallback(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, []);
  
  const handleServiceClick = useCallback((serviceTitle) => {
    setIsServicesDropdownOpen(false);
    navigate(`/search/${serviceTitle}`);
  }, [navigate]);
  
  const toggleServicesDropdown = useCallback((e) => {
    e.preventDefault();
    setIsServicesDropdownOpen(prev => !prev);
  }, []);
  
  const toggleMobileServices = useCallback((e) => {
    e.stopPropagation();
    setIsMobileServicesOpen(prev => !prev);
  }, []);
  
  const handleUserAuth = useCallback(() => {
    if (window.innerWidth <= 991) {
      setIsMobileAuthOpen(true);
    } else {
      setIsAuthModalOpen(true);
    }
  }, []);
  
  const handleClickOutside = useCallback((event) => {
    if (isMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.hamburger')) {
      setIsMenuOpen(false);
    }
    
    if (
      isServicesDropdownOpen && 
      !servicesDropdownRef.current?.contains(event.target) &&
      !servicesButtonRef.current?.contains(event.target)
    ) {
      setIsServicesDropdownOpen(false);
    }
    
    if (isMobileAuthOpen && !event.target.closest('.mobile-auth-panel') && !event.target.closest('.user-btn')) {
      setIsMobileAuthOpen(false);
    }
  }, [isMenuOpen, isServicesDropdownOpen, isMobileAuthOpen]);
  
  // Close menu when resizing to desktop
  const handleResize = useCallback(() => {
    if (window.innerWidth > 991) {
      setIsMenuOpen(false);
      setIsMobileAuthOpen(false);
      setIsMobileServicesOpen(false);
    }
  }, []);
  
  // Handle escape key press
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      if (isMenuOpen) setIsMenuOpen(false);
      if (isServicesDropdownOpen) setIsServicesDropdownOpen(false);
      if (isAuthModalOpen) setIsAuthModalOpen(false);
      if (isMobileAuthOpen) setIsMobileAuthOpen(false);
      if (isMobileServicesOpen) setIsMobileServicesOpen(false);
    }
  }, [isMenuOpen, isServicesDropdownOpen, isAuthModalOpen, isMobileAuthOpen, isMobileServicesOpen]);
  
  // Set up event listeners
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClickOutside, handleResize, handleKeyDown]);

  return (
    <header className="header">
      <div className="header-container">
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="GlamorgramLogo" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li className="has-dropdown">
              <a 
                href="#" 
                onClick={toggleServicesDropdown}
                ref={servicesButtonRef}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
              >
                Featured Services
                <span className="dropdown-arrow"></span>
              </a>
              {isServicesDropdownOpen && (
                <div className="services-dropdown" ref={servicesDropdownRef}>
                  <ul className="services-list">
                    {services.map((service, index) => (
                      <li 
                        className="service-item-deskt" 
                        key={index}
                        onClick={() => handleServiceClick(service.title)}
                      >
                        <span className="service-title">{service.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/business">GlamorGram Business</Link></li>
          </ul>
        </nav>
        
        <div 
          className={`nav-overlay ${isMenuOpen || isMobileAuthOpen ? 'active' : ''}`}
          onClick={() => {
            setIsMenuOpen(false);
            setIsMobileAuthOpen(false);
          }} 
          aria-hidden="true"
        />
        
        {/* Mobile Navigation */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-header">
            <button 
              className="mobile-close-btn"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <span>×</span>
            </button>
          </div>
          
          <ul className="nav-links">
            <li className="mobile-dropdown">
              <div 
                className={`mobile-dropdown-header ${isMobileServicesOpen ? 'active' : ''}`}
                onClick={toggleMobileServices}
                aria-expanded={isMobileServicesOpen}
                aria-controls="mobile-services-list"
              >
                <span>Featured Services</span>
                <span className="mobile-dropdown-arrow"></span>
              </div>
              <ul 
                id="mobile-services-list"
                className={`mobile-services-list ${isMobileServicesOpen ? 'active' : ''}`}
              >
                {services.map((service, index) => (
                  <li 
                    className="mobile-service-item" 
                    key={index}
                    onClick={() => {
                      handleServiceClick(service.title);
                      handleMenuItemClick();
                    }}
                  >
                    <span>{service.title}</span>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link to="/about" onClick={handleMenuItemClick}>About us</Link></li>
            <li><Link to="/business" onClick={handleMenuItemClick}>GlamorGram Business</Link></li>
            <li><Link to="/contact" onClick={handleMenuItemClick}>Contact us</Link></li>
            <li><Link to="/faq" onClick={handleMenuItemClick}>FAQ</Link></li>
            <li><Link to="/freelancer-guide" onClick={handleMenuItemClick}>Freelancer Guide</Link></li>
          </ul>
          
          <div className="mobile-footer">
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#" aria-label="TikTok">
                <img src={tiktokIcon} alt="TikTok" />
              </a>     
            </div>
            <p>© 2025 Glamorgram </p>
          </div>
        </nav>
                <div className="header-actions">
          <button 
            className="user-btn" 
            aria-label="User Account"
            onClick={handleUserAuth}
          >
            <img src={userIcon} alt="User Account" />
          </button>
        </div>
        
        {/* Desktop Auth Modal */}
        {isAuthModalOpen && (
          <AuthModal 
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            activeTab={activeAuthTab}
            setActiveTab={setActiveAuthTab}
          />
        )}
        
        {/* Mobile Auth Panel */}
        <div className={`mobile-auth-panel ${isMobileAuthOpen ? 'active' : ''}`}>
          <div className="mobile-auth-header">
            <button 
              className="mobile-close-btn"
              onClick={() => setIsMobileAuthOpen(false)}
              aria-label="Close authentication"
            >
              <span>×</span>
            </button>
          </div>
          
          <div className="auth-tabs">
            <button 
              className={`auth-tab ${activeAuthTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveAuthTab('login')}
            >
              Login
            </button>
            <button 
              className={`auth-tab ${activeAuthTab === 'signup' ? 'active' : ''}`}
              onClick={() => setActiveAuthTab('signup')}
            >
              Sign Up
            </button>
          </div>
          
          <div className="auth-content">
            {activeAuthTab === 'login' ? (
              <div className="login-form">

                {/* Login form fields */}
                <div className="form-group">
                  <label htmlFor="mobile-email">Email</label>
                  <input type="email" id="mobile-email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile-password">Password</label>
                  <input type="password" id="mobile-password" placeholder="Enter your password" />
                </div>
                <div className="form-actions">
                  <button className="auth-btn">Login</button>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>
              </div>
            ) : (
              <div className="signup-form">
                {/* Sign up form fields */}
                <div className="form-group">
                  <label htmlFor="mobile-name">Full Name</label>
                  <input type="text" id="mobile-name" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile-signup-email">Email</label>
                  <input type="email" id="mobile-signup-email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile-signup-password">Password</label>
                  <input type="password" id="mobile-signup-password" placeholder="Create a password" />
                </div>
                <div className="form-actions">
                  <button className="auth-btn">Create Account</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;