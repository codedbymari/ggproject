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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle the form submission to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
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
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <h3>Email Us</h3>
                  <p>info@glamorgram.com</p> 
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <h3>Call Us</h3>
                  <p>+234 12345678</p>
                  <p className="text-muted">Mon-Fri, 9am-5pm WAT </p>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <h3>Help Center</h3>
                  <p>Visit our FAQ page</p>
                  <a href="/faq" className="contact-link">Browse FAQs</a>
                </div>
              </div>
              
              <div className="contact-form-container">
                <div className="form-header">
                  <h2>Send Us a Message</h2>
                  <p>We'd love to hear from you. Please fill out this form.</p>
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
                  <form className="contact-form" onSubmit={handleSubmit}>
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
                      />
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
                      />
                    </div>
                    
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
                    
                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your issue in detail..."
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="submit-button">
                      Send Message
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