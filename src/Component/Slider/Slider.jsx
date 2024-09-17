import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);

  if (totalItems === 0) return null; // Don't render anything if there are no children

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
    );
  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={prevSlide}>‹</button>
      <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {children}
      </div>
      <button className="slider-button next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Slider;
