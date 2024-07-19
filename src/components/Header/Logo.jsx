
import React from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'

const Logo = () => {
  const scrollToHome = () => {
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div onClick={scrollToHome} >
    <motion.svg
      className="w-8 h-8 hover:text-white"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: -90 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="#2ecc71"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.path
        d="M2 17L12 22L22 17"
        stroke="#2ecc71"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <motion.path
        d="M2 12L12 17L22 12"
        stroke="#2ecc71"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      />
    </motion.svg>
   </div>
  );
};

export default Logo;
