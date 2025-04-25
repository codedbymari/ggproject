// src/pages/Service/components/LoadingStates.js
import React from 'react';
import './LoadingStates.css';


const LoadingState = ({ type, message }) => {
  if (type === 'loading') {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading service details...</div>
      </div>
    );
  }
  
  if (type === 'error') {
    return (
      <div className="error-container">
        <div className="error-icon">!</div>
        <div className="error-message">{message}</div>
        <button className="retry-button" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }
  
  return null;
};

export default LoadingState;