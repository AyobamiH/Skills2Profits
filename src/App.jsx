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
import FAQSection from "./components/faq/FAQSection"
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
    


const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Skills2Profits",
    "url": "https://www.skills2profits.com",
    "description": "Start earning daily with your financial trading skills! Join our platform in Lagos and Port Harcourt to access gigs that pay you for Forex, stocks, and crypto trading expertise.",
    "publisher": {
      "@type": "Organization",
      "name": "Skills2Profits",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.skills2profits.com/images/logo.svg"
      }
    }
  }


const faqSchema  ={
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I start earning daily as financial market trader?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Getting started is simple! Sign up and wait for request to showcase your trading expertise. Once approved, you can start trading your skills for profits to earn daily/weekly payouts."
        }
      },
      {
        "@type": "Question",
        "name": "What types of gigs are available on the platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer gigs in Forex trading, stock market analysis, crypto trading, and other financial trading-related tasks. You can choose gigs that match your expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Is this platform available only in Lagos and Port Harcourt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While we focus on Lagos and Port Harcourt, our platform is open to traders across Nigeria. However, most gigs are tailored to the financial markets in these cities."
        }
      },
      {
        "@type": "Question",
        "name": "How does payment work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "✅ Daily/Weekly payouts based on your trading results.\n✅ Secure payment channels (local bank transfers available in Lagos & Port Harcourt).\n✅ No sign-up fees or hidden charges – you earn based on your trading skills!"
        }
      },
      {
        "@type": "Question",
        "name": "What trading services can I offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can monetize your skills by providing:\n✔️ Live trade signals\n✔️ Technical analysis & market predictions\n✔️ One-on-one trading consultations\n✔️ Mentorship & training for beginner traders"
        }
      },
      {
        "@type": "Question",
        "name": "How much money do I need to start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "None! There’s no upfront cost to start earning. If you already know how to trade, you can start monetizing your skills immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Which trading markets are most profitable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your expertise! Our traders specialize in:\n📈 Forex (USD, GBP, EUR pairs, etc.)\n📉 Stock & Index Trading (NASDAQ, S&P 500, etc.)\n💰 Crypto Trading (Bitcoin, Ethereum, etc.)\n⚡ Liquidity Trading (High-frequency, quick profit trades)"
        }
      },
      
      {
        "@type": "Question",
        "name": "How do I become a highly skilled trader?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mastery comes from:\n✅ Consistent practice & market research\n✅ Learning from experienced traders\n✅ Joining exclusive trading communities (available on our platform!)"
        }
      },
      {
        "@type": "Question",
        "name": "What is the best trading platform for earning daily?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our platform is specifically designed for skilled traders who want daily payouts based on their trading expertise. No capital needed—just your skills!"
        }
      },
      {
        "@type": "Question",
        "name": "How can I improve my trading skills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "🚀 Stay ahead with:\n📢 Live market insights & updates\n🤝 Trader community networking\n📈 Advanced strategy training"
        }
      },
      {
        "@type": "Question",
        "name": "What is liquidity trading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Liquidity trading focuses on high-volume assets that allow for quick buying and selling, maximizing daily profit potential. Many traders on our platform specialize in this strategy."
        }
      }
    ]
  }



const contactDataSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Skills2Profits",
    "url": "https://www.skills2profits.com",
    "logo": "https://www.skills2profits.com/images/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-07020476342",
      "contactType": "customer support",
      "email": " info@skills2profits.com",
      "areaServed": "Nigeria",
      "availableLanguage": "English"
    }
   
  }


const heroSectionSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Turn Your Trading Skills into Daily Pay",
    "description": "Are you a skilled trader in Lagos or Port Harcourt? Join Skills2Profits and get paid daily for your expertise.",
    "image": "https://www.skills2profits.com/images/fintrade.webp",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.skills2profits.com/images/fintrade.webp",
      "width": "1800",
      "height": "1200"
    },
    "mainEntity": {
      "@type": "Offer",
      "name": "Start Earning Now!",
      "description": "Join Skills2Profits and monetize your trading skills in Forex, stocks, and crypto trading.",
      "url": "https://www.skills2profits.com/#contact"
    }
  }
const serviceItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Strategy Trading",
        "description": "Do you have a winning strategy? Apply it and get paid based on your performance."
      },
      {
        "@type": "Service",
        "name": "Financial Market",
        "description": "Get paid for your expertise in Forex, Stocks, Commodities, Indices, and Crypto."
      },
      {
        "@type": "Service",
        "name": "Precision Market Execution",
        "description": "Showcase your expertise in executing trades at the right moment."
      },
      {
        "@type": "Service",
        "name": "Pattern Trading",
        "description": "Use your pattern trading skills to generate consistent profits."
      }
    ]
  }

