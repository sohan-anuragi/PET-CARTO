import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaCheck,
  FaEye,
} from "react-icons/fa";

import { WeekDealProducts } from "./WeekDealData";

const WeekDeal = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="py-8 px-4">
      <div className="relative group">
        <Swiper
          key="weekDeal"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={4}
          spaceBetween={20}
          loop={false}
          pagination={false}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            900: { slidesPerView: 3, spaceBetween: 18 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {WeekDealProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto hover:bg-gray-900"
          aria-label="Previous slide"
        >
          <FaArrowLeft className="text-sm" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto hover:bg-gray-900"
          aria-label="Next slide"
        >
          <FaArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.image);
  const [isHovered, setIsHovered] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 719,
    hours: 10,
    minutes: 54,
    seconds: 35,
  });

  const handleMouseEnter = () => {
    setCurrentImage(product.hoverImage);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setCurrentImage(product.image);
    setIsHovered(false);
  };

  useEffect(() => {
    setCurrentImage(product.image);
  }, [product.image]);

  // Countdown Timer Effect
  useEffect(() => {
    if (!product.countdown) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(interval);
          return prev;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [product.countdown]);

  return (
    <div className="bg-white border border-gray-200 rounded-xl relative hover:shadow-lg transition-shadow duration-300 overflow-hidden w-full h-full flex flex-col">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-3 right-3 bg-blue-900 text-white text-xs font-semibold px-2 py-1 rounded z-10">
          -{product.discount}%
        </div>
      )}

      {/* Image Section */}
      <div
        className="relative h-[19rem] flex items-center justify-center mb-3 overflow-hidden rounded-lg bg-gray-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={currentImage}
          alt={product.title}
          className="max-h-full max-w-full object-contain transition-opacity duration-300"
        />

        {/* Action Icons */}
        <div
          className={`absolute top-3 left-3 flex flex-col gap-2 transition-opacity duration-300 pointer-events-none ${
            isHovered ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
        >
          <ActionIcon icon={FaHeart} label="Wishlist" />
          <ActionIcon icon={FaCheck} label="Compare" />
          <ActionIcon icon={FaEye} label="Quick View" />
        </div>

        {/* Countdown Timer */}
        {product.countdown && (
          <div
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center gap-1 mb-3 transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            <CountdownBox value={countdown.days} label="DAYS" isRed={false} />
            <CountdownBox value={countdown.hours} label="HRS" isRed={false} />
            <CountdownBox value={countdown.minutes} label="MIN" isRed={false} />
            <CountdownBox value={countdown.seconds} label="SEC" isRed={true} />
          </div>
        )}
      </div>

      {/* Product Title */}

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-gray-800 font-medium text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </h3>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-2">
          <StarRating rating={product.rating} />
        </div>

        {/* Price */}
        <div className="mb-3">
          {product.priceRange ? (
            <p className="text-lg font-bold text-gray-900">
              ${product.priceRange.min} – ${product.priceRange.max}
            </p>
          ) : (
            <p className="text-lg font-bold text-gray-900">${product.price}</p>
          )}
        </div>

        {/* Button */}
        <button className="w-full py-2.5 border border-gray-300 hover:text-[white] hover:bg-[#0a0a4e] text-gray-800 font-medium text-sm rounded transition-colors duration-200 mt-auto">
          {product.buttonText}
        </button>
      </div>
    </div>
  );
};

// Star Rating Component
const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-400 text-sm" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-sm" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400 text-sm" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

// Countdown Box Component
const CountdownBox = ({ value, label, isRed }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 px-2 py-1 rounded text-center">
      <span
        className={`text-xs font-bold ${isRed ? "text-red-500" : "text-gray-900"}`}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] text-gray-600 uppercase">{label}</span>
    </div>
  );
};

// Action Icon Component
const ActionIcon = ({ icon: Icon, label }) => {
  return (
    <button
      type="button"
      className="bg-white hover:bg-gray-100 text-gray-700 p-2 rounded-md shadow-sm transition-colors duration-200 cursor-pointer"
      aria-label={label}
      title={label}
    >
      <Icon className="text-sm" />
    </button>
  );
};

export default WeekDeal;
