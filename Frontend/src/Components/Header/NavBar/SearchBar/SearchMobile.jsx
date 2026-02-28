import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function SearchMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="relative group transition-all duration-300"
      >
        <FiSearch className="w-7 h-7 text-white hover:text-red-500 transition-colors" />
      </span>

      {/* OPEN BOX FOR SEARCH */}

      <div
        className={`${isOpen ? "block" : "hidden"} z-[10]  fixed top-0 left-0 w-full bg-transparent h-full bg-white `}
      >
        <div className="bg-white p-[2rem] z-[100] ">
          <div className={`${isOpen ? "block" : "hidden"}  bg-white `}>
            <div className="flex justify-end mb-[1rem] ">
              <RxCross2
                size={30}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-1 bg-white border-[1px] border-gray-200 bg-white items-center rounded-md">
              <input
                type="text"
                placeholder="Search Products..."
                className="w-full px-4 bg-white py-2 min-w-[20rem]  focus:outline-none "
              />
              <a href="/" className="px-2 ">
                <FiSearch size={20} />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"} fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-[-1] cursor-pointer `}
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      </div>
    </>
  );
}
