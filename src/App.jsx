import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WhatIsOnOffer from './components/WhatIsOnOffer/WhatIsOnOffer';
import ContactSection from './components/ContactSection/ContactSection';
import AboutSection from './components/AboutSection/AboutSection';
import CommitmentSection from './components/Commitment/CommitmentSection';
import WhyChooseUsSection from './components/WhyChooseUs/WhyChooseUsSection';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ApplicationSection from './components/ApplicationSection/ApplicationSection';
import ScrollAnimationSection from './components/ScrollAnimationSection';
import Layout from './components/Layouts/Layout'
// import CTAButton from './components/CTAButton'; // Import your CTAButton
import MessagesPage from './components/MessagesPage';


const App = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowApplicationForm(true);
    console.log('clicked');
  };

  const handleContactClick = () =>{
    setShowContactForm(true);
    console.log('contact form clicked)');
  }


  useEffect(() => {
    if (showApplicationForm) {
      const element = document.getElementById('showInterest');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [showApplicationForm]);

  return (
    <BrowserRouter>
      <div id='home' className="relative overflow-hidden">
        <Header onApplyNowClick={handleApplyNowClick} handleContactClick={handleContactClick} />

        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <ScrollAnimationSection
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <HeroSection onApplyNowClick={handleApplyNowClick} />
              </ScrollAnimationSection>

              {/* Services Section */}
              <ScrollAnimationSection
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ServicesSection />
              </ScrollAnimationSection>

              {/* About Section */}
              <ScrollAnimationSection
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <AboutSection />
              </ScrollAnimationSection>

              {/* Commitment Section */}
              <ScrollAnimationSection
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <CommitmentSection />
              </ScrollAnimationSection>

              {/* What Is On Offer Section */}
              <ScrollAnimationSection
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <WhatIsOnOffer />
              </ScrollAnimationSection>

              {/* Why Choose Us Section */}
              <ScrollAnimationSection
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <WhyChooseUsSection />
              </ScrollAnimationSection>

              {/* Conditional Rendering of Application or Contact Section */}
              {showContactForm ? < ApplicationSection/> : <ContactSection />}
            </>
          } />
          <Route path="/contact" element={ <ContactSection /> } />
          {/* Add other routes here */}

           {/* Add the MessagesPage route */}
          <Route path='/messages' element={<MessagesPage/>} />
          
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
