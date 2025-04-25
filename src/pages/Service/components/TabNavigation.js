// src/pages/Service/components/TabNavigation.jsx
import React, { useRef, useEffect } from 'react';
import './TabNavigation.css';

const TabNavigation = ({ 
  activeTab, 
  onTabChange,
  tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'availability', label: 'Availability' },
    { id: 'portfolio', label: 'Portfolio' }
  ],
  autoCenterActive = true,
  showIcons = false
}) => {
  const tabsRef = useRef(null);
  const activeTabRef = useRef(null);
  
  // Center the active tab in the scrollable container
  useEffect(() => {
    if (autoCenterActive && tabsRef.current && activeTabRef.current) {
      const container = tabsRef.current;
      const activeTabElement = activeTabRef.current;
      
      // Calculate the position to center the active tab
      const scrollLeft = activeTabElement.offsetLeft - 
        (container.offsetWidth / 2) + 
        (activeTabElement.offsetWidth / 2);
      
      // Smooth scroll to the position
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeTab, autoCenterActive]);
  
  // Get icon for tab based on tab ID
  const getTabIcon = (tabId) => {
    switch(tabId) {
      case 'profile':
        return 'fas fa-user';
      case 'availability':
        return 'far fa-calendar-alt';
      case 'portfolio':
        return 'fas fa-images';
      default:
        return 'fas fa-circle';
    }
  };
  
  return (
    <div 
      className={`tab-navigation ${autoCenterActive ? 'auto-center' : ''}`}
      ref={tabsRef}
      role="tablist"
      aria-label="Service navigation"
    >
      {tabs.map(tab => (
        <button 
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
          ref={activeTab === tab.id ? activeTabRef : null}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`${tab.id}-panel`}
          id={`${tab.id}-tab`}
        >
          {showIcons && (
            <i className={`tab-button-icon ${getTabIcon(tab.id)}`} aria-hidden="true"></i>
          )}
          {tab.label}
          {tab.badgeCount > 0 && (
            <span className="tab-badge">{tab.badgeCount}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;