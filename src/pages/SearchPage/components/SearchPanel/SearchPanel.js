// src/pages/SearchPage/components/SearchPanel/SearchPanel.js
import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaSlidersH, FaChevronDown } from 'react-icons/fa';
import FilterPanel from '../FilterPanel/FilterPanel';
import DatePicker from '../DatePicker/DatePicker';
import './SearchPanel.css';



const SearchPanel = ({
  searchTerm,
  setSearchTerm,
  locationTerm,
  setLocationTerm,
  selectedDate,
  setSelectedDate,
  showFilters,
  setShowFilters,
  showDatePicker,
  setShowDatePicker,
  filterOptions,
  setFilterOptions,
  activeSort,
  setActiveSort,
  filterPanelRef,
  datePanelRef,
  handleSearch,
  applyFilters
}) => {
  return (
    <div className="search-panel">
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-field">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for services"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="search-field">
            <FaMapMarkerAlt className="search-icon" />
            <input
              type="text"
              placeholder="Where?"
              value={locationTerm}
              onChange={(e) => setLocationTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <button type="submit" className="searchpage-button">
            Search
          </button>
        </form>
        
        <div className="search-filters">
          {/* Date selection  */}
          <div style={{ position: 'relative' }}>
            <button 
              className="filter-btn date-btn" 
              onClick={() => {
                setShowDatePicker(!showDatePicker);
                setShowFilters(false);
              }}
              aria-expanded={showDatePicker}
            >
              <FaCalendarAlt className="filter-icon" />
              <span>{selectedDate}</span>
              <FaChevronDown className={`dropdown-icon ${showDatePicker ? 'open' : ''}`} />
            </button>
             
               {/* Date picker*/}
               {showDatePicker && (
              <DatePicker 
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                onClose={() => setShowDatePicker(false)}
                datePanelRef={datePanelRef}
              />
            )}
          </div>
          
            {/* Filter and sorting */}
            <div style={{ position: 'relative' }}>
            <button 
              className="filter-btn filter-sort-btn" 
              onClick={() => {
                setShowFilters(!showFilters);
                setShowDatePicker(false);
              }}
              aria-expanded={showFilters}
            >
              <FaSlidersH className="filter-icon" />
              <span>Filter & Sort</span>
              <FaChevronDown className={`dropdown-icon ${showFilters ? 'open' : ''}`} />
            </button>
        
     {showFilters && (
              <FilterPanel 
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
                activeSort={activeSort}
                setActiveSort={setActiveSort}
                onClose={() => setShowFilters(false)}
                onApply={applyFilters}
                filterPanelRef={filterPanelRef}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
