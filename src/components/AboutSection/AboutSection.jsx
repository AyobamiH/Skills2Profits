import { motion } from "framer-motion";


const AboutSection = () => {
  return (
    <section className="py-16 bg-beige">

 
      <div id="about" className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#001f3f] mb-4">About</h2>
            <h4 className="text-2xl font-normal w-fit text-[#f1c40f] bg-[#001f3f] mb-4">Bridging The Gap!</h4>
            <p className="text-[#001f3f] mb-4">
              The mission is to bridge the gap between talent and opportunity by offering a sponsorship program to foster financial growth and development, ensuring that talented individuals have the chance to thrive in the competitive world of trading. 
            
            </p >
          
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/fintradetwo.webp"
              alt="Our team at work"
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
