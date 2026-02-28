import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import categoryData from "./CatagoryData";

export default function Catagory() {
  // State to toggle main Categories menu
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // State to track which categories are open
  const [openCategories, setOpenCategories] = useState({});

  // Toggle main Categories menu
  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  // Toggle category
  const toggleCategory = (id) => {
    setOpenCategories({
      ...openCategories,
      [id]: !openCategories[id],
    });
  };

  return (
    <div className="w-full">
      {/* Main Categories Header */}
      <button
        onClick={toggleCategories}
        className="w-full flex items-center justify-between p-4 rounded-md bg-[#f7f5f5] hover:bg-gray-200"
      >
        <spna>
          <span className="font-semibold text-lg">Categories</span>
          <span className="text-xs ml-[0.5rem] mt-[-1rem] bg-green-500 text-white px-2 py-1 rounded font-bold">
            SALE
          </span>
        </spna>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isCategoriesOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Categories Menu */}
      {isCategoriesOpen && (
        <div className="bg-white">
          {categoryData.map((category) => (
            <div key={category.id} className="border-b">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
              >
                <span className="font-semibold">{category.title}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 text-[0.7rem] text-gray-500 ${
                    openCategories[category.id] ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Category Items */}
              {openCategories[category.id] && (
                <div className="bg-gray-50 border-t">
                  {category.children.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 hover:bg-gray-100"
                    >
                      {/* Item Link */}
                      <a
                        href={item.link}
                        className="flex-1 text-sm text-gray-700 hover:text-blue-600"
                      >
                        {item.title}
                      </a>
                    </div>
                  ))}

                  {/* Category Image */}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
