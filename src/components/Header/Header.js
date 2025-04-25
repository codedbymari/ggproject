import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.svg';
import userIcon from '../../assets/user-icon.svg';
import searchIcon from '../../assets/search-icon.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Toggle body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);
  
  // Handle menu item click
  const handleMenuItemClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  
  // Close menu when clicking outside
  const handleClickOutside = useCallback((event) => {
    if (isMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.hamburger')) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);
  
  // Close menu when resizing to desktop
  const handleResize = useCallback(() => {
    if (window.innerWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);
  
  // Handle escape key press
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);
  
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
            <img src={logo} alt="GlamorousAh Logo" />
          </Link>
        </div>
        
        <div 
          className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)} 
          aria-hidden="true"
        />
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#featured" onClick={handleMenuItemClick}>Featured Services</a></li>
            <li><Link to="/about" onClick={handleMenuItemClick}>About us</Link></li>
            <li><Link to="/business" onClick={handleMenuItemClick}>GlamorGram Business</Link></li>
          </ul>
          
          <div className="mobile-user-actions">
            <Link to="/login" className="mobile-user-link" onClick={handleMenuItemClick}>
              <img src={userIcon} alt="User" />
              <span>Login</span>
            </Link>
            <Link to="/signup" className="mobile-user-link" onClick={handleMenuItemClick}>
              <span>Create Account</span>
            </Link>
          </div>
          
          <div className="mobile-footer">
            <div className="social-icons">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="TikTok">TK</a>
            </div>
            <p>© 2023 GlamorousAh. All rights reserved.</p>
          </div>
        </nav>
        
        <div className="header-actions">
          <button className="search-btn" aria-label="Search">
            <img src={searchIcon} alt="Search" />
          </button>
          <button className="user-btn" aria-label="User Account">
            <img src={userIcon} alt="User Account" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;