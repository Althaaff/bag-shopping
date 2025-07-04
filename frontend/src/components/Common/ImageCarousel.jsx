import React, { useRef } from "react";
import { useState, useEffect } from "react";

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  let autoSlideInterval = useRef(null);
  let autoSlideTimeOut = useRef(null);

  // function to start auto sliding :
  function startAutoSlide() {
    // console.log(autoSlideInterval.current === null);

    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }

    autoSlideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, interval);
  }

  // function to stop auto sliding :
  function stopAutoSlide() {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }

    if (autoSlideTimeOut.current) {
      clearTimeout(autoSlideTimeOut.current);
    }

    autoSlideTimeOut.current = setTimeout(() => {
      startAutoSlide();
    }, 3000);
  }

  useEffect(() => {
    startAutoSlide();

    // cleanup on mount :
    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }

      if (autoSlideTimeOut.current) {
        clearTimeout(autoSlideTimeOut.current);
      }
    };
  }, [totalImages, interval]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    stopAutoSlide();
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    stopAutoSlide();
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => {
          return (
            <img
              src={src}
              key={index}
              alt={`Slide-${index}`}
              className="object-cover w-full"
            />
          );
        })}
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute left-[20px] top-1/2 transform -translate-y-1/2 bg-white px-3.5 py-2 rounded-full shadow font-bold text-orange-400"
      >
        &lt;
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-[20px] top-1/2 transform -translate-y-1/2 bg-white px-3.5 py-2 rounded-full shadow font-bold text-orange-400"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
//
