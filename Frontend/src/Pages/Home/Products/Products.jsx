import { useState } from "react";
import DogFood from "./DogFood/DogFood";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("DogFood");

  const buttonBase =
    "px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200";

  return (
    <div className="mt-[4rem]">
      <div className="m-[1rem] border-b-[1px] flex-col items-center border-gray-300 flex sm:justify-between gap-6 sm:flex-row">
        <h2 className="text-2xl   font-bold ">Products By Category</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <button
            type="button"
            onClick={() => setSelectedCategory("DogFood")}
            className={`${buttonBase} ${
              selectedCategory === "DogFood"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            DogFood
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory("CatDollers")}
            className={`${buttonBase} ${
              selectedCategory === "CatDollers"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            CatDollers
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory("PetToy")}
            className={`${buttonBase} ${
              selectedCategory === "PetToy"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            PetToy
          </button>
        </div>
      </div>

      <div className="mt-[-1rem]">
        <DogFood selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
