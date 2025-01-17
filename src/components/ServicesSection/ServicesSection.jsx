
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: "chart-line",
      title: "Futures Trading",
      description:
        "Can you navigate the complexities of a financial contract that obligates you to buy or sell an asset at a future date and price?",
    },
    {
      icon: "gem",
      title: "Precious Metals",
      description:
        "Do you have the insight to hedge against inflation and currency fluctuations by speculating on the future price of gold?",
    },
    {
      icon: "nasdaq",
      title: "NASDAQ",
      description:
        "Are you equipped to analyze and trade based on the performance of technology and growth stocks through Nasdaq futures contracts?",
    },
    {
      icon: "energy",
      title: "Energy",
      description:
        "Can you strategically trade crude oil futures by understanding global supply and demand dynamics?",
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
