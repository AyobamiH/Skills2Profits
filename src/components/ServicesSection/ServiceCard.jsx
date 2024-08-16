/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faGem , faChartBar, faBolt } from '@fortawesome/free-solid-svg-icons';

import { faOilWell } from "@fortawesome/free-solid-svg-icons/faOilWell";


const iconMap = {
  "chart-line": faChartLine,
  "gem": faGem ,
  "nasdaq": faChartBar,
  "energy": faBolt,
};

const ServiceCard = ({ icon, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-[#ffffff] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="text-[#f1c40f] mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <FontAwesomeIcon icon={iconMap[icon]} size="3x" />
      </motion.div>
      <motion.h3 className="text-xl font-semibold mb-2 text-[#001f3f]">
        {title}
      </motion.h3>
      <motion.p className="text-[#34495e]">{description}</motion.p>
    </motion.div>
  );
};

export default ServiceCard;
