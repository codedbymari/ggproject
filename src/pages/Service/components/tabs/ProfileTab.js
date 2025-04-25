// src/pages/Service/components/tabs/ProfileTab.js
import React, { useEffect } from 'react';
import AboutSection from '../AboutSection';
import CredentialsSection from '../CredentialsSection';
import SocialMediaSection from '../SocialMediaSection';
import PriceList from '../PriceList';
import PopularServices from '../PopularServices';
import CTASection from '../CTASection';

const ProfileTab = ({ 
  businessInfo, 
  serviceCategories, 
  popularServices,
  onQuestionClick,
  onPolicyClick
}) => {
  // Add debugging to check the data
  useEffect(() => {
    console.log('ProfileTab rendered with popularServices:', popularServices);
  }, [popularServices]);

  // Ensure popularServices is valid before rendering
  const hasValidServices = Array.isArray(popularServices) && popularServices.length > 0;

  return (
    <div className="profile-tab-content">
      <AboutSection description={businessInfo.description} />
      <CredentialsSection credentials={businessInfo.credentials} />
      <SocialMediaSection socialMedia={businessInfo.socialMedia} />
      <PriceList serviceCategories={serviceCategories} />
      
      {/* Conditional rendering with fallback */}
      {hasValidServices ? (
        <PopularServices services={popularServices} />
      ) : (
        <div className="debug-message" style={{padding: '20px', margin: '20px 0', backgroundColor: '#f8f9fa', borderRadius: '8px', color: '#666'}}>
          <p>Popular services data is not available or properly formatted.</p>
        </div>
      )}
      
      <CTASection 
        businessName={businessInfo.name}
        onQuestionClick={onQuestionClick}
        onPolicyClick={onPolicyClick}
      />
    </div>
  );
};

export default ProfileTab;