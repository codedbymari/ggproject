import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './AboutPage.css';

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('clients');
  
    return (
      <div className="about-page">
        <Header />
      
        <main className="about-content">
          <section className="hero-section">
            <div className="container">
              <div className="hero-content">
                <h1>Discover the beauty professionals you deserve, right at your fingertips</h1>
              </div>
              
              <div className="hero-illustrations">
                {/* Glamorgram Stamp */}
                <div className="illustration stamp-illustration">
                  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="55" fill="#FFF" stroke="#FFB6C1" strokeWidth="2" />
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#FFB6C1" strokeWidth="1" strokeDasharray="3,2" />
                    <text x="60" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FF8DA1">GLAMOR</text>
                    <text x="60" y="60" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FF8DA1">GRAM</text>
                    <text x="60" y="75" textAnchor="middle" fontSize="8" fill="#FF8DA1">BEAUTY SERVICES</text>
                    <path d="M30,60 C30,43.43 43.43,30 60,30 C76.57,30 90,43.43 90,60 C90,76.57 76.57,90 60,90 C43.43,90 30,76.57 30,60 Z" fill="none" stroke="#FFB6C1" strokeWidth="1" />
                  </svg>
                </div>
                
                {/* Flower Cluster */}
                <div className="illustration flower-cluster-1">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.931 19.932c2.501-3.823-1.935-7.059-4.692-2.878-3.707-4.17-9.041-1.828-5.944 3.503-3.197 2.159-2.404 8.224 2.628 7.32.398 4.93 9.263 2.684 7.534-1.186 5.372-1.872 3.476-5.408.475-6.76z" fill="#FFD6D6"/>
                    <path d="M9.3 25.498a2.815 2.815 0 1 1 0-5.63 2.815 2.815 0 0 1 0 5.63" fill="#FFA0A0"/>
                    <path d="M18.064-11.93c1.619-4.876-2.704-8.052-5.529-3.127-3.193-1.556-7.664.631-4.627 5.466-3.056 4.17 1.5 7.211 4.413 5.462 2.196 3.821 7.151.326 5.609-2.735 4.2.234 4.738-4.794.135-5.067z" fill="#FFE6E6" transform="translate(9, 25)"/>
                    <path d="M-3.167 4.895a2.592 2.592 0 1 1-2.592-4.49 2.592 2.592 0 0 1 2.592 4.49" fill="#FFB6C1" transform="translate(20, 13)"/>
                    <path d="M12.413 6.218c2.031-3.493-.745-6.581-4.153-3.683C5.652-.108 1.375 1.533 2.925 6.237c-3.89 1.387-.164 8.052 2.583 5.82 2.67 3.929 5.112 1.635 5.554-1.079 3.623 1.19 5.319-3.441 1.351-4.761z" fill="#FFC0CB"/>
                    <path d="M8.625 9.657a2.352 2.352 0 0 1-1.216-4.542 2.352 2.352 0 0 1 1.216 4.542" fill="#FF9AAA"/>
                  </svg>
                </div>
                
                {/* Calendar Illustration */}
                <div className="illustration calendar-illustration">
                  <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="30" width="80" height="90" rx="5" fill="#FFF" stroke="#FFB6C1" strokeWidth="2" />
                    <rect x="20" y="30" width="80" height="20" rx="5" fill="#FFD6D6" stroke="#FFB6C1" strokeWidth="2" />
                    
                    {/* Calendar grid */}
                    <line x1="20" y1="60" x2="100" y2="60" stroke="#FFE6E6" strokeWidth="1" />
                    <line x1="20" y1="80" x2="100" y2="80" stroke="#FFE6E6" strokeWidth="1" />
                    <line x1="20" y1="100" x2="100" y2="100" stroke="#FFE6E6" strokeWidth="1" />
                    
                    <line x1="40" y1="50" x2="40" y2="120" stroke="#FFE6E6" strokeWidth="1" />
                    <line x1="60" y1="50" x2="60" y2="120" stroke="#FFE6E6" strokeWidth="1" />
                    <line x1="80" y1="50" x2="80" y2="120" stroke="#FFE6E6" strokeWidth="1" />
                    
                    {/* Calendar date with heart */}
                    <circle cx="50" cy="90" r="8" fill="#FFB6C1" />
                    <path d="M46,90 C46,88 48,86 50,88 C52,86 54,88 54,90 C54,92 50,94 50,94 C50,94 46,92 46,90 Z" fill="#FFF" />
                    
                    {/* Calendar hangers */}
                    <rect x="30" y="20" width="4" height="10" rx="2" fill="#FFB6C1" />
                    <rect x="86" y="20" width="4" height="10" rx="2" fill="#FFB6C1" />
                  </svg>
                </div>
                
               
               
                
                {/* Phone Booking App */}
                <div className="illustration phone-illustration">
                  <svg viewBox="0 0 100 180" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="20" width="50" height="100" rx="8" fill="#FFF" stroke="#FFB6C1" strokeWidth="2" />
                    <rect x="30" y="30" width="40" height="70" rx="2" fill="#FFE6E6" />
                    
                    {/* App interface */}
                    <rect x="35" y="40" width="30" height="5" rx="2" fill="#FFB6C1" />
                    <circle cx="40" cy="55" r="5" fill="#FFC0CB" />
                    <rect x="50" y="50" width="15" height="3" rx="1" fill="#FFB6C1" />
                    <rect x="50" y="55" width="10" height="3" rx="1" fill="#FFB6C1" />
                    
                    <circle cx="40" cy="70" r="5" fill="#FFC0CB" />
                    <rect x="50" y="65" width="15" height="3" rx="1" fill="#FFB6C1" />
                    <rect x="50" y="70" width="10" height="3" rx="1" fill="#FFB6C1" />
                    
                    {/* Home button */}
                    <circle cx="50" cy="110" r="5" fill="#FFE6E6" stroke="#FFB6C1" strokeWidth="1" />
                  </svg>
                </div>
                
                
              </div>
            </div>
          </section>

          <section className="about-mission">
            <div className="container">
              <div className="mission-content">
                <div className="section-header">
                  <h2>Our Mission</h2>
                </div>
                <div className="mission-text">
                  <p>
                  At GlamorGram, we are revolutionizing the beauty industry by providing seamless
                  access to skilled beauty professionals offering personalized services. Whether you are
                  preparing for a special event, require a quick touch-up, or simply wish to indulge in self-care, our
                  platform makes it effortless to discover and book the right expert. 
                  </p>
                  <p>
                  With a streamlined process for finding trusted beauty freelancers, scheduling appointments, and making secure payments,
                  GlamorGram ensures a convenient and reliable experience. From hairstylists to nail technicians,
                  we connect you with top-tier professionals to meet your needs for any occasion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="about-vision">
            <div className="container">
              <div className="vision-content">
                <div className="section-header">
                  <h2>Our Vision</h2>
                </div>
                <div className="vision-text">
                  <p>
                  We aim to empower beauty professionals to grow their businesses while ensuring
                  customers enjoy high-quality, on-demand beauty services. GlamorGram is more than an
                  app—it’s a thriving community where creativity meets convenience, enabling
                  professionals to showcase their talents while clients access exceptional services tailored
                  to their unique needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="how-it-works-section">
            <div className="container">
              <h2>How it works</h2>
              <p className="section-subtitle">Booking Beauty Services Has Never Been Easier</p>
              
              <div className="client-freelancer-tabs">
                <div className="tab-header">
                  <button 
                    className={`tab ${activeTab === 'clients' ? 'active' : ''}`}
                    onClick={() => setActiveTab('clients')}
                  >
                    For Clients
                  </button>
                  <button 
                    className={`tab ${activeTab === 'freelancers' ? 'active' : ''}`}
                    onClick={() => setActiveTab('freelancers')}
                  >
                    For Freelancers
                  </button>
                </div>
                
                <div className="tab-content">
                  {activeTab === 'clients' ? (
                    <div className="steps-container clients-steps">
                      <div className="step">
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
                          </svg>
                        </div>
                        <div className="step-content">
                          <p>Browse verified profiles of hairstylists, makeup artists, nail technicians, and more.</p>
                        </div>
                      </div>
                      
                      <div className="step">
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill="currentColor"/>
                          </svg>
                        </div>
                        <div className="step-content">
                          <p>Book and schedule services based on your needs.</p>
                        </div>
                      </div>
                      
                      <div className="step">
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="currentColor"/>
                          </svg>
                        </div>
                        <div className="step-content">
                          <p>Pay securely through our platform.</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="steps-container freelancer-steps">
                      <div className="step">
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                          </svg>
                        </div>
                        <div className="step-content">
                          <p>Create a detailed profile with pictures of your work showcasing your expertise.</p>
                        </div>
                      </div>
                      
                      <div className="step">
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/>
                          </svg>
                        </div>
                        <div className="step-content">
                          <p>Set your availability, pricing, and service area.</p>
                        </div>
                      </div>
                      
                      <div className="step">
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" fill="currentColor"/>
                          </svg>
                        </div>
                        <div className="step-content">
                          <p>Grow your business with GlamorGram’s tools for managing clients and
                          appointments.</p>
                        </div>
                      </div>
                    </div>
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

export default AboutPage;