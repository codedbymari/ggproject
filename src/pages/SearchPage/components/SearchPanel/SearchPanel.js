import React, { useRef, useEffect } from 'react';
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
  handleSearch,
  applyFilters
}) => {
  const filterButtonRef = useRef(null);
  const dateButtonRef = useRef(null);
  const filterPanelRef = useRef(null);
  const datePanelRef = useRef(null);

  // Close panels when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showFilters && 
          filterPanelRef.current && 
          !filterPanelRef.current.contains(event.target) &&
          !filterButtonRef.current.contains(event.target)) {
        setShowFilters(false);
      }
      
      if (showDatePicker && 
          datePanelRef.current && 
          !datePanelRef.current.contains(event.target) &&
          !dateButtonRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilters, showDatePicker, setShowFilters, setShowDatePicker]);

  // Handle filter apply
  const handleApplyFilters = () => {
    applyFilters();
    setShowFilters(false);
  };

  // Handle date selection
  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

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
          {/* Date selection */}
          <div className="dropdown-container">
            <button 
              ref={dateButtonRef}
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
            
            {/* DatePicker rendered conditionally */}
            {showDatePicker && (
              <DatePicker 
                selectedDate={selectedDate}
                setSelectedDate={handleDateSelection}
                onClose={() => setShowDatePicker(false)}
                datePanelRef={datePanelRef}
              />
            )}
          </div>
          
          {/* Filter and sorting */}
          <div className="dropdown-container">
            <button 
              ref={filterButtonRef}
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
            
            {/* FilterPanel rendered conditionally */}
            {showFilters && (
              <FilterPanel 
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
                activeSort={activeSort}
                setActiveSort={setActiveSort}
                onClose={() => setShowFilters(false)}
                onApply={handleApplyFilters}
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