
import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = ({ onApplyNowClick, children }) => {
  return (
    <motion.button
      onClick={onApplyNowClick}
      className="px-6 font-bold py-2 text-[#000] text-xl bg-[#32ff57] rounded-md hover:bg-[#4dff97] transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;
