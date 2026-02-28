import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import SpecialProducts from "./SpecialProducts/SpecialProducts";

const dogFoodImg = new URL("./DogFoodImg.png", import.meta.url).href;

export default function FProducts() {
  return (
    <>
      <div className="flex gap-4 mt-12 overflow-x-auto px-4 scrollbar-thin scrollbar-thumb-gray-400">
        <div className="flex-none w-[400px]">
          <h2 className="text-2xl text-center font-bold mb-4">
            Featured Products
          </h2>
          <div className="border rounded-lg border-gray-300 mb-4">
            <FeaturedProducts />
          </div>
        </div>

        <div className="flex-none w-[400px]">
          <h2 className="text-2xl text-center font-bold mb-4">
            Special Products
          </h2>
          <div className="border rounded-lg border-gray-300 mb-4">
            <SpecialProducts />
          </div>
        </div>

        <div className="flex-none w-[450px] mt-16">
          <img
            src={dogFoodImg}
            alt="Dog Food"
            className="w-full h-auto rounded-lg border-gray-300"
          />
        </div>
      </div>
    </>
  );
}
