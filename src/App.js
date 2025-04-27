import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import BusinessPage from './pages/Business/BusinessPage';
import ContactUsPage from './pages/ContactUs/ContactUsPage';
import FreelancerGuide from'./pages/FreelancerGuide/FreelancerGuidePage';
import FaqPage from './pages/Faq/FaqPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ScrollToTop from './components/utils/ScrollToTop';

import './App.css';

function App() {
  return (
    <Router> 
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/freelancer-guide" element={<FreelancerGuide />} />
          <Route path="/search/:category" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
