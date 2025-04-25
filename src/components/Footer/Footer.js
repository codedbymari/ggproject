import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebookIcon from '../../assets/social/facebook.svg';
import instagramIcon from '../../assets/social/instagram.svg';
import twitterIcon from '../../assets/social/twitter.svg';
import tiktokIcon from '../../assets/social/tiktok.svg';

const Footer = () => {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-social">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <img src={tiktokIcon} alt="TikTok" />
              </a>
            </div>
          </div>
          
          <div className="footer-nav">
            <ul className="footer-links">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/freelancer-guide">Freelancer Guide</Link></li>
              <li><Link to="/help-support">Help & Support</Link></li>
            </ul>
          </div>
          
          <div className="footer-copyright">
            <p>© {currentYear} GlamorGram</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;