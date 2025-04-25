// src/pages/Service/context/ServiceDetailsProvider.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchServiceById, transformServiceData } from '../utils/serviceDataUtils';

export const ServiceDetailsContext = createContext();

export const ServiceDetailsProvider = ({ children }) => {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [expandedCategories, setExpandedCategories] = useState({});

  // Load service data when ID changes
  useEffect(() => {
    const loadServiceData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Fetch the service data by ID
        const rawData = await fetchServiceById(parseInt(id));
        
        if (!rawData) {
          setError('Service not found');
          return;
        }
        
        // Transform the data to the format expected by ServicePage
        const transformedData = transformServiceData(rawData);
        setServiceData(transformedData);
        
        // Initialize expanded state for first category
        if (transformedData?.serviceCategories?.length > 0) {
          setExpandedCategories({
            [transformedData.serviceCategories[0].id]: true
          });
        }
        
        // Debug log
        console.log('Transformed service data:', transformedData);
      } catch (err) {
        console.error('Error loading service:', err);
        setError('Failed to load service details');
      } finally {
        setLoading(false);
      }
    };
    
    loadServiceData();
  }, [id]);

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const contextValue = {
    serviceData,
    loading,
    error,
    activeTab,
    setActiveTab,
    expandedCategories,
    toggleCategory
  };

  return (
    <ServiceDetailsContext.Provider value={contextValue}>
      {children}
    </ServiceDetailsContext.Provider>
  );
};

// Export the hook directly from this file
export const useServiceDetails = () => {
  const context = useContext(ServiceDetailsContext);
  if (!context) {
    throw new Error('useServiceDetails must be used within a ServiceDetailsProvider');
  }
  return context;
};