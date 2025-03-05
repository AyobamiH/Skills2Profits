
import React from "react";

const FAQNavigation = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <nav className="sticky top-0 bg-white p-4 shadow-md">
      <ul className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-[#27ff4f] text-gray-700"
                  : "bg-[#b3fcc0] text-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FAQNavigation;
