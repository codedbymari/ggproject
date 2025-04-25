// src/pages/Service/ServicePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { ServiceDetailsProvider } from './context/ServiceDetailsProvider';
import ServicePageContent from './components/ServicePageContent';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ServicePage.css';

/**
 * Main ServicePage component that wraps the content with the provider
 * This pattern allows for clean separation of concerns
 */
const ServicePage = () => {
  const { id } = useParams();
  
  return (
    <>
      <Header />
      <main className="service-page">
        <ServiceDetailsProvider serviceId={id}>
          <ServicePageContent />
        </ServiceDetailsProvider>
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;