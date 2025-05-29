import React, { useState, useEffect } from 'react';

const CustomCarousel = ({ children }: { children: React.ReactNode[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % children.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [children.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-4">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-5 w-10 rounded-full border-4 border-white transition-all duration-300 max-sm:w-5 ${
              index === activeIndex ? 'bg-primary' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
