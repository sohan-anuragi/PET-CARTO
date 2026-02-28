import React from "react";
import { Link } from "react-router-dom";

const img1 = new URL("./QuickProductsImg/img1.png", import.meta.url).href;
const img2 = new URL("./QuickProductsImg/img3.png", import.meta.url).href;
const img3 = new URL("./QuickProductsImg/img2.png", import.meta.url).href;

const QuickProducts = () => {
  const quickProductsData = [
    {
      id: 1,
      title: "Dog & Cat Food",
      startingFrom: "$39",
      image: img1,
      bgColor: "bg-purple-500",
      link: "/shop",
    },
    {
      id: 2,
      title: "Probiotics & Digestion",
      startingFrom: "$19",
      image: img2,
      bgColor: "bg-orange-500",
      link: "/shop",
    },
    {
      id: 3,
      title: "Organic Pet Food",
      startingFrom: "$69",
      image: img3,
      bgColor: "bg-green-500",
      link: "/shop",
    },
  ];

  return (
    <div className="py-12 px-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {quickProductsData.map((product) => (
          <Link key={product.id} to={product.link}>
            <div
              className={`${product.bgColor} rounded-3xl p-8 h-64 flex items-center justify-between cursor-pointer hover:shadow-xl transition-shadow duration-300 group overflow-hidden`}
            >
              {/* Left Content */}
              <div className="flex flex-col justify-between h-full text-white z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">{product.title}</h3>
                  <p className="text-sm font-semibold mb-2">Starting From</p>
                  <p className="text-3xl font-bold">{product.startingFrom}</p>
                </div>
                <button className="text-base font-semibold underline hover:no-underline transition-all">
                  Shop Now
                </button>
              </div>

              {/* Right Image */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickProducts;
