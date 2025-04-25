import React, { useState, useEffect } from 'react';
import './FreelancerGuidePage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FreelancerGuidelines = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen is mobile on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile(); // Check initially
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  // Initialize all items as expanded on desktop
  useEffect(() => {
    if (!isMobile) {
      const allExpanded = {};
      guidelines.forEach(guideline => {
        allExpanded[guideline.id] = true;
      });
      setExpandedItems(allExpanded);
    }
  }, [isMobile]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleItem = (id) => {
    // Only toggle on mobile
    if (isMobile) {
      setExpandedItems(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    }
  };

  // Guidelines data remains the same
  const guidelines = [
    {
      id: 1,
      title: 'Timely Responses',
      description: 'Respond to booking requests and messages within 24 hours to show professionalism and reliability. Confirm appointments in advance and clarify any important details with clients.',
      category: 'communication'
    },
    {
      id: 2,
      title: 'Accurate Scheduling',
      description: 'Keep your calendar up to date to avoid double-bookings or missed appointments. If you must reschedule, inform the client as early as possible and offer new options.',
      category: 'scheduling'
    },
    {
      id: 3,
      title: 'Transparent Pricing',
      description: 'List your service prices transparently, including any extra fees. Avoid surprises, clients appreciate knowing exactly what to expect.',
      category: 'communication'
    },
    {
      id: 4,
      title: 'Professional Conduct',
      description: 'Always be punctual, well-prepared, and respectful. A friendly and professional attitude builds trust and encourages repeat bookings.',
      category: 'service'
    },
    {
      id: 5,
      title: 'Cancellation Policy',
      description: "If you need to cancel or change a booking, notify the client promptly. Follow GlamorGram's cancellation policies to maintain a strong reputation and avoid penalties.",
      category: 'scheduling'
    },
    {
      id: 6,
      title: 'Health & Safety',
      description: "Keep all tools and workspaces clean and sanitized. Follow health and safety standards to protect yourself and your clients, and to show your commitment to quality service",
      category: 'service'
    },
    {
      id: 7,
      title: 'Client Reviews',
      description: 'Encourage clients to leave honest reviews. Thank them for positive feedback and respond kindly to constructive criticism, it shows you care about improving.',
      category: 'growth'
    },
    {
      id: 8,
      title: 'Secure Payments',
      description: "Use GlamorGram's platform for all payments to keep transactions safe and documented. Share your refund policy upfront to avoid misunderstandings.",
      category: 'payments'
    },
    {
      id: 9,
      title: 'Profile Updates',
      description: 'Regularly update your profile with accurate services, prices, and availability. Add recent photos to your portfolio to showcase your best work',
      category: 'growth'
    },
    {
      id: 10,
      title: 'Platform Compliance',
      description: "Follow GlamorGram's terms, community guidelines, and booking rules. Staying compliant helps you stay visible, trusted, and in good standing on the platform.",
      category: 'compliance'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Guidelines' },
    { id: 'communication', name: 'Communication' },
    { id: 'scheduling', name: 'Scheduling' },
    { id: 'service', name: 'Service Quality' },
    { id: 'payments', name: 'Payments' },
    { id: 'growth', name: 'Growth' },
    { id: 'compliance', name: 'Compliance' }
  ];

  const filteredGuidelines = activeCategory === 'all' 
    ? guidelines 
    : guidelines.filter(guideline => guideline.category === activeCategory);

  return (
    <div className="freelancer-guidelines-page">
      <Header />
      
      <div className="guidelines-hero">
        <div className="hero-content-wrapper">
          <div className="guidelines-hero-content">
            <h1>Showcase Your Talent. Attract More Clients.</h1>
            <p>Your GlamorGram profile is your personal, professional space where clients discover your services and book appointments.</p>
          </div>
        </div>
      </div>
      
      <main className="guidelines-main">
        <section className="guidelines-intro" aria-labelledby="guidelines-heading">
          
          <p>Follow these guidelines to grow your business and build a loyal client base.</p>
          
          <div className="category-tabs">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>
        
        <section className="guidelines-list" aria-label="Freelancer guidelines list">
          {filteredGuidelines.map((guideline, index) => (
            <article 
              className={`guideline-card ${expandedItems[guideline.id] ? 'expanded' : ''}`}
              key={guideline.id}
            >
              <button 
                className="guideline-header"
                onClick={() => toggleItem(guideline.id)}
                aria-expanded={expandedItems[guideline.id]}
              >
                <div className="guideline-title">
                  <span className="guideline-icon" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3>{guideline.title}</h3>
                </div>
                <span className="expand-icon">
                  {expandedItems[guideline.id] ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              
              {(expandedItems[guideline.id] || !isMobile) && (
                <div className="guideline-content">
                  <p>{guideline.description}</p>
                </div>
              )}
            </article>
          ))}
        </section>
      </main>
      
      {showBackToTop && (
        <button 
          className="back-to-top" 
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
      
      <Footer />
    </div>
  );
};

export default FreelancerGuidelines;