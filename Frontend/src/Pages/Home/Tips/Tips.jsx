import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import images
import img1 from "./TipsImg/blog-13.jpg";
import img2 from "./TipsImg/blog-14.jpg";
import img3 from "./TipsImg/blog-15.jpg";
import img4 from "./TipsImg/blog-16.jpg";
import img5 from "./TipsImg/blog-17.jpg";
import img6 from "./TipsImg/blog-18.jpg";

// Tips data array
const tipsData = [
  {
    id: 1,
    image: img1,
    title: "50 Best Sales Questions to Determine Your Customer's Needs",
    description:
      "The unconventional guide to the software applications. Why do people think business software is a good...",
  },
  {
    id: 2,
    image: img2,
    title: "6 Simple Ways To Boost Your Ecommerce Conversion Rate",
    description:
      "The best ways to utilize interview techniques. 18 things your boss expects you know about famous...",
  },
  {
    id: 3,
    image: img3,
    title: "9 Customer Experience Trends That'll Define the Next Year",
    description:
      "The oddest place you will find financial reports. Will businesses ever rule the world That insane...",
  },
  {
    id: 4,
    image: img4,
    title: "Essential Tips for Growing Your Pet Care Business",
    description:
      "Discover proven strategies to expand your pet care services and attract more loyal customers to your business...",
  },
  {
    id: 5,
    image: img5,
    title: "Understanding Pet Nutrition: A Complete Guide",
    description:
      "Learn everything you need to know about proper pet nutrition and how to choose the best food for your pets...",
  },
  {
    id: 6,
    image: img6,
    title: "Creating a Safe and Fun Environment for Your Pets",
    description:
      "Expert advice on setting up the perfect living space that keeps your furry friends happy, healthy and safe...",
  },
];

export default function TipsSwiper() {
  const swiperRef = useRef(null);

  // Handle previous button click
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  // Handle next button click
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="w-full py-12 px-4 bg-gray-50">
      {/* Section Header */}
      <div className=" mb-8">
        <h4 className="text-3xl font-semibold p-[1rem]  border-b-[1px] border-gray-300 text-gray-800 mb-2">
          Our Latest Helpful Tips & Advice
        </h4>
      </div>

      {/* Swiper Container with Navigation */}
      <div className="max-w-7xl mx-auto relative">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {tipsData.map((tip) => (
            <SwiperSlide key={tip.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  {/* Date and Author (optional) */}
                  <p className="text-sm text-gray-500 mb-3">
                    February 3, 2024 • by Editor
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                    {tip.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {tip.description}
                  </p>

                  {/* Read More Button */}
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <FaArrowLeft className="text-xl" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
}
