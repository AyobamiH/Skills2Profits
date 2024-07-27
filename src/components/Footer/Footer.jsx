
import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Footer = () => {
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <footer className="bg-[#001f3f] text-[#ffffff] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
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
            <p className="text-sm">
              Empowering traders limited by funding.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[#2ecc71] transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#2ecc71] transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#2ecc71] transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              
              <li>
                <a
                  href="#"
                  className="hover:text-[#2ecc71] transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
           
            <p className="text-sm">Email: info@skills2profits.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#34495e] text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Developed by Custom Website Designs Northampton, Northamptonshire, UK.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
