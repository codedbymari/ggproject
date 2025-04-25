// src/pages/Service/modals/QuestionModal.js
import React, { useState } from 'react';
import Modal from '../components/Modal';

const QuestionModal = ({ isOpen, onClose }) => {
  const [question, setQuestion] = useState('');
  
  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    
    // BACKEND INTEGRATION POINT:
    // This would send the question to your backend API
    
    console.log('Question submitted:', question);
    alert('Your question has been sent!');
    setQuestion('');
    onClose();
  };
  
  return (
    <Modal 
      isOpen={isOpen}
      onClose={onClose}
      title="Ask a Question"
    >
      <form onSubmit={handleQuestionSubmit} className="question-form">
        <div className="form-group">
          <label htmlFor="question">Your Question:</label>
          <textarea 
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            required
            rows="4"
          />
        </div>
        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Send Question
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default QuestionModal;