// src/pages/SearchPage/components/ResultsList/ResultsList.js
import React from 'react';
import ResultCard from '../ResultCard/ResultCard';
import './ResultsList.css';

/**
 * ResultsList Component
 * 
 * Displays a grid of ResultCard components based on search results
 */
const ResultsList = ({ results, onToggleFavorite }) => {
  if (!results || results.length === 0) {
    return (
      <div className="empty-results">
        <div className="empty-icon">🔍</div>
        <h2>No results found</h2>
        <p>Try adjusting your search criteria or filters to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="results-grid">
      {results.map(result => (
        <ResultCard 
          key={result.id} 
          result={result} 
          onToggleFavorite={onToggleFavorite} 
        />
      ))}
    </div>
  );
};

export default ResultsList;