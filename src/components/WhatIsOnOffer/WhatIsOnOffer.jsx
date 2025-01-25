import { motion } from "framer-motion";


const WhatIsOnOffer = () => {
  return (
    <section className="py-16 bg-beige">

 
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col  md:flex-row items-center"
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
            <h2 className="text-3xl font-bold text-[#001f3f] mb-4">What Is On Offer?</h2>
            <h4 className="text-2xl font-normal w-fit text-[#f1c40f] bg-[#001f3f]  mb-4">No Recruitment Fees. No Gimmicks. Just Real Opportunities.</h4>
            

            <ul className="mt-12">
              <li className="text-[#001f3f] mb-2">Daily Payouts</li> 
              <li className="text-[#001f3f] mb-2">Performance-Based Earnings</li>
              <li className="text-[#001f3f] mb-2">Access to High-Liquidity Markets</li>
              <li>Trade from Anywhere in Lagos or Port Harcourt</li>
            </ul>


            





          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/fintradetwo.webp"
              alt="financial trading imagery"
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsOnOffer;
