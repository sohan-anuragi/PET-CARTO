import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

import cat1 from "./swipperimg/cat_1.jpg";
import cat2 from "./swipperimg/cat_2.jpg";
import cat3 from "./swipperimg/cat_3.jpg";
import cat4 from "./swipperimg/cat_4.jpg";
import cat5 from "./swipperimg/cat_5.jpg";
import cat6 from "./swipperimg/cat_6.jpg";
import cat7 from "./swipperimg/cat_7.jpg";
import cat8 from "./swipperimg/cat_8.jpg";
import cat9 from "./swipperimg/cat_9.jpg";
import cat10 from "./swipperimg/cat_10.jpg";

const slides = [
  {
    id: 1,
    title: "Dogs Foods",
    count: "13 Products",
    image: cat1,
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "Pet Supplies",
    count: "10 Products",
    image: cat2,
    bgColor: "bg-orange-100",
  },
  {
    id: 3,
    title: "Cat Trees",
    count: "7 Products",
    image: cat3,
    bgColor: "bg-purple-100",
  },
  {
    id: 4,
    title: "Fountains",
    count: "7 Products",
    image: cat4,
    bgColor: "bg-green-100",
  },
  {
    id: 5,
    title: "Cat Collars",
    count: "7 Products",
    image: cat5,
    bgColor: "bg-blue-100",
  },
  {
    id: 6,
    title: "Sweaters",
    count: "6 Products",
    image: cat6,
    bgColor: "bg-lime-100",
  },
  {
    id: 7,
    title: "Shirts",
    count: "6 Products",
    image: cat7,
    bgColor: "bg-orange-100",
  },
  {
    id: 8,
    title: "Pet Toys",
    count: "9 Products",
    image: cat8,
    bgColor: "bg-pink-100",
  },
  {
    id: 9,
    title: "Bowls",
    count: "5 Products",
    image: cat9,
    bgColor: "bg-cyan-100",
  },
  {
    id: 10,
    title: "Beds",
    count: "8 Products",
    image: cat10,
    bgColor: "bg-yellow-100",
  },
];

const HomeSwipper = () => {
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
    <div className="relative mt-[5rem] px-[1rem] group">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={4}
        spaceBetween={24}
        loop={false}
        pagination={false}
        breakpoints={{
          0: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          900: { slidesPerView: 6 },
          1200: { slidesPerView: 7 },
        }}
        className="py-4"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              to="/shop"
              className="block hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center gap-3">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-[2rem]"
                />

                {/* Text */}
                <div className="text-center space-y-1">
                  <p className="text-base font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">{item.count} </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-[#353535ce] shadow-md flex items-center justify-center text-[white] font-bold hover:bg-[#0e0e0e] opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto"
        aria-label="Previous slide"
      >
        <IoIosArrowBack className="text-base" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-[#353535ce] shadow-md flex items-center justify-center text-[white] font-bold hover:bg-[#0e0e0e] opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto"
        aria-label="Next slide"
      >
        <MdArrowForwardIos className="text-base" />
      </button>
    </div>
  );
};

export default HomeSwipper;
