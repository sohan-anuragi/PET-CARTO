import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const productCategories = {
  "Shop By Category": [],
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

export default function ShopByCategory() {
  const [selected, setSelected] = useState("Shop by Category");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="flex border-r items-center justify-between px-[1rem] rounded-md  bg-white border-gray-300">
      <span className=" text-[1.3rem]  pointer-events-none">
        <IoMdMenu />
      </span>
      <select
        value={selected}
        onChange={handleChange}
        className="appearance-none  rounded-l-md py-2 pl-4 focus:outline-none cursor-pointer hover:border-blue-400 transition"
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
    </div>
  );
}
