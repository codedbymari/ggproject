import React from 'react';
import { FaList, FaMap, FaColumns } from 'react-icons/fa';
import './ViewToggle.css';

/* Allows users to switch between list, map, and split views
 */
const ViewToggle = ({ viewMode, onToggleView }) => {
  return (
    <div className="view-toggle">
      <button 
        className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
        onClick={() => onToggleView('list')}
        aria-label="List view"
        aria-pressed={viewMode === 'list'}
      >
        <FaList />
      </button>
      <button 
        className={`toggle-btn ${viewMode === 'split' ? 'active' : ''}`}
        onClick={() => onToggleView('split')}
        aria-label="Split view"
        aria-pressed={viewMode === 'split'}
      >
        <FaColumns />
      </button>
      <button 
        className={`toggle-btn ${viewMode === 'map' ? 'active' : ''}`}
        onClick={() => onToggleView('map')}
        aria-label="Map view"
        aria-pressed={viewMode === 'map'}
      >
        <FaMap />
      </button>
    </div>
  );
};

export default ViewToggle;