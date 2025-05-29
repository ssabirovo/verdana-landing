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
    <div className="relative w-full">
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
      </div>
      <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 translate-y-1/2 gap-4">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-10 cursor-pointer rounded-full transition-all duration-300 max-sm:w-5 ${
              index === activeIndex ? 'bg-primary' : 'bg-black opacity-10'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
