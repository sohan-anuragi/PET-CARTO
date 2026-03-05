import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/thumbs";
import { productData } from "./ProductDetailsData";

export default function ProductSwipper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isZoomVisible, setIsZoomVisible] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [activeImage, setActiveImage] = useState(productData[0].images[0]);

  const imageRef = useRef(null);
  const mainSwiperRef = useRef(null);

  const product = productData[0];
  const lensSize = 120;

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();

    setImageSize({
      width: rect.width,
      height: rect.height,
    });

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    x = Math.max(lensSize / 2, Math.min(rect.width - lensSize / 2, x));
    y = Math.max(lensSize / 2, Math.min(rect.height - lensSize / 2, y));

    setZoomPosition({ x, y });
  };

  const handleSlideChange = (swiper) => {
    setActiveImage(product.images[swiper.activeIndex]);
  };

  return (
    <div className=" bg-white py-8 px-4 ">
      <div className="">
        <div className="">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-4">
            <div className="relative flex">
              {/* MAIN IMAGE AREA */}
              <div
                ref={imageRef}
                className="relative bg-gray-100 rounded-lg cursor-crosshair"
                onMouseEnter={() => setIsZoomVisible(true)}
                onMouseLeave={() => setIsZoomVisible(false)}
                onMouseMove={handleMouseMove}
              >
                <Swiper
                  ref={mainSwiperRef}
                  modules={[Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}
                  onSlideChange={handleSlideChange}
                  className="w-[430px] w-[350px] h-[350px] h-[430px]"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`product-${index}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* LENS SQUARE */}
                {/* LENS SQUARE */}
                {isZoomVisible && (
                  <div
                    style={{
                      position: "absolute",
                      width: lensSize,
                      height: lensSize,
                      top: zoomPosition.y - lensSize / 2,
                      left: zoomPosition.x - lensSize / 2,
                      border: "1px solid #ddd",
                      backgroundColor: "rgba(255,255,255,0.3)",
                      pointerEvents: "none",
                      zIndex: 50, // 👈 IMPORTANT FIX
                    }}
                  />
                )}
              </div>

              {/* SIDE ZOOM PREVIEW */}
              {isZoomVisible && imageSize.width > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "100%",
                    marginLeft: "0px",
                    width: "370px",
                    height: "350px",
                    backgroundImage: `url(${activeImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "350%",
                    backgroundPosition: `${
                      (zoomPosition.x / imageSize.width) * 100
                    }% ${(zoomPosition.y / imageSize.height) * 100}%`,
                    border: "1px solid #000",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    backgroundColor: "#fff",
                  }}
                />
              )}
            </div>

            {/* THUMBNAILS */}
            <div className="bg-gray-50 w-[100%] p-4 rounded-lg relative">
              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs]}
                spaceBetween={10}
                slidesPerView={4}
                className="w-full"
                breakpoints={{
                  320: { slidesPerView: 3 },
                  640: { slidesPerView: 4 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() =>
                        mainSwiperRef.current?.swiper?.slideTo(index)
                      }
                      className="cursor-pointer rounded-md overflow-hidden border-2 border-transparent hover:border-gray-400 transition"
                    >
                      <img
                        src={image}
                        alt={`thumb-${index}`}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* CUSTOM ARROWS */}
              <button
                onClick={() => thumbsSwiper?.slidePrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 ml-[-0.6rem] rounded-full p-2"
              >
                <IoIosArrowBack size={20} />
              </button>

              <button
                onClick={() => thumbsSwiper?.slideNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 mr-[-0.6rem] rounded-full p-2"
              >
                <IoIosArrowForward size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
