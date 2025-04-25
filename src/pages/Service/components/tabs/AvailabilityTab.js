// src/pages/Service/components/tabs/AvailabilityTab.js
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import AvailabilityCalendar from '../AvailabilityCalendar';
import CTASection from '../CTASection';
import PolicyModal from '../../modals/PolicyModal';
import './AvailabilityTab.css';

/**
 * AvailabilityTab component that displays booking calendar and time slots
 * 
 * @param {Object} props - Component props
 * @param {string} props.businessName - Name of the business
 * @param {Function} props.onQuestionClick - Handler for question button click
 * @param {Function} props.onPolicyClick - Handler for policy button click
 * @returns {JSX.Element} Rendered component
 */
const AvailabilityTab = ({ businessName, onQuestionClick, onPolicyClick }) => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  
  /**
   * Handles time slot selection from the calendar component
   * @param {Object} bookingInfo - Selected date and time information
   */
  const handleTimeSlotSelect = useCallback((bookingInfo) => {
    setSelectedBooking(bookingInfo);
    // Log for debugging - remove in production
    console.log('Selected booking:', bookingInfo);
  }, []);
  
  /**
   * Handles booking confirmation
   */
  const handleBookingConfirm = useCallback(() => {
    if (!selectedBooking) return;
    
    // BACKEND INTEGRATION POINT:
    // This would send the booking request to your backend
    console.log('Confirming booking:', selectedBooking);
    
    // Show confirmation UI or redirect to confirmation page
    alert(`Your appointment has been scheduled for ${selectedBooking.date.toLocaleDateString()} at ${selectedBooking.time}`);
    
    // Reset selection
    setSelectedBooking(null);
  }, [selectedBooking]);
  
  /**
   * Opens the policy modal
   */
  const handleOpenPolicyModal = useCallback(() => {
    setIsPolicyModalOpen(true);
  }, []);
  
  /**
   * Closes the policy modal
   */
  const handleClosePolicyModal = useCallback(() => {
    setIsPolicyModalOpen(false);
  }, []);
  
  return (
    <div className="availability-tab" data-testid="availability-tab">
      <div className="availability-container">
        <AvailabilityCalendar 
          businessName={businessName}
          onTimeSlotSelect={handleTimeSlotSelect}
        />
        
        <section className="booking-policy-section">
          <h3>Booking Information</h3>
          <ul className="booking-policy-list">
            <li>Please arrive 10 minutes before your scheduled appointment</li>
            <li>Cancellations must be made at least 24 hours in advance</li>
            <li>Late arrivals may result in shortened service time</li>
          </ul>
          <button 
            className="view-full-policy-button"
            onClick={handleOpenPolicyModal}
            aria-label="View our complete booking policy"
          >
            View Full Booking Policy
          </button>
        </section>
      </div>
      
    
      
      {/* Policy Modal */}
      <PolicyModal 
        isOpen={isPolicyModalOpen}
        onClose={handleClosePolicyModal}
      />
    </div>
  );
};

AvailabilityTab.propTypes = {
  businessName: PropTypes.string.isRequired,
  onQuestionClick: PropTypes.func,
  onPolicyClick: PropTypes.func
};

AvailabilityTab.defaultProps = {
  onQuestionClick: () => {},
  onPolicyClick: () => {}
};

export default AvailabilityTab;