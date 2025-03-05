
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: "faChess",
      title: "Strategy Trading",
      description:
        "Do you have a winning strategy? Apply it and get paid based on your performance.",
    },
    {
      icon: "faMoneyBillTrendUp",
      title: "Financial Market",
      description:
        "Get paid for your expertise in Forex, Stocks, Commodities, Indices, and Crypto.",
    },
    {
      icon: "faBullseye",
      title: "Precision Market Execution",
      description:
        "Showcase your expertise in executing trades at the right moment.",
    },
    {
      icon: "faProjectDiagram",
      title: "Pattern Trading",
      description:
        "Use your pattern trading skills to generate consistent profits.",
        

    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="services" className="py-16 bg-[#ecf0f1]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-[#001f3f] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
