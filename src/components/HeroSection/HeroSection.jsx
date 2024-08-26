import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../common/CTAButton";
import { HashLink as Link } from 'react-router-hash-link';
const HeroSection = ({ onApplyNowClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-[#ffffff]">
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Turn Your Skills To Profits
          {/* Empower Your Trading with Elite Resources */}
        </motion.h1>
       
         <motion.p
      className="text-lg md:text-xl mb-8 text-center text-[#ffffff]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
     Are you a skilled trader limited by funding?
    </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* <Link smooth to='/#showInterest'>
          <CTAButton  onClick={onApplyNowClick}>
            Stop Limiting! Start Profiting!
          </CTAButton>
          </Link> */}

          <Link smooth to="/#contact" >
            <CTAButton onClick={{onApplyNowClick}}>
              Start Profiting
            </CTAButton>
          </Link>

          
      
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="/images/fintrade.webp"
          srcSet="/images/fintrade-small.webp 600w, /images/fintrade-medium.webp 1200w, /images/fintrade-large.webp 1800w"
          sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, (max-width: 1800px) 1800px"
          alt="Trading floor with financial charts"
          className="object-cover w-full h-full"
        />

        {/* <img
          src="/images/fintrade-small.webp"
          srcset="/images/fintrade-small.webp 600w, /images/fintrade-medium.webp 1200w, /images/fintrade-large.webp 1800w"
          sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
          alt="Trading floor with financial charts"
          className="object-cover w-full h-full"
        /> */}

      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f] to-[#2c3e50] opacity-90"></div>
    </section>
  );
};

export default HeroSection;
