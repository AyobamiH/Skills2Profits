
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faGlobe,
  faTrophy,
  faHandHoldingUsd,
  faBookOpen,
  
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const iconMap = {
  "faMoneyCheckAlt ": faMoneyCheckAlt ,
  "faGlobe": faGlobe,
  "faTrophy": faTrophy,
  "money": faHandHoldingUsd,
  "faBookOpen": faBookOpen
};

const WhyChooseUsCard = ({ icon, title, description }) => {

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return  (
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

export default WhyChooseUsCard;
