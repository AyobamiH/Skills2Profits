import { motion } from "framer-motion";


const CommitmentSection = () => {
  return (
    <section className="py-16 bg-gray-100">

 
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay:0.6 }}
        >
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 md:pl-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#001f3f] mb-4">Commitment to Traders</h2>
            
            <h4 className="text-2xl font-normal w-fit text-[#f1c40f] bg-[#001f3f] mb-4">Empowering Skilled Traders to Earn Daily</h4>
            <p className="text-[#001f3f]">We are committed to providing fair opportunities for traders who want to earn from their skills. Whether you're trading full-time or part-time, our platform gives you control over your earnings.</p>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ x: 50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/fintradethree.webp"
              alt="Our team at work"
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentSection;
