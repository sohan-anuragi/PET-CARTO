import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import shopMenuData from "./ShopData";
import doggyImage from "../../../../../assets/Doggy image/Shop-banner.jpg";

export default function Shop() {
  // State to toggle main Shop menu
  const [isShopOpen, setIsShopOpen] = useState(false);

  // State to track which first-level items are open
  const [openItems, setOpenItems] = useState({});

  // Toggle main Shop menu
  const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
  };

  // Toggle first-level category
  const toggleCategory = (id) => {
    setOpenItems({
      ...openItems,
      [id]: !openItems[id],
    });
  };

  return (
    <div className="w-full ">
      {/* Main Shop Header */}
      <button
        onClick={toggleShop}
        className="w-full flex items-center justify-between p-4 rounded-md bg-[#f7f5f5] hover:bg-gray-200"
      >
        <span className="font-semibold text-lg">Shop</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isShopOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* First Level Menu */}
      {isShopOpen && (
        <div className="bg-white ">
          {shopMenuData.map((category) => (
            <div key={category.id} className="border-b">
              {/* First Level Item */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">{category.title}</span>

                  {/* Badges */}
                  {category.hot && (
                    <span className="text-xs bg-[#ff0000] text-white px-2 py-1 rounded">
                      HOT
                    </span>
                  )}
                  {category.trending && (
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                      TRENDING
                    </span>
                  )}
                  {category.sale && (
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">
                      SALE
                    </span>
                  )}
                </div>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openItems[category.id] ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Second Level (Children) */}
              {openItems[category.id] && (
                <div className="bg-gray-50">
                  {category.children.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      className="block p-4 pl-8 hover:bg-gray-100"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.title}</span>

                        {/* Badges for nested items */}
                        {item.hot && (
                          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-md ">
                            HOT
                          </span>
                        )}
                        {item.trending && (
                          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-md">
                            TRENDING
                          </span>
                        )}
                        {item.sale && (
                          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-md">
                            SALE
                          </span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* DOGGY IMAGE  */}
          <div className="p-4">
            <img
              src={doggyImage}
              alt="Shop Banner"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
