// src/pages/Service/components/ServicePageContent.js
import React, { useState } from 'react';
import { useServiceDetails } from '../context/ServiceDetailsProvider';
import ServiceHeader from './ServiceHeader';
import TabNavigation from './TabNavigation';
import ProfileTab from './tabs/ProfileTab';
import AvailabilityTab from './tabs/AvailabilityTab';
import PortfolioTab from './tabs/PortfolioTab';
import Reviews from './Reviews';
import LoadingStates from './LoadingStates';
import MessageModal from '../modals/MessageModal';
import QuestionModal from '../modals/QuestionModal';
import PolicyModal from '../modals/PolicyModal';

/**
 * ServicePageContent component with improved layout and spacing
 */
const ServicePageContent = () => {
  const { 
    serviceData, 
    loading, 
    error, 
    activeTab, 
    setActiveTab
  } = useServiceDetails();
  
  // State for modals
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  
  // Mock portfolio images - will be replaced with real data from backend
  const portfolioImages = [
    { url: 'https://source.unsplash.com/random/300x300?haircut', alt: 'Haircut service', caption: 'Professional haircut' },
    { url: 'https://source.unsplash.com/random/300x300?nails', alt: 'Nail service', caption: 'Manicure' },
    { url: 'https://source.unsplash.com/random/300x300?massage', alt: 'Massage service', caption: 'Relaxing massage' },
    { url: 'https://source.unsplash.com/random/300x300?facial', alt: 'Facial service', caption: 'Facial treatment' },
    { url: 'https://source.unsplash.com/random/300x300?haircolor', alt: 'Hair coloring', caption: 'Hair coloring service' },
    { url: 'https://source.unsplash.com/random/300x300?spa', alt: 'Spa treatment', caption: 'Spa treatment' },
  ];
  
  if (loading) {
    return <LoadingStates type="loading" />;
  }

  if (error || !serviceData) {
    return <LoadingStates 
      type="error" 
      message={error || 'Unable to load service information'} 
      onRetry={() => window.location.reload()}
    />;
  }

  // Extract data with fallbacks for better resilience
  const { businessInfo, serviceCategories = [], popularServices = [] } = serviceData || {};
  
  // Create fallback service categories if none exist
  const effectiveServiceCategories = serviceCategories.length > 0 ? serviceCategories : [
    {
      id: 1,
      name: "Services",
      subCategories: [
        {
          id: 101,
          name: "Standard Service",
          price: "Price on consultation",
          time: "Duration varies",
          description: "Please contact for more details about this service."
        }
      ]
    }
  ];
  
  // Create fallback popular services if none exist
  const effectivePopularServices = popularServices.length > 0 ? popularServices : [
    { id: 1, name: "Haircut & Styling", image: "https://source.unsplash.com/random/300x300?haircut" },
    { id: 2, name: "Color Treatment", image: "https://source.unsplash.com/random/300x300?haircolor" },
    { id: 3, name: "Hair Extensions", image: "https://source.unsplash.com/random/300x300?extensions" },
    { id: 4, name: "Blowout & Styling", image: "https://source.unsplash.com/random/300x300?blowout" }
  ];
  
  return (
    <div className="service-page-container">
      {/* Hero section with service header */}
      <section className="service-content-section">
        <ServiceHeader 
          businessInfo={businessInfo}
          popularServices={effectivePopularServices}
          onMessageClick={() => setIsMessageModalOpen(true)}
        />
      </section>

      {/* Tab navigation */}
      <section className="service-content-section">
        <TabNavigation 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </section>

      {/* Tab content */}
      <section className="service-content-section">
        {activeTab === 'profile' && (
          <ProfileTab 
            businessInfo={businessInfo}
            serviceCategories={effectiveServiceCategories}
            popularServices={effectivePopularServices}
            onQuestionClick={() => setIsQuestionModalOpen(true)}
            onPolicyClick={() => setIsPolicyModalOpen(true)}
          />
        )}

        {activeTab === 'availability' && (
          <AvailabilityTab businessName={businessInfo.name} />
        )}

        {activeTab === 'portfolio' && (
          <PortfolioTab 
            businessName={businessInfo.name}
            portfolioImages={portfolioImages}
          />
        )}
      </section>
      
      {/* Reviews section */}
      <section className="service-content-section">
        <div className="section-padding">
          <Reviews />
        </div>
      </section>
      
      {/* Modals */}
      <QuestionModal 
        isOpen={isQuestionModalOpen}
        onClose={() => setIsQuestionModalOpen(false)}
      />
      
      <PolicyModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
      />
      
      <MessageModal
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
      />
    </div>
  );
};

export default ServicePageContent;