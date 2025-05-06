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
                <h1>Connecting You to the Best Beauty Experts Anytime, Anywhere</h1>
                <p className="hero-description">
                Glamorgram is a seamless beauty booking platform that connects clients with top professionals nearby, making it easy to browse, book, and glow—no DMs, no hassle.                </p>
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
                
                {/* Makeup Brushes */}
                <div className="illustration makeup-tools-illustration">
                  <svg viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.942 56.158c1.831 0 3.502.208 5.045.579-2.896-3.707-7.25-5.579-13.045-5.579-11.508 0-17.342 7.358-17.342 21.871 0 6.41 1.227 12.545 3.465 17.719h6.25c-1.111-3.956-1.715-8.267-1.715-12.719 0-14.512 5.834-21.871 17.342-21.871" fill="#FFF"/>
                    <path d="M178.709 17c3.536 0 7.026.194 10.448.548C182.093 15.892 174.505 15 166.709 15c-20.435 0-39.469 6.095-51.258 16.158l36.887 59.59H163.1l-35.648-57.59C139.24 23.095 158.274 17 178.709 17" fill="#FFF"/>
                    <path d="m127.451 33.158 35.648 57.59h17.982l36.889-59.59c-7.294-6.226-17.363-10.926-28.817-13.61-3.42-.354-6.909-.548-10.444-.548-20.435 0-39.469 6.095-51.258 16.158" fill="#FFD6D6"/>
                    <path d="m177.369 109.748.135-4h-21.555l.36 9.528h5.848l-.208-5.528z" fill="#FFF"/>
                    <path d="M66.955 314.542q.264-.348.452-.805l.005-.012a5.4 5.4 0 0 1-.475-1.898c-.006-.094-6.834-181.551-6.834-181.551h-6s6.828 181.457 6.834 181.551c.172 2.399 1.531 3.915 3.449 3.868a5 5 0 0 0 .869-.106q.208-.046.397-.113c.069-.024.141-.045.206-.072q.228-.1.429-.23c.089-.059.169-.127.25-.195q.073-.061.144-.128a3 3 0 0 0 .248-.272z" fill="#FFF"/>
                    <path d="M67.412 313.726c.213-.525.358-1.148.424-1.898.006-.084 6.078-181.551 6.078-181.551h-13.81s6.828 181.457 6.834 181.551c.051.724.222 1.355.474 1.898" fill="#FFB6C1"/>
                    <path d="M59.18 109.748h15.421l.133-4H53.18l.359 9.528h5.849z" fill="#FFF"/>
                    <path d="m59.18 109.748.208 5.528h15.028l.185-5.528z" fill="#FFB6C1"/>
                    <path d="M54.6 78.029c0 4.452.604 8.763 1.715 12.719h21.504c2.236-5.174 3.463-11.309 3.463-17.719 0-7.203-1.441-12.639-4.295-16.292a21.5 21.5 0 0 0-5.045-.579c-11.508 0-17.342 7.359-17.342 21.871" fill="#FFD6D6"/>
                    <path d="M63.942 36.158c-15.635 0-32.342 9.687-32.342 36.871 0 9.85 2.25 19.409 6.359 27.176l7.98 211.778c.074 10.679 7.98 18.712 18.447 18.712 10.473 0 18.381-8.042 18.449-18.73l7.094-211.771c4.106-7.766 6.352-17.32 6.352-27.165 0-27.184-16.705-36.871-32.339-36.871m-13.877 54.59C47.826 85.574 46.6 79.439 46.6 73.029c0-14.513 5.834-21.871 17.342-21.871 5.795 0 10.148 1.872 13.045 5.579 2.854 3.653 4.295 9.089 4.295 16.292 0 6.41-1.227 12.545-3.463 17.719zm17.771 221.079c-.065.75-.211 1.373-.424 1.898l-.005.012a3.5 3.5 0 0 1-.452.805l-.025.036a3 3 0 0 1-.392.4c-.081.067-.161.137-.25.195a3 3 0 0 1-.429.23c-.065.027-.137.049-.206.072a4 4 0 0 1-.397.113q-.099.022-.202.04c-.211.034-.43.06-.667.066-1.918.047-3.277-1.469-3.449-3.868-.006-.094-6.834-181.551-6.834-181.551h19.811c-.001.001-6.073 181.468-6.079 181.552m6.765-202.079-.185 5.528H53.539l-.359-9.528h21.555z" fill="#FFB6C1"/>
                    <path d="M266.273 130.276h-6s6.834 181.457 6.834 181.551c0 2.422 1.793 3.868 3.449 3.868 1.17 0 2.373-.718 3.002-1.967a4.16 4.16 0 0 1-.451-1.901c.001-.094-6.834-181.551-6.834-181.551m14.498-20.528.133-4H259.35l.357 9.528h5.851l-.208-5.528zm2.389-51.274.41-8.11-27.545 8.228 2.479 32.156h9.614l-2.093-27.156z" fill="#FFF"/>
                    <path d="m266.025 63.592 2.093 27.156h13.411l1.631-32.274z" fill="#FFD6D6"/>
                    <path d="m265.35 109.748.208 5.528h15.028l.185-5.528z" fill="#FFB6C1"/>
                    <path d="M273.559 313.728a4.2 4.2 0 0 0 .447-1.901c0-.084 6.076-181.551 6.076-181.551h-13.809s6.834 181.457 6.834 181.551c.001.732.178 1.361.452 1.901" fill="#FFB6C1"/>
                    <path d="M296.227 34.24a7.5 7.5 0 0 0-6.777-1.287L245.938 45.95a7.5 7.5 0 0 0-5.332 7.763l3.465 44.946 8.039 213.324c.074 10.679 7.98 18.712 18.447 18.712 10.473 0 18.381-8.042 18.449-18.73l7.15-213.434 2.93-58.014a7.5 7.5 0 0 0-2.859-6.277m-40.202 24.352 27.545-8.228-.41 8.109-1.631 32.274h-23.025zm3.325 47.156h21.555l-.134 4-.185 5.528h-20.879zm11.207 209.947c-1.656 0-3.449-1.446-3.449-3.868 0-.094-6.834-181.551-6.834-181.551h19.809s-6.076 181.467-6.076 181.551a4.2 4.2 0 0 1-.447 1.901c-.63 1.25-1.833 1.967-3.003 1.967" fill="#FFB6C1"/>
                    <path d="M162.873 130.276h-6s6.834 181.457 6.834 181.551c0 2.422 1.818 3.868 3.449 3.868 1.128 0 2.356-.724 2.997-1.985a4.1 4.1 0 0 1-.446-1.883c0-.094-6.834-181.551-6.834-181.551" fill="#FFF"/>
                    <path d="M170.153 313.71c.272-.536.45-1.16.45-1.883 0-.084 6.078-181.551 6.078-181.551h-13.809s6.834 181.457 6.834 181.551a4.1 4.1 0 0 0 .447 1.883m-8.204-203.962.208 5.528h15.027l.185-5.528z" fill="#FFB6C1"/>
                    <path d="M233.086 24.952C218.971 9.328 194.156 0 166.709 0s-52.262 9.328-66.375 24.953c-2.291 2.537-2.521 6.208-.807 8.975l-.002.001 41.215 66.581 7.969 211.474c.074 10.679 7.98 18.712 18.447 18.712 10.473 0 18.381-8.042 18.447-18.73l7.084-211.469 41.209-66.567-.004-.003c1.716-2.768 1.485-6.439-.806-8.975m-77.137 80.796h21.555l-.135 4-.186 5.528h-20.875zm14.655 206.079c0 .723-.178 1.347-.45 1.883-.641 1.261-1.869 1.985-2.997 1.985-1.631 0-3.449-1.446-3.449-3.868 0-.094-6.834-181.551-6.834-181.551h19.809c-.001 0-6.079 181.467-6.079 181.551m10.478-221.079h-28.744l-36.887-59.59C127.24 21.095 146.274 15 166.709 15c7.795 0 15.382.892 22.444 2.548 11.454 2.685 21.523 7.385 28.817 13.61z" fill="#FFB6C1"/>
                  </svg>
                </div>
                
                {/* Hair Dryer */}
                <div className="illustration hair-tools-illustration">
                  <svg viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.08 8.747 12.985 6.022c-3.46-.272-6.717.82-9.173 3.088C1.354 11.379 0 14.543 0 18.019s1.354 6.641 3.811 8.91c1.733 1.6 3.868 2.606 6.189 2.969v15.625c0 3.582 2.243 6.496 5 6.496s5-2.914 5-6.496V29.515c0-.021-.011-.038-.012-.059L47.08 27.29a1 1 0 0 0 .92-.997V9.745a1 1 0 0 0-.92-.998M18 45.523c0 2.438-1.374 4.496-3 4.496s-3-2.059-3-4.496V30.056q.49-.002.985-.04L18 29.615zm28-20.152-33.174 2.651c-2.898.228-5.618-.679-7.659-2.563C3.125 23.574 2 20.931 2 18.019c0-2.911 1.125-5.553 3.168-7.439 1.833-1.692 4.212-2.599 6.776-2.599q.438 0 .882.035L46 10.667zm6-12.352h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2m5 4h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2m-2 6h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2" fill="#FFD6D6"/>
                    <path d="M14 32.019h2v5h-2z" fill="#FFB6C1"/>
                    
                    {/* Hair Scissors */}
                    <g transform="translate(25, 5) scale(0.8)">
                      <path d="m11.7 9.989-.896-.766L12.153.246 14 2.093v9.861l-1-.854V2.507l-.153-.153zm2.536 3.482 1.523 1.302a2.8 2.8 0 0 1 1.325-.688 4.34 4.34 0 0 1 4.555 2.08 2.473 2.473 0 0 1-1.722 3.75 3.8 3.8 0 0 1-.806.087 4.37 4.37 0 0 1-3.75-2.166 2.59 2.59 0 0 1-.18-2.242l-1.654-1.414L12 15.707v1.508a3.5 3.5 0 0 1 2 3.285 3.283 3.283 0 0 1-3 3.5 3.283 3.283 0 0 1-3-3.5 3.283 3.283 0 0 1 3-3.5v-1.293l-9-9V3.015zM11 18a2.295 2.295 0 0 0-2 2.5 2.295 2.295 0 0 0 2 2.5 2.295 2.295 0 0 0 2-2.5 2.295 2.295 0 0 0-2-2.5m1.764-4.471L3 5.185v1.108l8.5 8.5zm3.477 3.832a3.38 3.38 0 0 0 3.459 1.577 1.48 1.48 0 0 0 1.06-2.3 3.39 3.39 0 0 0-3.46-1.576 1.48 1.48 0 0 0-1.06 2.3z" fill="#FFB6C1"/>
                    </g>
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
                
                {/* Mirror with Reflection */}
                <div className="illustration mirror-illustration">
                  <svg viewBox="0 0 427 427" xmlns="http://www.w3.org/2000/svg">
                    <path d="M392.15 117.337c1.25 9.01 1.45 18.48.58 28.27l-.17-.01h-255.2c3.97-9.7 8.93-19.16 14.81-28.26z" fill="#FFD6D6"/>
                    <path d="M392.73 145.607c-.05.58-.11 1.16-.17 1.75-2.25 22.1-9.7 44.04-21.62 64.36H126.21c-.61-7.56-.52-15.41.31-23.48 1.47-14.42 5.15-28.77 10.84-42.64h255.2zm-.58-28.27H152.17c7.16-11.12 15.69-21.68 25.46-31.45 29.2-29.21 65.55-47.36 102.35-51.11 34.21-3.5 64.58 6.11 85.52 27.05 14.57 14.57 23.65 33.7 26.65 55.51" fill="#FFE6E6"/>
                    <path d="M370.94 211.717c11.92-20.32 19.37-42.26 21.62-64.36.06-.59.12-1.17.17-1.75.87-9.79.67-19.26-.58-28.27-3-21.81-12.08-40.94-26.65-55.51-20.94-20.94-51.31-30.55-85.52-27.05-36.8 3.75-73.15 21.9-102.35 51.11-9.77 9.77-18.3 20.33-25.46 31.45-5.88 9.1-10.84 18.56-14.81 28.26-5.69 13.87-9.37 28.22-10.84 42.64-.83 8.07-.92 15.92-.31 23.48 1.97 24.53 11.36 46.04 27.36 62.04 20.95 20.94 51.32 30.55 85.53 27.06 36.8-3.75 73.15-21.9 102.35-51.11 11.66-11.66 21.57-24.47 29.49-37.99m18.48-173.8c58.45 58.45 47.68 163.98-24.05 235.71-63.44 63.44-153.31 79.19-213.67 41.55a123 123 0 0 1-22.04-17.5 123 123 0 0 1-17.5-22.04c-37.64-60.36-21.89-150.23 41.55-213.67 71.73-71.73 177.26-82.5 235.71-24.05" fill="#FFB6C1"/>
                    <path d="M126.22 211.717h244.72c-7.92 13.52-17.83 26.33-29.49 37.99-29.2 29.21-65.55 47.36-102.35 51.11-34.21 3.49-64.58-6.12-85.53-27.06-16-16-25.39-37.51-27.36-62.04z" fill="#FFD6D6"/>
                    <path d="M151.7 315.177 47.98 418.897c-10.92 10.91-28.62 10.91-39.54 0a27.88 27.88 0 0 1-8.19-19.77c0-7.15 2.73-14.31 8.19-19.77l103.72-103.72c4.91 7.89 10.74 15.28 17.5 22.04s14.15 12.59 22.04 17.5" fill="#FFB6C1"/>
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