
import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUsSection = () => {
  const features = [
    {
      id:'21wq',
      icon: "faMoneyCheckAlt ",
      title: "Daily Pay",
      description:
        "Withdraw your earnings daily, no waiting periods.",
    },
    {
      id:'21eq',
      icon: "money",
      title: "No Sign-Up Fees",
      description:
        "We only focus on your trading skills—no upfront costs.",
    },
    {
      id:'21xq',
      icon: "faGlobe",
      title: "Work Remotely",
      description:
        "Trade from anywhere in Lagos or Port Harcourt..",
    },
    {
      id:'21cv',
      icon: "faTrophy",
      title: "100% Performance-Based Earnings",
      description: "The better you trade, the more you earn.",
    },
    {
      id:'21cvsd',
      icon: "faBookOpen",
      title: "Access to Trading Resources",
      description: "We provide support and insights to help you improve.",
    },

    

  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#001f3f] mb-12">
          Why You Should Apply
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <WhyChooseUsCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
