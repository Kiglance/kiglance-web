import React from 'react';
import Home from './home/Home';
import Services from './services/Services';
import Work from './work/Work';
import WhyUs from './whyUs/WhyUs';
import Clients from './clients/Clients';
import Contact from './contact/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="w-full">
      <Home />
      <div className="px-4 md:px-8 lg:px-32">
        <Services />
        <Work />
        <WhyUs />
        <Clients />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
