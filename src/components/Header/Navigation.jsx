
import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = ({ isScrolled }) => {
  const navItems = ["Home", "About", "Services",  "Contact"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <nav>
      <motion.ul
        className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
       
        {navItems.map((item) => (
          <motion.li key={item} variants={itemVariants}>
            <Link
              smooth to={`#${item.toLowerCase()}`}
              className={`transition-colors duration-200 ${
                isScrolled
                  ? "text-[#ffffff] hover:text-[#27ff4f]"
                  : "text-[#ffffff] hover:text-[#2ecc71]"
              }`}
            >
              {item}
            </Link>
            
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navigation;
