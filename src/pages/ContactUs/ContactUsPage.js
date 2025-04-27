import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ContactUsPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Technical Support',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      //  put API call here 
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setIsSubmitting(false);
        
        // Reset form after showing success message
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: 'Technical Support',
            message: '',
          });
          setSubmitted(false);
        }, 5000);
      }, 1000);
    }
  };
  
  return (
    <div className="contact-page">
      <Header />
      
      <main className="contact-content">
        <section className="contact-hero">
          <div className="container">
            <h1 className="contact-heading">Contact Us</h1>
            <div className="contact-notice">
              <p>If you have questions about your booking or treatment, please contact the salon providing the service.</p>
              <p>If you are experiencing technical issues with GlamorGram, please contact customer support below.</p>
            </div>
          </div>
        </section>
        
        <section className="contact-main">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-card">
                  <div className="contact-icon-wrapper">
                    <div className="contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                  </div>
                  <h3>Email Us</h3>
                  <p>For direct inquiries, you can reach our support team at:</p>
                  <a href="mailto:info@glamorgram.com" className="contact-link">info@glamorgram.com</a>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon-wrapper">
                    <div className="contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                  </div>
                  <h3>Help Center</h3>
                  <p>Find answers to common questions in our FAQ page.</p>
                  <a href="/faq" className="contact-link">Visit our FAQ page</a>
                </div>
              </div>
              
              <div className="contact-form-container">
                <div className="form-header">
                  <h2>Send Us a Message</h2>
                </div>
                
                {submitted ? (
                  <div className="success-message">
                    <div className="success-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className={formErrors.name ? "error" : ""}
                        aria-describedby={formErrors.name ? "name-error" : undefined}
                      />
                      {formErrors.name && <div className="error-message" id="name-error">{formErrors.name}</div>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className={formErrors.email ? "error" : ""}
                        aria-describedby={formErrors.email ? "email-error" : undefined}
                      />
                      {formErrors.email && <div className="error-message" id="email-error">{formErrors.email}</div>}
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="Technical Support">Technical Support</option>
                          <option value="Account Issues">Account Issues</option>
                          <option value="Payment Problems">Payment Problems</option>
                          <option value="Feature Request">Feature Request</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message here..."
                        rows="5"
                        required
                        className={formErrors.message ? "error" : ""}
                        aria-describedby={formErrors.message ? "message-error" : undefined}
                      ></textarea>
                      {formErrors.message && <div className="error-message" id="message-error">{formErrors.message}</div>}
                    </div>
                    
                    <button 
                      type="submit" 
                      className={`contact-submit-button ${isSubmitting ? 'submitting' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;