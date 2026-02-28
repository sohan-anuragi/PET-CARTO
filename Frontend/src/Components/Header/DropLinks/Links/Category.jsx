import categoryData from "../../NavBar/Menu/Catagory/CatagoryData";
import img1 from "./ExtraProducts/ExtraProductsImg/04_02-300x300.jpg";
import img2 from "./ExtraProducts/ExtraProductsImg/07_02-300x300.jpg";
import img3 from "./ExtraProducts/ExtraProductsImg/15_02-300x300.jpg";
import img4 from "./ExtraProducts/ExtraProductsImg/22_02-300x300.jpg";

const bestSellingItems = [
  {
    id: 1,
    image: img1,
    title: "Mr. Fresh Expert Dog Location Habituation...",
    oldPrice: "$24",
    price: "$20",
  },
  {
    id: 2,
    image: img2,
    title: "Raw Paws 259 Soft Tip Pet Grooming Gloves",
    price: "$25",
  },
  {
    id: 3,
    image: img3,
    title: "Pets Empire Cat Scratching With Insid...",
    price: "$12",
  },
  {
    id: 4,
    image: img4,
    title: "Pbka Grain Free Active Dog & Puppy Dog...",
    price: "$14 - $20",
  },
];

export default function Category() {
  return (
    <div className="bg-white p-6  rounded-lg flex gap-8">
      <div className="w-[52%]">
        <div className="grid grid-cols-3 gap-x-12 gap-y-8">
          {categoryData.map((category) => (
            <div key={category.id}>
              <h3 className="font-semibold text-gray-900 mb-3">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.children.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block text-sm text-gray-600 hover:text-blue-600"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* BEST SALLING */}
      <div className="w-[48%]">
        <h3 className="text-[2rem] font-semibold text-gray-900 text-center mb-4">
          Best selling
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {bestSellingItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-2xl p-3 flex items-center gap-3"
            >
              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[0.875rem] text-gray-900 leading-5 line-clamp-2">
                  {item.title}
                </p>

                <div className="flex items-center gap-2 mt-1.5">
                  {item.oldPrice ? (
                    <span className="text-gray-400 line-through text-[1rem] leading-none">
                      {item.oldPrice}
                    </span>
                  ) : null}
                  <span className="text-blue-900 font-semibold text-[1.1rem] leading-none">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
