// src/pages/Service/utils/serviceDataUtils.js
import { dummyData } from '../../SearchPage/utils/dummyData';

/**
 * Fetches a specific service by ID from the available data
 * This will be replaced with actual API calls to MongoDB later
 * 
 * @param {string|number} serviceId - The ID of the service to fetch
 * @returns {Promise} - Promise that resolves to the service data or null if not found
 */
export const fetchServiceById = (serviceId) => {
  return new Promise((resolve) => {
    // Convert ID to number if it's a string
    const id = typeof serviceId === 'string' ? parseInt(serviceId) : serviceId;
    
    // Search through all service categories
    let foundService = null;
    
    // Look through all categories in the dummy data
    Object.values(dummyData).forEach(categoryServices => {
      const service = categoryServices.find(service => service.id === id);
      if (service) {
        foundService = service;
      }
    });
    
    // Simulate API delay
    setTimeout(() => {
      resolve(foundService);
    }, 300);
  });
};

/**
 * Transforms search result data to match the format expected by ServicePage
 * This adapter pattern allows for consistent data structure between different sources
 * 
 * @param {Object} serviceData - Raw service data from search results
 * @returns {Object} - Formatted data for the service page
 */
// src/pages/Service/utils/serviceDataUtils.js
// src/pages/Service/utils/serviceDataUtils.js
export const transformServiceData = (serviceData) => {
  if (!serviceData) return null;
  
  // Generate fictional social media handles based on business name
  const generateSocialHandles = (name) => {
    const handleBase = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    return {
      instagram: `@${handleBase}_beauty`,
      facebook: `facebook.com/${handleBase}.beauty`,
      twitter: `@${handleBase}_style`
    };
  };
  
  const socialMedia = serviceData.socialMedia || generateSocialHandles(serviceData.name);
  
  // Ensure services exists and is an array
  const services = Array.isArray(serviceData.services) ? serviceData.services : [];
  
  // Transform the data to match the expected format for the ServicePage
  return {
    businessInfo: {
      name: serviceData.name || 'Beauty Service',
      location: serviceData.address || 'Location available on request',
      rating: serviceData.rating || 4.5,
      reviews: serviceData.reviews || 0,
      phone: serviceData.phone || "Contact for details",
      description: serviceData.description || 
        "This professional beauty service provider offers quality treatments in a welcoming environment. Contact for more information about their services and availability.",
      socialMedia: socialMedia,
      credentials: serviceData.credentials || ["Professional Service Provider"],
      contact: {
        phone: serviceData.phone || "Contact for details",
        email: serviceData.email || "info@glamorgram.co.uk"
      }
    },
    // This is the critical part - create a proper serviceCategories structure
    serviceCategories: [
      {
        id: 1,
        name: "Popular Services",
        subCategories: services.map((service, index) => ({
          id: 100 + index,
          name: service.name || `Service ${index + 1}`,
          price: service.price ? `€${service.price}` : "Price on consultation",
          time: service.time || "Duration varies",
          description: service.description || "Please contact for more details about this service."
        }))
      }
    ],
    popularServices: services.map((service, index) => ({
      id: index + 1,
      name: service.name || `Service ${index + 1}`,
      image: service.image || serviceData.image || "/images/placeholder.jpg"
    }))
  };
};