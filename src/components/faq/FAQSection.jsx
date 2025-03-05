


import React, { useState } from "react";
import FAQSearch from "../faq/FAQSearch";

import FAQNavigation from "../faq/FAQNavigation";


const categories = [
  "Getting Started",
  "Payment and Earnings",
  "Costs and Investments",
  "Trading Markets",
  "Skill Development",
  "Platform Features",
  "Improving Trading Skills",
  "Liquidity Trading"
];

const faqData = {
  "Getting Started": [
    {
      question: "How can I start earning daily as a trader?",
      answer: "Getting started is simple! Sign up and wait for request to showcase your trading expertise. Once approved, you can start trading your skills for profits and receive daily/weekly payouts."
    }
  ],
  "Payment and Earnings": [
    {
      question: "How does payment work?",
      answer: "✅ Daily/Weekly payouts based on your trading results.\n✅ Secure payment channels (local bank transfers available in Lagos & Port Harcourt).\n✅ No sign-up fees or hidden charges – you earn based on your trading skills!"
    }
  ],
  
  "Costs and Investments": [
    {
      question: "How much money do I need to start?",
      answer: "None! There’s no upfront cost to start earning. If you already know how to trade, you can start monetizing your skills immediately."
    }
  ],
  "Trading Markets": [
    {
      question: "Which trading markets are most profitable?",
      answer: "It depends on your expertise! Our traders specialize in:\n📈 Forex (USD, GBP, EUR pairs, etc.)\n📉 Stock & Index Trading (NASDAQ, S&P 500, etc.)\n💰 Crypto Trading (Bitcoin, Ethereum, etc.)\n⚡ Liquidity Trading (High-frequency, quick profit trades)"
    }
  ],
  
  "Skill Development": [
    {
      question: "How do I become a highly skilled trader?",
      answer: "Mastery comes from:\n✅ Consistent practice & market research\n✅ Learning from experienced traders\n✅ Joining exclusive trading communities (available on our platform!)"
    }
  ],
  "Platform Features": [
    {
      question: "What is the best trading platform for earning daily?",
      answer: "Our platform is specifically designed for skilled traders who want daily payouts based on their trading expertise. No capital needed—just your skills!"
    }
  ],
  "Improving Trading Skills": [
    {
      question: "How can I improve my trading skills?",
      answer: "🚀 Stay ahead with:\n📢 Live market insights & updates\n🤝 Trader community networking\n📈 Advanced strategy training"
    }
  ],
  "Liquidity Trading": [
    {
      question: "What is liquidity trading?",
      answer: "Liquidity trading focuses on high-volume assets that allow for quick buying and selling, maximizing daily profit potential. Many traders on our platform specialize in this strategy."
    }
  ]
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchResults, setSearchResults] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults(null);
      return;
    }

    const results = Object.values(faqData)
      .flat()
      .filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );

    setSearchResults(results);
  };

  const faqsToDisplay = searchResults || faqData[selectedCategory];

  return (
    <section className="bg-beige py-12">

      <div className="container mx-auto px-4 max-w-4xl py-12 bg-[#f0f8ff] lg:bg-white sm:bg-[#f0f8ff]">
        <header className="text-center mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
        Find answers to common questions about financial trading and earning daily in Lagos and Port Harcourt Nigeria.
      </p>
      </header>
      
        
        <FAQNavigation
        categories={categories}
        activeCategory={selectedCategory}
        setActiveCategory={setSelectedCategory}
      />
        <FAQSearch onSearch={handleSearch} />
        <div className="max-w-3xl mx-auto">
          {faqsToDisplay.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 py-4 bg-[#f0f8ff] p-8   sm:bg-white   rounded-lg shadow-lg">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-white rounded-lg focus:ring-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-2xl font-bold mb-4">{faq.question}</h3>
                <p className="font-roboto-mono">{openIndex === index ? "-" : "+"}</p>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg">
                  {faq.answer}
                  
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default FAQSection;
