import React, { useState, useEffect } from 'react';
import './BlogsStyle.css';

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: 'algotrading.png', alt: 'Image 1' },
    { src: 'prosandcons.png', alt: 'Image 2' },
    { src: 'howalgotradingworks.jpeg', alt: 'Image 3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="blogs">
      <div
        className="slider-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="info">
              <span className="category">Fashion</span>
              <h2>New York fashion week's continued the evolution</h2>
              <p>2 days ago</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow-left" onClick={prevSlide}>&#10094;</div>
      <div className="arrow-right" onClick={nextSlide}>&#10095;</div>
    </div>
  );
};

export default Blogs;
