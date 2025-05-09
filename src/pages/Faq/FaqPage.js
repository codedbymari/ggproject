import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './FaqPage.css';

const FaqPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('customers');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  useEffect(() => {
    if (location.pathname === '/freelancer-guide') {
      setActiveTab('freelancers');
    }
  }, [location.pathname]);

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  // Customer FAQs 
  const customerFAQs = [
    {
      id: 'c1',
      question: 'How do I book an appointment?',
      answer: 'Booking is easy! Just select your preferred professional, choose a time slot, and confirm your appointment in a few quick steps.'
    },
    {
      id: 'c2',
      question: 'Is payment secure?',
      answer: 'Yes! All payments are processed securely through our platform, ensuring transparency and peace of mind.'
    },
    {
      id: 'c3',
      question: 'How do I find a beauty professional near me?',
      answer: 'Simply search by location, service type, or availability, and browse profiles of verified freelancers.'
    },
    {
      id: 'c4',
      question: 'Can I read reviews before booking?',
      answer: 'Absolutely! Browse reviews and ratings from past clients to help you choose the right professional.'
    }
   
  ];

  // Freelancer FAQs 
  const freelancerFAQs = [
    {
      id: 'f1',
      question: 'How do I join GlamorGram?',
      answer: "Create a profile, add your services, and set your availability. It's that easy!"
    },
    {
      id: 'f2',
      question: 'How do clients find me?',
      answer: 'Clients can discover you by searching for services in your area or browsing based on availability and ratings.'
    },
    {
      id: 'f3',
      question: 'Can I set my own prices?',
      answer: 'Absolutely! You have complete control over your pricing and schedule.'
    },
    {
      id: 'f4',
      question: 'Does GlamorGram take a commission?',
      answer: 'No, all verified freelancers enjoy access to the platform at no cost!'
    },
    {
      id: 'f5',
      question: 'How do I get paid?',
      answer: 'Payments are processed securely through our platform. You can withdraw directly to your bank account or use other available payment methods.'
    }
  ];

  const activeFAQs = activeTab === 'customers' ? customerFAQs : freelancerFAQs;

  return (
    <div className="faq-page">
      <Header />
      <div className="faq-page-content">
        <div className="faq-container">
          <div className="faq-header">
            <h1>Frequently Asked Questions</h1>
            
            <div className="tab-faq-container">
              <button 
                className={`tab-faq-button ${activeTab === 'customers' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('customers');
                  setExpandedQuestion(null); 
                }}
                aria-pressed={activeTab === 'customers'}
              >
                Customers
              </button>
              <button 
                className={`tab-faq-button ${activeTab === 'freelancers' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('freelancers');
                  setExpandedQuestion(null); 
                }}
                aria-pressed={activeTab === 'freelancers'}
              >
                Freelancers
              </button>
            </div>
            
            <p className="faq-intro">
              Below you will find answers to our most commonly asked questions.
            </p>
          </div>

          <div className="questions-list">
            {activeFAQs.map((faq) => (
              <div 
                key={faq.id} 
                className={`question-item ${expandedQuestion === faq.id ? 'expanded' : ''}`}
              >
                <div 
                  className="question-header"
                  onClick={() => toggleQuestion(faq.id)}
                  aria-expanded={expandedQuestion === faq.id}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggleQuestion(faq.id);
                      e.preventDefault();
                    }
                  }}
                >
                  <h3>{faq.question}</h3>
                  <div className="question-icon">
                    {expandedQuestion === faq.id ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
                  </div>
                </div>
                {expandedQuestion === faq.id && (
                  <div className="question-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FaqPage;