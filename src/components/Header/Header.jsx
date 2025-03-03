
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import Navigation from "./Navigation";
import CTAButton from "../common/CTAButton";
import { HashLink as Link } from 'react-router-hash-link';
const Header = ( {onApplyNowClick,  handleContactClick} ) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed w-full  z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#001f3f] shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <motion.span
            className={`ml-2 text-xl font-bold ${
              isScrolled ? "text-[#ffffff]" : "text-[#ffffff]"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Skills2Profits
          </motion.span>
        </div>
        <div className="hidden md:block">
          <Navigation isScrolled={isScrolled} />
        </div>
       
          <Link  smooth to='/#contact' className="hidden md:block">
              <CTAButton onClick={onApplyNowClick}> Start Profiting!</CTAButton>
            </Link>
       
        <button
          className={`md:hidden ${
            isScrolled ? "text-[#ffffff]" : "hover:text-[#27ff4f]"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute text-center top-full left-0 right-0 bg-[#001f3f] shadow-md md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Navigation />
            <Link smooth  to='/#contact'>
              <CTAButton onClick={onApplyNowClick}> Start Profiting</CTAButton>
            </Link>
          
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
