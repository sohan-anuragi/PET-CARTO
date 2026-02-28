import React, { useState, useEffect } from "react";

const brandImage = new URL("./FavoriteBrandImg.png", import.meta.url).href;

const FavoriteBrands = () => {
  const [time, setTime] = useState({
    days: 640,
    hours: 16,
    minutes: 8,
    seconds: 37,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
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
  }, []);

  return (
    <div className="relative w-full h-80 sm:h-96 md:h-[450px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <img
        src={brandImage}
        alt="Favorite Brands"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-sm sm:text-base md:text-lg font-semibold text-purple-700 mb-2">
          Up to 50% OFF!
        </p>

        <h1 className="text-1xl sm:text-2xl md:3xl  font-semibold text-gray-900 mb-6 leading-tight">
          All your Pet's <br /> Favourite Brands!
        </h1>

        {/* Countdown */}
        <div className="flex gap-3 flex-wrap justify-center mb-6">
          {[
            { label: "DAYS", value: String(time.days).padStart(3, "0") },
            { label: "HOURS", value: String(time.hours).padStart(2, "0") },
            { label: "MINS", value: String(time.minutes).padStart(2, "0") },
            {
              label: "SECS",
              value: String(time.seconds).padStart(2, "0"),
              red: true,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg px-4 py-2 flex flex-col items-center"
            >
              <span
                className={`text-lg sm:text-xl font-bold ${
                  item.red ? "text-red-600" : "text-gray-900"
                }`}
              >
                {item.value}
              </span>
              <span className="text-xs font-semibold text-gray-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <button className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default FavoriteBrands;
