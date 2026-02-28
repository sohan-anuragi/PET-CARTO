import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const productCategories = {
  "All Categories": [],
  "Our Store": [],
  "Dogs Foods": [
    "Dry Dog Food",
    "Freeze-Dried Food",
    "Canned Dog Food",
    "Dog Treat Cookies",
  ],
  "Pet Supplies": [
    "Cat Trees",
    "Grooming Supplies",
    "Fountains",
    "Cat Collars",
  ],
  "Pet Food Bowls": [
    "Basic Dog Bowls",
    "Dog Raised Bowls",
    "Raised Cat Bowls",
    "Basic Cat Bowls",
  ],
  "Pet Clothes": ["Sweaters", "Shirts", "Cold Weather Coats", "Dresses"],
  "Pet Beds & Chairs": [
    "Dog Beds",
    "Dog Sofas & Chairs",
    "Dog Bed Mats",
    "Cat Bed Mats",
  ],
  "Pet Toys": ["Squeak Toys", "Chew Toys", "Toy Balls", "Rope Toys"],
};

export default function SearchSelect() {
  const [selected, setSelected] = useState("All Categories");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="relative border-r border-gray-300">
      <select
        value={selected}
        onChange={handleChange}
        className="appearance-none bg-white  rounded-l-md py-2 pl-4 focus:outline-none cursor-pointer hover:border-blue-400 transition"
      >
        {Object.keys(productCategories).map((category) => (
          <optgroup key={category} label={category}>
            {productCategories[category].length > 0 ? (
              productCategories[category].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))
            ) : (
              <option value={category}>{category}</option>
            )}
          </optgroup>
        ))}
      </select>
      <span className="absolute text-[#414141b1] right-5 top-3 pointer-events-none">
        <IoIosArrowDown />
      </span>
    </div>
  );
}