const aboutSectionSchema ={
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Skills2Profits",
    "description": "We empower skilled traders in Lagos & Port Harcourt to monetize their expertise with real opportunities. Our platform connects you with financial markets where you can earn daily based on your skills.",
    "image": "https://www.skills2profits.com/images/fintradetwo.webp",
    "mainEntity": {
      "@type": "Organization",
      "name": "Skills2Profits",
      "mission": "Bridging the gap between skilled traders and financial markets."
    }
  }

const commitmentSchema= {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Commitment to Traders",
    "description": "We are committed to providing fair opportunities for traders who want to earn from their skills. Whether you're trading full-time or part-time, our platform gives you control over your earnings.",
    "image": "https://www.skills2profits.com/images/fintradethree.webp",
    "mainEntity": {
      "@type": "Organization",
      "name": "Skills2Profits",
      "mission": "Empowering skilled traders to earn daily."
    }
  }


const offerListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Daily Payouts",
        "description": "Withdraw your earnings daily, no waiting periods."
      },
      {
        "@type": "Offer",
        "name": "Performance-Based Earnings",
        "description": "The better you trade, the more you earn."
      },
      {
        "@type": "Offer",
        "name": "Access to High-Liquidity Markets",
        "description": "Trade in high-liquidity markets for better opportunities."
      },
      {
        "@type": "Offer",
        "name": "Trade from Anywhere",
        "description": "Trade from anywhere in Lagos or Port Harcourt."
      }
    ]
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
    <>
    <HelmetProvider>
    <Helmet>
    <title>Earn Daily as a Financial Trader in Lagos & Port Harcourt | Start Earning Now</title>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* <!-- Meta Description --> */}
    <meta
      name="description"
      content="Start earning daily with your financial trading skills! Join our platform in Lagos and Port Harcourt to access gigs that pay you for Forex, stocks, and crypto trading or any financial market expertise. Sign up now!"
    />

    {/* <!-- Meta Keywords --> */}
    <meta
      name="keywords"
      content="earn daily Lagos, financial trading jobs Lagos, financial markt trading jobs Port Harcourt, forex trading gig Nigeria, make money trading fianncial market, daily pay financial market trading jobs, Skills2Profits, financial trading gigs Port Harcourt, Forex trading gigs Nigeria, stock trading gigs Lagos, crypto trading gigs Port Harcourt, earn money trading in financial market Nigeria, financial market trading skills gigs Lagos, Forex earning opportunities Port Harcourt, stock market gigs Nigeria, financial market technical analysis gig lagos, crypto earning gigs Lagos, trading jobs Port Harcourt, financial gigs Nigeria, trading side hustle Lagos, Forex side hustle Port Harcourt, stock trading jobs Nigeria, crypto trading jobs Lagos, trading income Port Harcourt, financial skills gigs Nigeria, trading gigs Lagos, start earning daily Nigeria"
    />
    

    {/* <!-- Author --> */}
    <meta name="author" content="Financial Trading Gigs Platform" />

    {/* <!-- Open Graph Meta Tags --> */}
    <meta property="og:title" content="Earn Daily as a Financial Trader in Lagos & Port Harcourt | Start Earning Now" />
    <meta
      property="og:description"
      content="Start earning daily with your financial trading skills! Join our platform in Lagos and Port Harcourt to access gigs that pay you for Forex, stocks, and crypto trading expertise. Sign up now!"
    />
    <meta property="og:image" content="/images/logo.svg" />
    <meta property="og:url" content="https://www.skills2profits.com" />
    <meta property="og:type" content="website" />

    {/* <!-- Twitter Card Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Earn Daily as a Financial Trader in Lagos & Port Harcourt | Start Earning Now" />
    <meta
      name="twitter:description"
      content="Start earning daily with your financial trading skills! Join our platform in Lagos and Port Harcourt to access gigs that pay you for Forex, stocks, and crypto trading expertise. Sign up now!"
    />
    <meta name="twitter:image" content="/images/logo.svg" />
    <meta name="twitter:site" content="@tradinggigsng" />

    {/* <!-- Canonical URL --> */}
    <link rel="canonical" href="https://www.skills2profits.com" />

    {/* <!-- Robots --> */}
    <meta name="robots" content="index, follow" />

    {/* <!-- Theme Color --> */}
    <meta name="theme-color" content="#ffffff" />
  
    <script type="application/ld+json">
      {JSON.stringify(offerListSchema)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(aboutSectionSchema)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(commitmentSchema)}
    </script> 
    <script type="application/ld+json">
      {JSON.stringify(faqSchema)}
    </script>
    <script type="application/ld+json">
    {JSON.stringify(heroSectionSchema)}
    </script>

    {/* JSON-LD Schema for Services Section */}
    <script type="application/ld+json">
      {JSON.stringify(serviceItemList)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(contactDataSchema)}
    </script>

    <script type="application/ld+json">
      {JSON.stringify(websiteSchema)}
    </script>

</Helmet> 
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


              {/* FAQ Section */}
              <ScrollAnimationSection
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <FAQSection/>
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
</HelmetProvider>
    </>
  );
}

export default App;
