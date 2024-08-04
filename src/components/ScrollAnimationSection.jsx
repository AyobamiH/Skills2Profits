import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimationSection = ({ children, initial, animate, transition }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={transition}
      className="scroll-animation-section"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationSection;
