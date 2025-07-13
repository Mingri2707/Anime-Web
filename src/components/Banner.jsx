import React, { useState } from "react";

const images = [
  "/public/Logo.png",
  "/public/Mavuika.png",
  "/public/N&F.jpg",
  "/public/can-a-boy-girl-friendship-survive-himari-yu-4k-wallpaper-uhdpaper.com-756@5@e.jpg",
]; // Thay bằng ảnh thật

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative w-full h-[400px] overflow-hidden group">
      {/* Ảnh hiện tại */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Nút Previous */}
      <button
        className="absolute top-0 left-0 h-full w-10 flex items-center justify-center
             bg-transparent bg-opacity-0 text-gray-600
             hover:bg-opacity-30 bg-gray-700 hover:text-white transition-all duration-300"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Nút Next */}
      <button
        className="absolute top-0 right-0 h-full w-10 flex items-center justify-center
             bg-transparent bg-opacity-0 text-gray-600
             hover:bg-opacity-30 bg-gray-700 hover:text-white transition-all duration-300"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Banner;
