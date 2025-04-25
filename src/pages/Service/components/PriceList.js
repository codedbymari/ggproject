import React from 'react';
import { useServiceDetails } from '../context/ServiceDetailsProvider';
import './PriceList.css';

/**
 * PriceList component - Mobile-first design with elegant desktop scaling
 * Displays service categories and prices in an accessible, user-friendly format
 * 
 * @param {Object[]} serviceCategories - Array of service categories to display
 * @returns {JSX.Element} Rendered component
 */
const PriceList = ({ serviceCategories }) => {
  // Get context data and loading states
  const { expandedCategories, toggleCategory, loading, error } = useServiceDetails();
  
  // Show loading state
  if (loading) {
    return (
      <div className="price-list-section">
        <h2>Price List</h2>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading service information...</p>
        </div>
      </div>
    );
  }
  
  // Show error state
  if (error) {
    return (
      <div className="price-list-section">
        <h2>Price List</h2>
        <div className="error-message">
          <p>Unable to load service information. Please try again later.</p>
        </div>
      </div>
    );
  }
  
  // Show empty state if no data
  if (!serviceCategories || !Array.isArray(serviceCategories) || serviceCategories.length === 0) {
    return (
      <div className="price-list-section">
        <h2>Price List</h2>
        <div className="price-list-container">
          <div className="no-services-message">
            No service information is currently available.
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="price-list-section">
      <h2>Price List</h2>
      
      <div className="price-list-container">
        {serviceCategories.map((category) => (
          <div key={category.id} className="category-container">
            <button 
              className={`category-header ${expandedCategories[category.id] ? 'expanded' : ''}`}
              onClick={() => toggleCategory(category.id)}
              aria-expanded={expandedCategories[category.id]}
              aria-controls={`subcategory-${category.id}`}
            >
              <span className="category-name">{category.name}</span>
              <span className="view-prices">
                View Prices
                <span className="chevron-icon" aria-hidden="true">
                  {expandedCategories[category.id] ? '▲' : '▼'}
                </span>
              </span>
            </button>

            {expandedCategories[category.id] && (
              <div id={`subcategory-${category.id}`} className="subcategories">
                {category.subCategories && category.subCategories.length > 0 ? (
                  category.subCategories.map((subCategory) => (
                    <div key={subCategory.id} className="subcategory-item">
                      <div className="subcategory-content">
                        <div className="subcategory-main">
                          <div className="subcategory-name">{subCategory.name}</div>
                          <div className="subcategory-meta">
                            <span className="subcategory-price">{subCategory.price}</span>
                            <span className="subcategory-time">{subCategory.time}</span>
                          </div>
                          <div className="subcategory-description">
                            {subCategory.description || 'No description available'}
                          </div>
                        </div>
                        <button className="book-button">Book</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-subcategories-message">
                    No services available in this category.
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;