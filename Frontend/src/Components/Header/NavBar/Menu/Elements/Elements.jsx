import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import elementsList from "./ElementsData";

export default function Elements() {
  // State to toggle Elements menu
  const [isElementsOpen, setIsElementsOpen] = useState(false);

  // Toggle Elements menu
  const toggleElements = () => {
    setIsElementsOpen(!isElementsOpen);
  };

  return (
    <div className="w-full">
      {/* Main Elements Button */}
      <button
        onClick={toggleElements}
        className="w-full flex items-center justify-between p-4 rounded-md bg-[#f7f5f5] hover:bg-gray-200"
      >
        <span className="font-semibold text-lg">Elements</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isElementsOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Elements Menu */}
      {isElementsOpen && (
        <div className="bg-white">
          {elementsList.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="flex items-center justify-between p-4 hover:bg-gray-50 border-b"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">{item.title}</span>

                {/* Badge */}
                {item.badge && (
                  <span
                    className={`text-xs text-white px-2 py-1 rounded font-bold ${
                      item.badge.type === "pink"
                        ? "bg-pink-500"
                        : item.badge.type === "blue"
                          ? "bg-blue-500"
                          : "bg-gray-500"
                    }`}
                  >
                    {item.badge.text}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
