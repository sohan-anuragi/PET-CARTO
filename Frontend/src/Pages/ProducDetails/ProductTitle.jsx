import React, { useState, useEffect } from "react";
import { productData } from "./ProductDetailsData";
import paymentImg from "./ProductDetailImg/payment.png";
import { FiShoppingCart, FiHeart, FiShare2, FiEye } from "react-icons/fi";
import { MdCompareArrows } from "react-icons/md";
import { AiOutlineQuestion } from "react-icons/ai";

export default function ProductTitle() {
  const product = productData[0]; // Get first product from data
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("100g");
  const [timeLeft, setTimeLeft] = useState({
    days: 695,
    hours: 21,
    minutes: 13,
    seconds: 27,
  });

  // Countdown Timer useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-4 sm:p-6 lg:p-8">
      {/* Discount Badge */}
      <div className="inline-block bg-blue-900 text-white px-2 py-1 rounded text-xs font-bold mb-4">
        -30%
      </div>

      {/* Brand */}
      <p className="text-gray-500 text-sm mb-2">Brand: Golden</p>

      {/* Product Title */}
      <h1 className="text-xl sm:text-2xl  font-semibold text-gray-900 mb-3">
        {product.title}
      </h1>

      {/* Price and Rating */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[1.2rem] text-[#050540]">
          ${14} – ${20}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <span className="text-gray-600 text-xs">(1 review)</span>
        </div>
      </div>

      {/* Selling Fast Badge */}
      <div className="bg-red-50 border border-red-200 rounded p-3 mb-4 flex items-center gap-2">
        <span className="text-red-600 font-bold text-lg">🔥</span>
        <span className="text-red-600 text-sm font-semibold">
          Selling fast! Over 11 people have in their cart
        </span>
      </div>

      {/* Features List */}
      <ul className="list-disc list-inside mb-6 text-sm text-gray-700 space-y-1">
        <li>Promotes Healthy Muscle Growth.</li>
        <li>Improves Bone And Joint Health.</li>
        <li>Promotes Better Digestibility And Health Of Your Pet</li>
      </ul>

      {/* Countdown Timer */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-900 mb-3">
          Hurry up ! Sale end in:
        </p>
        <div className="flex gap-2 sm:gap-3 w-[50%] h-[50%]">
          <div className="flex-1 border border-gray-300 rounded p-2 text-center">
            <div className="text-lg  font-bold text-gray-900">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-600 mt-1">DAYS</div>
          </div>
          <div className="flex-1 border border-gray-300 rounded p-2 text-center">
            <div className="text-lg  font-semibold text-gray-900">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-600 mt-1">HRS</div>
          </div>
          <div className="flex-1 border border-gray-300 rounded p-2 text-center">
            <div className="text-lg font-semibold text-gray-900">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-600 mt-1">MIN</div>
          </div>
          <div className="flex-1 border border-gray-300 rounded p-2 text-center">
            <div className="text-lg font-semibold text-red-600">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-600 mt-1">SEC</div>
          </div>
        </div>
      </div>

      {/* Weight Selector */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-900 mb-3">Weight</p>
        <div className="flex gap-3">
          {["100g", "250g"].map((weight) => (
            <button
              key={weight}
              onClick={() => setSelectedWeight(weight)}
              className={`px-4 py-2 border rounded font-semibold text-sm transition ${
                selectedWeight === weight
                  ? "border-blue-900 bg-blue-50 text-blue-900"
                  : "border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              {weight}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Button */}
      <button className="text-blue-600 text-sm font-semibold mb-6 hover:underline">
        ✕ Clear
      </button>

      {/* Price Display */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-gray-500 line-through text-lg">${20}</span>
        <span className="text-2xl sm:text-3xl font-bold text-gray-900">
          ${14}
        </span>
      </div>

      {/* Quantity Selector */}
      <div className="flex flex-col lg:flex-row items-center gap-3 mb-6">
        <div className="flex">
          <button
            onClick={() => handleQuantityChange("decrease")}
            className="w-6 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 font-bold text-lg"
          >
            −
          </button>
          <span className="text-lg font-semibold w-8 text-center">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange("increase")}
            className="w-6 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 font-bold text-lg"
          >
            +
          </button>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button className="flex-1 bg-blue-900 w-[18rem] text-white py-2 rounded font-semibold hover:bg-blue-800 transition">
            Add To Cart
          </button>
          <button className="flex-1 bg-blue-900 text-white py-2 rounded font-semibold hover:bg-blue-800 transition">
            Buy Now
          </button>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 text-sm text-gray-700">
        <button className="flex items-center gap-2 hover:text-blue-900 transition">
          <MdCompareArrows size={18} />
          <span>Compare</span>
        </button>
        <button className="flex items-center gap-2 hover:text-blue-900 transition">
          <FiHeart size={18} />
          <span>Wishlist</span>
        </button>
        <button className="flex items-center gap-2 hover:text-blue-900 transition">
          <AiOutlineQuestion size={18} />
          <span>Ask Us</span>
        </button>
        <button className="flex items-center gap-2 hover:text-blue-900 transition">
          <FiShare2 size={18} />
          <span>Share</span>
        </button>
      </div>

      {/* View Counter */}
      <div className="flex items-center gap-2 text-gray-700 text-sm mb-6">
        <FiEye size={18} />
        <span>26 people are viewing this right now</span>
      </div>

      {/* Delivery Information */}
      <div className="flex items-center  mb-6 text-sm text-gray-700">
        <div className="flex items-start gap-2">
          <span className="text-lg">📍</span>
          <div>
            <p className="font-semibold">Estimated Delivery</p>
            <p>Up to 4 business days</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-lg">📦</span>
          <div>
            <p className="font-semibold">Free Shipping & Returns</p>
            <p>On all orders over $200</p>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="border-t bg-gray-100 pt-6">
        <p className="text-sm font-semibold text-gray-900 text-center mb-4">
          Guaranteed Safe And Secure Checkout
        </p>
        <img
          src={paymentImg}
          alt="Payment Methods"
          className="w-full h-auto max-w-xs mx-auto"
        />
      </div>
    </div>
  );
}
