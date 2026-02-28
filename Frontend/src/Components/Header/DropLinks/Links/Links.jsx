import { useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MenuContext, MenuProvider } from "./Store";
import DropShop from "./DropShop";
import Category from "./Category";
import Elements from "./Elements";
import Products from "./Products";

const menuItems = [
  { id: 2, title: "Shop" },
  { id: 3, title: "Categories", badge: { text: "SALE", type: "green" } },
  { id: 4, title: "Products", badge: { text: "HOT", type: "pink" } },
  { id: 5, title: "Top deals" },
  { id: 6, title: "Elements" },
];

function DropLinks() {
  const { activeLink, setActiveLink } = useContext(MenuContext);

  return (
    <div className="flex items-center gap-8">
      <div>
        <a href="/" className="text-white font-semibold hover:text-blue-300">
          Home
        </a>
      </div>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setActiveLink(item.title)}
          onMouseLeave={() => setActiveLink("")}
        >
          <button className="flex items-center gap-2 text-white font-semibold">
            <span>{item.title}</span>

            {item.badge && (
              <span
                className={`text-[10px] text-white px-2 py-0.5 rounded font-bold ${
                  item.badge.type === "pink"
                    ? "bg-pink-500"
                    : item.badge.type === "green"
                      ? "bg-emerald-500"
                      : "bg-gray-500"
                }`}
              >
                {item.badge.text}
              </span>
            )}

            <FaChevronDown
              className={`text-xs transition-transform duration-200 ${
                activeLink === item.title ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* SHOP DROPDOWN */}
          {activeLink === item.title && item.title === "Shop" ? (
            <div
              className={`absolute left-[-20rem] top-[1rem] mt-4 w-[80vw] bg-transparent text-gray-800 shadow-lg rounded-md p-4 z-50   `}
            >
              <DropShop />
            </div>
          ) : null}

          {/* CATEGORY DROPDOWN */}
          {activeLink === item.title && item.title === "Categories" ? (
            <div
              className={`absolute left-[-20rem] top-[1rem] mt-4 w-[80vw] bg-transparent text-gray-800 shadow-lg rounded-md p-4 z-50   `}
            >
              <Category />
            </div>
          ) : null}

          {activeLink === item.title && item.title === "Elements" ? (
            <div
              className={`absolute left-[-5rem] top-[1rem] mt-4 w-[25vw] bg-transparent text-gray-800 shadow-lg rounded-md p-4 z-50   `}
            >
              <Elements />
            </div>
          ) : null}
          {/* PRODUCTS */}
          {activeLink === item.title && item.title === "Products" ? (
            <div
              className={`absolute left-[-43rem] top-[1rem] mt-4  w-[90vw] bg-transparent text-gray-800 shadow-lg rounded-md p-4 z-50   `}
            >
              <Products />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function Links() {
  return (
    <MenuProvider>
      <div className="w-full bg-[#0b2e5c]">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <DropLinks />
        </div>
      </div>
    </MenuProvider>
  );
}
