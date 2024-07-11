
import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const socialIcons = [
    { icon: faFacebookF, link: "https://facebook.com" },
    { icon: faTwitter, link: "https://twitter.com" },
    { icon: faLinkedinIn, link: "https://linkedin.com" },
    { icon: faInstagram, link: "https://instagram.com" },
  ];


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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            {/* <p className="text-sm mb-2">
              123 Trading Street, Financial District
            </p> */}
            <p className="text-sm mb-2">Phoenix, AZ, USA.</p>
            <p className="text-sm mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@skills2profits.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffffff] hover:text-[#2ecc71] transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#34495e] text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Skills2Profits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
