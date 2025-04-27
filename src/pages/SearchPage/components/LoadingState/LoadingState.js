import React from 'react';
import './LoadingState.css';

/**
 *  a loading animation while content is being fetched
 */
const LoadingState = () => {
  return (
    <div className="loading-state">
      <div className="loading-cards">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="loading-card">
            <div className="loading-image"></div>
            <div className="loading-content">
              <div className="loading-title"></div>
              <div className="loading-address"></div>
              <div className="loading-rating"></div>
              <div className="loading-services">
                <div className="loading-service"></div>
                <div className="loading-service"></div>
              </div>
              <div className="loading-actions">
                <div className="loading-button-primary"></div>
                <div className="loading-button-secondary"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingState;