import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function TopDeals() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 rounded-md bg-[#f7f5f5] hover:bg-gray-200"
      >
        <span className="flex items-center">
          <span className="font-semibold text-lg">Top Deals</span>
          {/* <span className="text-xs ml-2 bg-red-500 text-white px-2 py-1 rounded font-bold">
            Hot
          </span> */}
        </span>

        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}
