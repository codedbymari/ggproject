// src/pages/Service/modals/MessageModal.js
import React, { useState } from 'react';
import Modal from '../components/Modal';
import './MessageModal.css'; // Make sure to import the CSS

const MessageModal = ({ isOpen, onClose }) => {
  const [messageForm, setMessageForm] = useState({ email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // BACKEND INTEGRATION POINT:
      // This would send the message to your backend API
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 800));
      
      console.log('Message submitted:', messageForm);
      alert('Your message has been sent!');
      setMessageForm({ email: '', message: '' });
      onClose();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleMessageFormChange = (e) => {
    const { name, value } = e.target;
    setMessageForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Send a Message"
    >
      <form onSubmit={handleMessageSubmit} className="message-form">
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={messageForm.email}
            onChange={handleMessageFormChange}
            placeholder="your.email@example.com"
            required
            aria-required="true"
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={messageForm.message}
            onChange={handleMessageFormChange}
            placeholder="Type your message here..."
            required
            aria-required="true"
            rows="4"
            disabled={isSubmitting}
          />
        </div>
        <div className="form-actions">
          <button 
            type="button" 
            className="cancel-button" 
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default MessageModal;