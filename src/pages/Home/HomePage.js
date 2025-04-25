import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Services from '../../components/Services/Services';
import Trends from '../../components/Trends/Trends';
import Professional from '../../components/Professional/Professional';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Trends />
        <Professional />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;