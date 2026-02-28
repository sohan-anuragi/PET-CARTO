import React from "react";
import brand1 from "./OurBrandImg/brand_1.png";
import brand2 from "./OurBrandImg/brand_2.png";
import brand3 from "./OurBrandImg/brand_3.png";
import brand4 from "./OurBrandImg/brand_4.png";
import brand5 from "./OurBrandImg/brand_5.png";

// Brands data
const brandsData = [
  {
    id: 1,
    image: brand1,
    name: "Earth Pawtrol",
  },
  {
    id: 2,
    image: brand2,
    name: "Animal Earth Co.",
  },
  {
    id: 3,
    image: brand3,
    name: "Wag & Root",
  },
  {
    id: 4,
    image: brand4,
    name: "Paw & Planet",
  },
  {
    id: 5,
    image: brand5,
    name: "The Primal P",
  },
];

export default function OurBrand() {
  return (
    <div className="w-full py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          Our Brands
        </h2>

        <div className="w-full h-px bg-gray-200 mb-8"></div>

        {/* 🔥 Scroll Container */}
        <div className="overflow-x-auto">
          {/* Inner Flex */}
          <div className="flex gap-8 w-max">
            {brandsData.map((brand) => (
              <div
                key={brand.id}
                className="bg-white border border-gray-200 
                       rounded-xl p-6 
                       w-[18rem] flex-shrink-0 mb-[1rem]
                       flex flex-col items-center justify-center 
                       hover:shadow-lg transition-shadow duration-300 
                       cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-center text-base font-semibold text-gray-800">
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
