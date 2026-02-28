import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img from "./CommentImg/Img5.png";
import img2 from "./CommentImg/Img2.png";
import img3 from "./CommentImg/Img3.png";
import img4 from "./CommentImg/Img4.png";

export default function Comments() {
  return (
    <div className="w-full overflow-hidden relative">
      {/* Background Image */}
      <img
        src={img}
        alt="Customer Comment"
        className="w-full h-[150vh] sm:h-[170vh] md:h-[90vh] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-4">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-6">
          {/* Left Image */}
          <div className="w-[90%] md:w-1/3">
            <img
              src={img2}
              alt="Customer"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Swiper */}
          <div className=" md:w-2/3">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop={true}
              className="w-full"
            >
              <SwiperSlide>
                <img
                  src={img3}
                  alt="Comment 1"
                  className="w-full max-w-sm mx-auto object-cover rounded-lg"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src={img4}
                  alt="Comment 2"
                  className="w-full max-w-sm mx-auto object-cover rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
