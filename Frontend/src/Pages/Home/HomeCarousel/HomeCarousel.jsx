import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "./CarouselImg/img1.png";
import img2 from "./CarouselImg/img2.jpg";

const slides = [
  {
    id: 1,
    image: img1,
    tag: "WEEKEND OFFER!",
    heading: "Cute Pets, Happy Hearts!",
    description: "Clearance event packed with savings your pet deserves",
    button: "Shop Now",
  },
  {
    id: 2,
    image: img2,
    tag: "UP TO 50% OFF!",
    heading: "The clearance sales event",
    description:
      "Fuel your dog with the gold standard of performance nutrition",
    button: "Shop Now",
  },
];

export default function HomeCarousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-auto">
              {/* Image */}
              <img
                src={slide.image}
                alt="carousel"
                className="w-full h-auto block"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-start">
                <div
                  className="px-4 sm:px-8 md:px-12 lg:px-20 
                  text-left z-10 
                  w-full max-w-[90%] sm:max-w-[70%] md:max-w-[80%]
                  scale-50 origin-left"
                >
                  {/* Tag */}
                  <p className="font-semibold text-gray-800 mb-2 text-[clamp(8px,2vw,14px)]">
                    {slide.tag}
                  </p>

                  {/* Heading */}
                  <h1 className="font-bold text-gray-900 mb-4 leading-tight text-[clamp(16px,5vw,56px)]">
                    {slide.heading}
                  </h1>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 text-[clamp(10px,2.5vw,18px)]">
                    {slide.description}
                  </p>

                  {/* Button */}
                  <button
                    className="bg-[#0b2e5c] text-white font-semibold 
      px-[clamp(12px,3vw,24px)] 
      py-[clamp(6px,1.5vw,12px)] 
      text-[clamp(10px,2vw,16px)] 
      rounded hover:bg-blue-900 transition"
                  >
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
