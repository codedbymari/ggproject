// src/pages/Service/components/CTASection.js
import React from 'react';
import PropTypes from 'prop-types';
import './CTASection.css';

/**
 * CTASection - A compact, responsive call-to-action component
 * 
 * @param {Object} props - Component props
 * @param {string} props.businessName - Name of the business to display
 * @param {Function} props.onQuestionClick - Handler for question button click
 * @param {Function} props.onPolicyClick - Handler for policy button click (not used in this version)
 * @param {string} [props.heading] - Optional custom heading text
 * @param {string} [props.variant] - Visual variant of the CTA ('default', 'subtle', 'prominent')
 * @returns {JSX.Element} Rendered CTA section
 */
const CTASection = ({ 
  businessName, 
  onQuestionClick, 
  onPolicyClick, // Keeping for API compatibility
  heading,
  variant = 'default'
}) => {
  // More concise heading text
  const headingText = heading || `Questions about ${businessName}'s services?`;
  
  return (
    <section 
      className={`cta-section cta-variant-${variant}`}
      aria-labelledby="cta-heading"
    >
      <div className="cta-content">
        <h3 id="cta-heading" className="cta-heading">
          {headingText}
        </h3>
        
        <div className="cta-buttons">
          <button 
            className="cta-button primary"
            onClick={onQuestionClick}
            aria-label={`Ask a question about ${businessName}'s services`}
          >
            <span className="button-text">Ask a Question</span>
          </button>
        </div>
      </div>
    </section>
  );
};

CTASection.propTypes = {
  businessName: PropTypes.string.isRequired,
  onQuestionClick: PropTypes.func.isRequired,
  onPolicyClick: PropTypes.func.isRequired, // Keeping for API compatibility
  heading: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'subtle', 'prominent'])
};

export default CTASection;