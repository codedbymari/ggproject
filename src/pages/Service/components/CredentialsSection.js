// src/pages/Service/components/CredentialsSection.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CredentialsSection.css';

/**
 * @param {Object} props - Component props
 * @param {Array} props.credentials - Array of credential objects or strings
 * @param {string} props.title - Section title
 * @param {boolean} props.isLoading - Loading state
 * @param {string} props.emptyMessage - Message to display when no credentials
 * @returns {JSX.Element} Rendered component
 */
const CredentialsSection = ({ 
  credentials, 
  title = "Credentials & Certifications",
  isLoading = false,
  emptyMessage = "No credentials or certifications listed"
}) => {
  const [expanded, setExpanded] = useState(false);
  
  // Handle empty or null credentials
  if (!isLoading && (!credentials || credentials.length === 0)) {
    return (
      <div className="credentials-section credentials-empty" data-testid="credentials-empty">
        <i className="fas fa-certificate empty-icon" aria-hidden="true"></i>
        <p>{emptyMessage}</p>
      </div>
    );
  }
  
  // Determine if we need to show "Show More" button (for mobile)
  const showMoreThreshold = 6;
  const hasMoreItems = credentials.length > showMoreThreshold;
  const displayedCredentials = expanded ? credentials : credentials.slice(0, showMoreThreshold);
  
  // Determine credential type for styling
  const getCredentialType = (credential) => {
    if (typeof credential === 'string') {
      const lowerText = credential.toLowerCase();
      
      if (lowerText.includes('certif')) return 'certification';
      if (lowerText.includes('licen')) return 'license';
      if (lowerText.includes('award') || lowerText.includes('honor')) return 'award';
      if (lowerText.includes('degree') || lowerText.includes('diploma') || lowerText.includes('education')) return 'education';
      
      return '';
    }
    
    // If it's an object with a type property, use that
    if (credential.type) return credential.type;
    
    // Otherwise, try to determine from the text
    const text = credential.text || '';
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('certif')) return 'certification';
    if (lowerText.includes('licen')) return 'license';
    if (lowerText.includes('award') || lowerText.includes('honor')) return 'award';
    if (lowerText.includes('degree') || lowerText.includes('diploma') || lowerText.includes('education')) return 'education';
    
    return '';
  };
  
  // Get credential text and icon
  const getCredentialContent = (credential, index) => {
    if (typeof credential === 'string') {
      // Determine icon based on credential type
      let icon = null;
      const type = getCredentialType(credential);
      
      switch(type) {
        case 'certification':
          icon = 'fas fa-certificate';
          break;
        case 'license':
          icon = 'fas fa-id-badge';
          break;
        case 'award':
          icon = 'fas fa-trophy';
          break;
        case 'education':
          icon = 'fas fa-graduation-cap';
          break;
        default:
          icon = 'fas fa-check-circle';
      }
      
      return {
        text: credential,
        icon
      };
    }
    
    return {
      text: credential.text || `Credential ${index + 1}`,
      icon: credential.icon || 'fas fa-check-circle'
    };
  };
  
  return (
    <div 
      className={`credentials-section ${isLoading ? 'credentials-loading' : ''}`} 
      data-testid="credentials-section"
    >
   
      
      <div className="credential-badges">
        {isLoading ? (
          // Loading state
          Array(4).fill().map((_, index) => (
            <span 
              key={`credential-loading-${index}`} 
              className="credential-badge"
              aria-hidden="true"
            >
              Loading...
            </span>
          ))
        ) : (
          // Actual credentials
          displayedCredentials.map((credential, index) => {
            const { text, icon } = getCredentialContent(credential, index);
            const type = getCredentialType(credential);
            
            return (
              <span 
                key={`credential-${index}`} 
                className={`credential-badge ${type}`}
                title={text}
              >
                {icon && <i className={`${icon} badge-icon`} aria-hidden="true"></i>}
                {text}
              </span>
            );
          })
        )}
        
        {/* Show more button for mobile */}
        {!isLoading && hasMoreItems && (
          <button 
            className="credential-badge show-more"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            <i className={`fas fa-${expanded ? 'minus' : 'plus'} badge-icon`} aria-hidden="true"></i>
            {expanded ? 'Show Less' : `+${credentials.length - showMoreThreshold} More`}
          </button>
        )}
      </div>
    </div>
  );
};

CredentialsSection.propTypes = {
  credentials: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        icon: PropTypes.string,
        type: PropTypes.string
      })
    ])
  ),
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  emptyMessage: PropTypes.string
};

CredentialsSection.defaultProps = {
  credentials: [],
  title: "Credentials & Certifications",
  isLoading: false,
  emptyMessage: "No credentials or certifications listed"
};

export default CredentialsSection;