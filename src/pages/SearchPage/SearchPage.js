// src/pages/SearchPage/SearchPage.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaList, FaMap, FaChevronRight, FaArrowLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ResultsList from './components/ResultsList/ResultsList';
import MapView from './components/MapView/MapView';
import ViewToggle from './components/ViewToggle/ViewToggle';
import LoadingState from './components/LoadingState/LoadingState';
import { dummyData } from './utils/dummyData';
import './SearchPage.css';


const SearchPage = () => {
  // Get category from URL 
  const { category: urlCategory } = useParams();
  
  // State for search and results
  const [category, setCategory] = useState(urlCategory || 'HAIR');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('London');
  const [searchResults, setSearchResults] = useState([]);
  
  // UI 
  const [viewMode, setViewMode] = useState('split'); // 'split', 'list', or 'map'
  const [selectedDate, setSelectedDate] = useState('Any Date');
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [activeSort, setActiveSort] = useState('recommended');
  const [resultsCount, setResultsCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Filter options 
  const [filterOptions, setFilterOptions] = useState({
    priceRange: [0, 500],
    rating: 0,
    availability: 'any',
    services: []
  });
  
  // Refs for handling outside clicks
  const filterPanelRef = useRef(null);
  const datePanelRef = useRef(null);
  const resultsContainerRef = useRef(null);

  // Set initial view mode based on screen size and detect mobile
  useEffect(() => {
    const handleResize = () => {
      const mobileBreakpoint = window.innerWidth < 768;
      setIsMobile(mobileBreakpoint);
      
      if (mobileBreakpoint) {
        // Default to list view on mobile
        setViewMode('list');
      } else {
        // Use split view on larger screens
        setViewMode('split');
      }
    };
    
    // Set initial view mode
    handleResize();
    
    // Update on resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update category when URL changes
  useEffect(() => {
    if (urlCategory && urlCategory !== category) {
      setCategory(urlCategory);
    }
  }, [urlCategory]);


  useEffect(() => {
    function handleClickOutside(event) {
      if (filterPanelRef.current && !filterPanelRef.current.contains(event.target) && 
          !event.target.closest('.filter-sort-btn')) {
        setShowFilters(false);
      }
      if (datePanelRef.current && !datePanelRef.current.contains(event.target) && 
          !event.target.closest('.date-btn')) {
        setShowDatePicker(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const categoryResults = dummyData[category] || [];
        setSearchResults(categoryResults);
        setResultsCount(categoryResults.length);
      } catch (error) {
        console.error("Error fetching results:", error);
        setSearchResults([]);
        setResultsCount(0);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSearchResults();
  }, [category]);


  const toggleFavorite = useCallback((id) => {
    setSearchResults(prevResults => 
      prevResults.map(item => 
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  }, []);


  const handleSearch = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const filteredResults = dummyData[category]?.filter(item => {
        const matchesSearch = searchTerm ? 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.services.some(service => service.name.toLowerCase().includes(searchTerm.toLowerCase())) : 
          true;
          
        const matchesLocation = locationTerm ? 
          item.address.toLowerCase().includes(locationTerm.toLowerCase()) : 
          true;
          
        return matchesSearch && matchesLocation;
      }) || [];
      
      setSearchResults(filteredResults);
      setResultsCount(filteredResults.length);
      setLoading(false);
    }, 600);
  }, [searchTerm, locationTerm, category]);


  const applyFilters = useCallback(() => {
    setLoading(true);
    
    setTimeout(() => {
      const filteredResults = dummyData[category]?.filter(item => {
       
        // Filter by rating
        if (item.rating < filterOptions.rating) {
          return false;
        }
        
        // Filter by price range
        const hasPriceInRange = item.services.some(
          service => service.price >= filterOptions.priceRange[0] && 
                    service.price <= filterOptions.priceRange[1]
        );
        
        if (!hasPriceInRange) {
          return false;
        }
        
        // Filter by selected services
        if (filterOptions.services.length > 0) {
          const hasSelectedService = item.services.some(
            service => filterOptions.services.includes(service.name)
          );
          
          if (!hasSelectedService) {
            return false;
          }
        }
        
        return true;
      }) || [];
      
      // Apply sorting
      let sortedResults = [...filteredResults];
      
      switch (activeSort) {
        case 'price: low to high':
          sortedResults.sort((a, b) => {
            const aMinPrice = Math.min(...a.services.map(s => s.price));
            const bMinPrice = Math.min(...b.services.map(s => s.price));
            return aMinPrice - bMinPrice;
          });
          break;
          
        case 'price: high to low':
          sortedResults.sort((a, b) => {
            const aMaxPrice = Math.max(...a.services.map(s => s.price));
            const bMaxPrice = Math.max(...b.services.map(s => s.price));
            return bMaxPrice - aMaxPrice;
          });
          break;
          
        case 'rating':
          sortedResults.sort((a, b) => b.rating - a.rating);
          break;
          
        case 'distance':
          sortedResults.sort((a, b) => {
            const aDistance = parseFloat(a.distance);
            const bDistance = parseFloat(b.distance);
            return aDistance - bDistance;
          });
          break;
          
        default: 
          break;
      }
      
      setSearchResults(sortedResults);
      setResultsCount(sortedResults.length);
      setLoading(false);
      setShowFilters(false);
    }, 600);
  }, [category, filterOptions, activeSort]);

  /**
   * Reset all filters and search terms
   */
  const resetAllFilters = useCallback(() => {
    setSearchTerm('');
    setFilterOptions({
      priceRange: [0, 500],
      rating: 0,
      availability: 'any',
      services: []
    });
    setActiveSort('recommended');
    setSelectedDate('Any Date');
    
    // Refetch results for current category
    setLoading(true);
    setTimeout(() => {
      setSearchResults(dummyData[category] || []);
      setResultsCount(dummyData[category]?.length || 0);
      setLoading(false);
    }, 300);
  }, [category]);

  /**
   * Toggle between view modes (split, list, map)
   */
  const handleViewModeToggle = useCallback((mode) => {
    setViewMode(mode);
  }, []);

  /**
   * Check if any filters are active
   */
  const hasActiveFilters = 
    filterOptions.rating > 0 || 
    filterOptions.priceRange[0] > 0 || 
    filterOptions.priceRange[1] < 500 || 
    filterOptions.services.length > 0 || 
    activeSort !== 'recommended' || 
    selectedDate !== 'Any Date';

  // Determine if we should hide the header and search panel (mobile map view)
  const shouldHideHeaderAndSearch = isMobile && viewMode === 'map';

  return (
    <div className={`search-page ${shouldHideHeaderAndSearch ? 'map-fullscreen-mode' : ''}`}>
      {!shouldHideHeaderAndSearch && <Header />}
      
      {!shouldHideHeaderAndSearch && (
        <SearchPanel 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locationTerm={locationTerm}
          setLocationTerm={setLocationTerm}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          filterPanelRef={filterPanelRef}
          datePanelRef={datePanelRef}
          handleSearch={handleSearch}
          applyFilters={applyFilters}
        />
      )}

      <main className={`content-container ${shouldHideHeaderAndSearch ? 'fullscreen' : ''}`}>
        {!shouldHideHeaderAndSearch && (
          <div className="results-header">
            <div className="results-header-content">
              <div className="results-title">
                <h1>{locationTerm}: {searchResults.length > 0 ? `${searchResults.length} of ${resultsCount}` : '0'} {category.toLowerCase()}</h1>
                
                <ViewToggle 
                  viewMode={viewMode} 
                  onToggleView={handleViewModeToggle} 
                />
              </div>
              
              {/* Active filters display */}
              {hasActiveFilters && (
                <div className="active-filters">
                  <div className="filter-tags">
                    {filterOptions.rating > 0 && (
                      <div className="filter-tag">
                        {filterOptions.rating}+ Stars
                        <button className="remove-tag" onClick={() => setFilterOptions({...filterOptions, rating: 0})}>×</button>
                      </div>
                    )}
                    
                    {(filterOptions.priceRange[0] > 0 || filterOptions.priceRange[1] < 500) && (
                      <div className="filter-tag">
                        €{filterOptions.priceRange[0]} - €{filterOptions.priceRange[1]}
                        <button className="remove-tag" onClick={() => setFilterOptions({...filterOptions, priceRange: [0, 500]})}>×</button>
                      </div>
                    )}
                    
                    {activeSort !== 'recommended' && (
                      <div className="filter-tag">
                        Sort: {activeSort}
                        <button className="remove-tag" onClick={() => setActiveSort('recommended')}>×</button>
                      </div>
                    )}
                    
                    {selectedDate !== 'Any Date' && (
                      <div className="filter-tag">
                        Date: {selectedDate}
                        <button className="remove-tag" onClick={() => setSelectedDate('Any Date')}>×</button>
                      </div>
                    )}
                    
                    {filterOptions.services.map(service => (
                      <div key={service} className="filter-tag">
                        {service}
                        <button 
                          className="remove-tag" 
                          onClick={() => setFilterOptions({
                            ...filterOptions, 
                            services: filterOptions.services.filter(s => s !== service)
                          })}
                        >×</button>
                      </div>
                    ))}
                    
                    <button className="clear-all-filters" onClick={resetAllFilters}>
                      Clear All
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className={`content-layout ${viewMode}`}>
          <div className="results-container" ref={resultsContainerRef}>
            {loading ? (
              <LoadingState />
            ) : (
              <ResultsList 
                results={searchResults} 
                onToggleFavorite={toggleFavorite} 
              />
            )}
            
            <div className="pagination-controls">
              <button className="pagination-next">
                <span>Next page</span>
                <FaChevronRight />
              </button>
            </div>
          </div>
          
          <div className={`map-container ${shouldHideHeaderAndSearch ? 'fullscreen' : ''}`}>
            {shouldHideHeaderAndSearch && (
              <div className="map-header">
                <button 
                  className="back-to-list" 
                  onClick={() => setViewMode('list')}
                  aria-label="Back to list view"
                >
                  <FaArrowLeft />
                  <span>Back</span>
                </button>
                <div className="map-location">{locationTerm}</div>
              </div>
            )}
            <MapView results={searchResults} />
          </div>
        </div>
        
        {/* Mobile view toggle button */}
        <button 
          className="mobile-view-toggle"
          onClick={() => setViewMode(viewMode === 'map' ? 'list' : 'map')}
          aria-label={`Switch to ${viewMode === 'map' ? 'list' : 'map'} view`}
        >
          {viewMode === 'map' ? (
            <>
              <FaList />
              <span>Show List</span>
            </>
          ) : (
            <>
              <FaMap />
              <span>Show Map</span>
            </>
          )}
        </button>
      </main>

      {!shouldHideHeaderAndSearch && <Footer />}
    </div>
  );
};

export default SearchPage;