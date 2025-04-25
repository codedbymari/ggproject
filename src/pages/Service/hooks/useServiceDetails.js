// src/pages/Service/hooks/useServiceDetails.js
import { useState, useCallback, useContext } from 'react';
import { ServiceDetailsContext } from '../context/ServiceDetailsProvider';

export const useServiceDetails = () => {
  // Get context data
  const context = useContext(ServiceDetailsContext);
  
  if (!context) {
    throw new Error('useServiceDetails must be used within a ServiceDetailsProvider');
  }
  
  // Local state for expanded categories
  const [expandedCategories, setExpandedCategories] = useState({});
  
  // Toggle category expansion
  const toggleCategory = useCallback((categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  }, []);
  
  return {
    ...context,
    expandedCategories,
    toggleCategory
  };
};