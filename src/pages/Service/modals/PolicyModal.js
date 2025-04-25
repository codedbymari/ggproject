// src/pages/Service/modals/PolicyModal.js
import React from 'react';
import Modal from '../components/Modal';
import './PolicyModal.css';

const PolicyModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Booking Policy"
    >
      <div className="policy-content">
        <h4>Appointment Guidelines</h4>
        <p>Please arrive at least 10 minutes before your appointment. Cancellations must be made at least 24 hours in advance. Late arrivals may result in shortened service time or cancellation.</p>
        
        <h4>Payment Information</h4>
        <p>We accept all major credit cards, cash, and digital payments. A 50% deposit is required for services over $100.</p>
        
        <h4>Cancellation Policy</h4>
        <p>Cancellations made less than 24 hours before your appointment will be charged a 30% fee. No-shows will be charged the full service amount.</p>
        
        <h4>Special Requirements</h4>
        <p>If you have any special requirements or health concerns, please let us know at least 48 hours in advance so we can accommodate your needs.</p>
        
        <div className="policy-actions">
          <button 
            onClick={onClose} 
            className="acknowledge-button"
            aria-label="Close policy modal"
          >
            I Understand
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PolicyModal;