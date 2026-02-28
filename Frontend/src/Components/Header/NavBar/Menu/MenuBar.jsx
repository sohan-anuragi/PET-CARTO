import Catagory from "./Catagory/Catagory";
import Elements from "./Elements/Elements";
import MenuProducts from "./MenuProducts/MenuProducts";

import Shop from "./Shop/Shop";
import TopDeals from "./TopDeals/TopDeals";

export default function MenuBar({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col lg:hidden">
      {/* 50% Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* 70% Side Menu */}
      <div className="relative w-[70%] h-full bg-white shadow-lg p-5">
        {/* Cross Button */}
        <button
          className="absolute top-4 right-4 text-2xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {/* Content Area */}

        <div className="mt-20 overflow-y-auto h-[82vh] flex flex-col gap-4">
          <a
            href="/"
            className="w-full flex items-center font-bold text-[1.1rem] justify-between p-4 rounded-md bg-[#f7f5f5] hover:bg-gray-200"
          >
            Home
          </a>

          <Shop />
          <Catagory />
          <MenuProducts />
          <TopDeals />
          <Elements />
        </div>
      </div>
    </div>
  );
}
