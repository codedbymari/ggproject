import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaCheck, FaStar } from 'react-icons/fa';
import './FilterPanel.css';

const FilterPanel = ({ 
  filterOptions, 
  setFilterOptions, 
  activeSort, 
  setActiveSort, 
  onClose, 
  onApply, 
  filterPanelRef 
}) => {
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const localFilterPanelRef = useRef(null);

  useEffect(() => {
    const calculatePosition = () => {
      const buttonElement = document.querySelector('.filter-sort-btn');
      if (buttonElement && window.innerWidth > 768) {
        const rect = buttonElement.getBoundingClientRect();
        setPosition({
          top: rect.bottom + window.scrollY,
          right: window.innerWidth - (rect.right + window.scrollX)
        });
      }
      
      setIsMobile(window.innerWidth <= 768);
    };

    calculatePosition();
    window.addEventListener('resize', calculatePosition);
    return () => window.removeEventListener('resize', calculatePosition);
  }, []);

  const resetFilters = () => {
    const defaultFilterOptions = {
      priceRange: [0, 500],
      rating: 0,
      availability: 'any'
    };
    
    setFilterOptions(prevFilters => ({
      ...prevFilters,
      ...defaultFilterOptions
    }));
    
    if (setActiveSort) {
      setActiveSort('recommended');
    }
  };

  const filterPanelContent = (
    <div 
      className="filter-panel" 
      ref={(node) => {
        if (filterPanelRef) filterPanelRef.current = node;
        localFilterPanelRef.current = node;
      }}
      style={window.innerWidth > 768 ? {
        top: `${position.top}px`,
        right: `${position.right}px`
      } : {}}
    >
      <div className="filter-header">
        <h3>{isMobile ? 'Filters & Sort' : 'Filters & Sort'}</h3>
        <div className="header-buttons">
          <button className="close-btn" onClick={onClose} aria-label="Close filters">
            <FaTimes />
          </button>
        </div>
      </div>
      
      {/* Sort options */}
      <div className="filter-section">
        <h4>Sort by</h4>
        <div className="sort-options">
          {['recommended', 'price: low to high', 'price: high to low', 'rating', 'distance'].map(option => (
            <button 
              key={option}
              className={`sort-option ${activeSort === option ? 'active' : ''}`}
              onClick={() => setActiveSort(option)}
            >
              {option}
              {activeSort === option && <FaCheck className="check-icon" />}
            </button>
          ))}
        </div>
      </div>
      
      {/* Price range slider */}
      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-slider">
          <div className="range-slider-container">
            <input 
              type="range" 
              min="0" 
              max="500" 
              value={filterOptions?.priceRange?.[0] || 0} 
              onChange={(e) => setFilterOptions(prev => ({
                ...prev, 
                priceRange: [parseInt(e.target.value), prev?.priceRange?.[1] || 500]
              }))} 
              className="range-slider range-slider-min"
            />
            <input 
              type="range" 
              min="0" 
              max="500" 
              value={filterOptions?.priceRange?.[1] || 500} 
              onChange={(e) => setFilterOptions(prev => ({
                ...prev, 
                priceRange: [prev?.priceRange?.[0] || 0, parseInt(e.target.value)]
              }))} 
              className="range-slider range-slider-max"
            />
            <div className="range-slider-track"></div>
          </div>
          <div className="price-range-values">
            <span>€{filterOptions?.priceRange?.[0] || 0}</span>
            <span>€{filterOptions?.priceRange?.[1] || 500}</span>
          </div>
        </div>
      </div>
      
      {/* Rating filter */}
      <div className="filter-section">
        <h4>Minimum Rating</h4>
        <div className="rating-selector">
          {[1, 2, 3, 4, 5].map(star => (
            <button 
              key={star}
              className={`star-btn ${(filterOptions?.rating || 0) >= star ? 'active' : ''}`}
              onClick={() => setFilterOptions(prev => ({...prev, rating: star}))}
              aria-label={`${star} stars`}
            >
              <FaStar />
            </button>
          ))}
        </div>
      </div>
      
      {/* Filter action buttons */}
      <div className="filter-actions">
        <button className="reset-filter-btn" onClick={resetFilters}>
          {isMobile ? 'Reset' : 'Reset Filters'}
        </button>
        <button className="apply-btn" onClick={onApply}>Apply Filters</button>
      </div>
    </div>
  );

  return createPortal(
    filterPanelContent,
    document.body
  );
};

export default FilterPanel;