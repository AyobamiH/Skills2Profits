
import React, { useState } from 'react';
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
import Globe from './components/Globe'; // Import the Globe component

function App() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowApplicationForm(true);
    console.log('clicked');
  };

  return (
    <div className="relative overflow-hidden">
     

      <Header onApplyNowClick={handleApplyNowClick} />

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
      {showApplicationForm ? <ApplicationSection /> : <ContactSection />}

      <Footer />
    </div>
  );
}

export default App;
