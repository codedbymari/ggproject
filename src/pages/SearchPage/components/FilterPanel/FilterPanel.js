// src/pages/SearchPage/components/FilterPanel/FilterPanel.js
import React from 'react';
import { FaTimes, FaCheck, FaStar } from 'react-icons/fa';
import './FilterPanel.css';

/**
 * FilterPanel Component
 * 
 * Provides filtering and sorting options for search results
 */
const FilterPanel = ({ 
  filterOptions, 
  setFilterOptions, 
  activeSort, 
  setActiveSort, 
  onClose, 
  onApply, 
  filterPanelRef 
}) => {
  const resetFilters = () => {
    setFilterOptions({
      priceRange: [0, 500],
      rating: 0,
      availability: 'any',
      services: []
    });
    setActiveSort('recommended');
  };

  return (
    <div className="filter-panel" ref={filterPanelRef}>
      <div className="filter-header">
        <h3>Filters & Sort</h3>
        <button className="close-btn" onClick={onClose} aria-label="Close filters">
          <FaTimes />
        </button>
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
              value={filterOptions.priceRange[0]} 
              onChange={(e) => setFilterOptions({
                ...filterOptions, 
                priceRange: [parseInt(e.target.value), filterOptions.priceRange[1]]
              })} 
              className="range-slider range-slider-min"
            />
            <input 
              type="range" 
              min="0" 
              max="500" 
              value={filterOptions.priceRange[1]} 
              onChange={(e) => setFilterOptions({
                ...filterOptions, 
                priceRange: [filterOptions.priceRange[0], parseInt(e.target.value)]
              })} 
              className="range-slider range-slider-max"
            />
            <div className="range-slider-track"></div>
          </div>
          <div className="price-range-values">
            <span>€{filterOptions.priceRange[0]}</span>
            <span>€{filterOptions.priceRange[1]}</span>
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
              className={`star-btn ${filterOptions.rating >= star ? 'active' : ''}`}
              onClick={() => setFilterOptions({...filterOptions, rating: star})}
              aria-label={`${star} stars`}
            >
              <FaStar />
            </button>
          ))}
        </div>
      </div>
      
      {/* Service type checkboxes */}
      <div className="filter-section">
        <h4>Services</h4>
        <div className="service-checkboxes">
          {['Wig Installation', 'Braids', 'Haircut', 'Color', 'Treatment'].map(service => (
            <label key={service} className="service-checkbox">
              <input 
                type="checkbox" 
                checked={filterOptions.services.includes(service)}
                onChange={() => {
                  const updatedServices = filterOptions.services.includes(service)
                    ? filterOptions.services.filter(s => s !== service)
                    : [...filterOptions.services, service];
                  setFilterOptions({...filterOptions, services: updatedServices});
                }}
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Filter action buttons */}
      <div className="filter-actions">
        <button className="reset-btn" onClick={resetFilters}>
          Reset
        </button>
        <button className="apply-btn" onClick={onApply}>Apply Filters</button>
      </div>
    </div>
  );
};

export default FilterPanel;