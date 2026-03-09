import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaBone } from "react-icons/fa";

import img111 from "./AboutUsImg/img111.webp";
import img112 from "./AboutUsImg/img112.webp";
import img113 from "./AboutUsImg/img113.avif";
import img114 from "./AboutUsImg/img114.avif";
import img115 from "./AboutUsImg/img115.webp";

const valuesData = [
  {
    id: 1,
    title: "Joy",
    text: "Joy lies at the heart of everything we do. We focus on creating happy moments for our team, our customers, and the pets that make every day better.",
    image: img111,
  },
  {
    id: 2,
    title: "Innovation",
    text: "Innovation drives us to improve constantly. We explore new ideas and smarter solutions to create better experiences for customers and their pets.",
    image: img112,
  },
  {
    id: 3,
    title: "Impact",
    text: "Impact means making a real difference. Our work is focused on improving the lives of pets and building meaningful value for every customer.",
    image: img113,
  },
  {
    id: 4,
    title: "Trust",
    text: "Trust is the foundation of every relationship we build. We stay honest, reliable, and committed to delivering the best for pets and families.",
    image: img114,
  },
  {
    id: 5,
    title: "Care",
    text: "Care guides everything we create and deliver. We believe pets deserve comfort, attention, and products that support their health and happiness.",
    image: img115,
  },
];

export default function Component11() {
  return (
    <section className="w-full bg-[#fff2ee] px-6 py-6 ">
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-black uppercase leading-none tracking-tight text-[#2e2f33]">
            OUR <span className="text-[#f28c38]">VALUES</span>
          </h2>

          {/* Decorative Divider */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`dot-left-${i}`}
                  className="h-1 w-1 rounded-full bg-[#f28c38]"
                />
              ))}
            </div>
            <span className="text-[1.2rem] text-[#ff8400]">
              {" "}
              <FaBone />
            </span>

            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`dot-right-${i}`}
                  className="h-1 w-1 rounded-full bg-[#f28c38]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative pb-12">
          <Swiper
            modules={[Pagination]}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            className="values-swiper"
          >
            {valuesData.map((value) => (
              <SwiperSlide
                key={value.id}
                className="!w-[300px] sm:!w-[360px] lg:!w-[420px]"
              >
                <div className="mx-auto w-full max-h-[25rem] min-h-[25rem] pb-8 pt-20 transition-all duration-500">
                  {/* Dog Image - Floating above card */}
                  <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="h-auto w-[110px] object-contain drop-shadow-lg"
                    />
                  </div>

                  {/* Card */}
                  <div className="relative rounded-lg border-b-4 border-[#f28c38] bg-white px-6 pb-6 pt-16 shadow-md transition-all duration-300 hover:-translate-y-2">
                    {/* Title */}
                    <h3 className="mb-4 text-center text-[1.5rem] font-semibold text-[#1f2937]">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-center text-[1.1rem] leading-relaxed text-gray-600">
                      {value.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-pagination mt-8 flex items-center justify-center gap-2" />
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Active slide lift effect */
        :global(.values-swiper .swiper-slide-active) {
          transform: translateY(-4rem);
        }

        :global(.values-swiper .swiper-slide) {
          transition: transform 0.5s ease;
        }

        /* Custom Pagination Bars */
        .custom-pagination :global(.swiper-pagination-bullet) {
          width: 20px;
          height: 4px;
          border-radius: 2px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 4px;
        }

        .custom-pagination :global(.swiper-pagination-bullet-active) {
          width: 30px;
          background: #f28c38;
        }
      `}</style>
    </section>
  );
}
