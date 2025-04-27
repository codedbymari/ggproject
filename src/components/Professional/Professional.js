import React from 'react';
import { Link } from 'react-router-dom';
import './Professional.css';

const Professional = () => {
  return (
    <div className="professional-container">
      <section className="professional">
        <div className="professional-content">
          <h2 className="professional-title">Are you a professional?</h2>
          <p className="professional-subtitle">Grow your beauty business with our dedicated platform</p>
          
          <Link 
            to="/business" 
            className="cta-button-business"
            onClick={(e) => {
              window.scrollTo(0, 0);
            }}
          >
            GlamorGram Business
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Professional;