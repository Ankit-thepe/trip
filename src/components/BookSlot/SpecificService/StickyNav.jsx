// src/components/BookSlot/SpecificService/StickyNav.jsx
import React from 'react';

const StickyNav = ({ serviceCategories }) => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100; // Adjust -100 for sticky nav height

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="sticky top-16 bg-white z-30 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-center space-x-4 sm:space-x-8 overflow-x-auto py-3">
          {serviceCategories.map((category) => (
            <a
              key={category}
              href={`#${category.replace(/\s+/g, '-')}`}
              onClick={(e) => handleScroll(e, category.replace(/\s+/g, '-'))}
              className="text-sm sm:text-base font-semibold text-gray-600 hover:text-teal-600 transition-colors whitespace-nowrap"
            >
              {category}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default StickyNav;