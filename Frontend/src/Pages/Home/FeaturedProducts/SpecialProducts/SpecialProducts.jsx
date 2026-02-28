import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import { petToysProducts } from "../../Products/PetToys/PetToysData";

const SpecialProducts = () => {
  const swiperRef = useRef(null);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400 text-sm" />,
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar key={`empty-${i}`} className="text-gray-300 text-sm" />,
      );
    }

    return stars;
  };

  // 3 products per slide
  const groupedProducts = [];
  for (let i = 0; i < petToysProducts.length; i += 3) {
    groupedProducts.push(petToysProducts.slice(i, i + 3));
  }

  return (
    <div className="w-full py-10 px-4 group relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {groupedProducts.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-6">
              {group.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />

                  <div>
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                    <p className="text-gray-500 text-sm">{product.category}</p>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 my-2">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-600 ml-1">
                        ({product.rating})
                      </span>
                    </div>

                    <p className="font-bold text-purple-600">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hover Arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#0f0f71] text-white shadow-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-10"
      >
        ◀
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#0b0b59] text-white shadow-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-10"
      >
        ▶
      </button>
    </div>
  );
};

export default SpecialProducts;
