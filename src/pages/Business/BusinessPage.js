import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './BusinessPage.css';
import clientReachImage from '../../assets/business/clientshappy.png';
import showcaseTalentImage from '../../assets/business/portfolio.png';
import schedulingImage from '../../assets/business/Handz - 10.png';
import ggMobileImage from '../../assets/ggmobil.png'

const BusinessPage = () => {
  // Get current month name
  const getCurrentMonthName = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentMonth = new Date().getMonth();
    return months[currentMonth];
  };
  
  return (
    <div className="business-page">
      <Header />
      
      <main className="business-content">
        <section className="business-hero">
          <div className="container">
            <h1>Join the GlamorGram Community and Grow Your Beauty Business!</h1>
            <p className="business-hero-subtitle">Benefits of joining GlamorGram</p>
          </div>
        </section>

        <section className="business-benefits">
          <div className="container">
            <div className="benefit-card">
              <div className="benefit-content">
                <h2>Expand Your Client Reach</h2>
                <p>
                  Gain access to a consistent stream of clients in your
                  local area, allowing you to grow your business and reach more people who value your
                  expertise.
                </p>
                <button className="btn-primary">Get Clients</button>
              </div>
              <div className="benefit-image">
                <img src={clientReachImage} alt="Expanding client reach" />
              </div>
            </div>

            <div className="benefit-card reverse">
              <div className="benefit-content">
                <h2>Showcase Your Talent</h2>
                <p>
                  Create a personalized profile to highlight your skills,
                  experience, and portfolio, making it easier for potential clients to see your work and choose you
                  with confidence.
                </p>
                <button className="btn-primary">Show Your Work</button>
              </div>
              <div className="benefit-image showcase-image">
                <img src={showcaseTalentImage} alt="Showcase your talent" />
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-content">
                <h2>Streamline Scheduling & Payments</h2>
                <p>
                  Our user-friendly platform simplifies appointment management and payments, so you can focus on what you do best—providing
                  exceptional beauty services.
                </p>
                <button className="btn-primary">Simplify Booking</button>
              </div>
              <div className="benefit-image">
                <img src={schedulingImage} alt="Streamline scheduling and payments" />
              </div>
            </div>

            <div className="benefit-card reverse">
              <div className="benefit-content">
                <h2>Build Credibility & Trust</h2>
                <p>
                  With verified reviews and ratings from satisfied clients,
                  you can enhance your reputation and attract even more bookings while establishing yourself as
                  a trusted professional in your community.
                </p>
                <button className="btn-primary">Earn Reviews</button>
              </div>
              <div className="benefit-image testimonials-container">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="15" r="8" fill="#FFD6D6" />
                        <path d="M40,40 L40,35 C40,25 30,25 20,25 C10,25 0,25 0,35 L0,40 Z" fill="#FFD6D6" />
                      </svg>
                    </div>
                    <div className="testimonial-stars">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                  <p className="testimonial-text">"Temi did an amazing job with my hair! She understood exactly what I wanted and delivered beyond my expectations."</p>
                  <div className="testimonial-name">- Veronica</div>
                </div>
                
            
                <div className="testimonial-card bottom-left">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="15" r="8" fill="#FFD6D6" />
                        <path d="M40,40 L40,35 C40,25 30,25 20,25 C10,25 0,25 0,35 L0,40 Z" fill="#FFD6D6" />
                      </svg>
                    </div>
                    <div className="testimonial-stars">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                  <p className="testimonial-text">"Best makeup artist in town! Always on time and so professional."</p>
                  <div className="testimonial-name">- Zarah </div>
                </div>
                
              
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-content">
                <h2>Manage Bookings & Flexible Hours</h2>
                <p>
                  Enjoy the freedom to set your own schedule, choose the services you offer, and control your business while benefiting from our platform's support. Our intuitive calendar makes it easy to track upcoming appointments and manage your availability.
                </p>
                <button className="btn-primary">Work Freely</button>
              </div>
              <div className="benefit-image calendar-section">
                <div className="calendar-date">
                  <div className="date-header">{getCurrentMonthName()}</div>
                  <div className="date-grid">
                    <div className="date-item">
                      <span className="date-number">14</span>
                      <span className="date-info">2 Bookings</span>
                    </div>
                    <div className="date-item active">
                      <span className="date-number">15</span>
                      <span className="date-info">3 Bookings</span>
                    </div>
                    <div className="date-item">
                      <span className="date-number">16</span>
                      <span className="date-info">1 Booking</span>
                    </div>
                    <div className="date-item">
                      <span className="date-number">17</span>
                      <span className="date-info">Free</span>
                    </div>
                    <div className="date-item">
                      <span className="date-number">18</span>
                      <span className="date-info">Day Off</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-business-section">
          <div className="container">
            <div className="cta-business-content">
              <div className="cta-business-text">
                <h2>Join Us Now!</h2>
                <p>Grow Your Beauty Business with GlamorGram</p>
                <button className="btn-primary btn-large">Get Started</button>
              </div>
              <div className="cta-business-phone-container">
                <div className="custom-iphone-mockup">
                  <img 
                    src={ggMobileImage} 
                    alt="GlamorGram Mobile Mockup" 
                    className="iphone-mockup-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessPage;