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

function App() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowApplicationForm(true);
  };

  return (
    <>
      <Header onApplyNowClick={handleApplyNowClick} />
      <HeroSection onApplyNowClick={handleApplyNowClick} />
      <ServicesSection />
      <AboutSection />
      <CommitmentSection />
      <WhatIsOnOffer />
      <WhyChooseUsSection />
      {showApplicationForm ? <ApplicationSection /> : <ContactSection />}
      <Footer />
    </>
  );
}

export default App;
