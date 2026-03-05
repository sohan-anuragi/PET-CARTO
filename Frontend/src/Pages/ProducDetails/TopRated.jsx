import topDot from "./TopRatedImg/TopDog.jpg";
import brushImg from "./TopRatedImg/img1.jpg";
import canImg from "./TopRatedImg/img2.jpg";
import tapeImg from "./TopRatedImg/img3.jpg";
import pasteImg from "./TopRatedImg/img4.jpg";

const products = [
  {
    id: 1,
    title: "Emily Pets Plastic Paw Print Handle Stainless Steel Brush",
    price: "$12 – $26",
    rating: 5,
    image: brushImg,
  },
  {
    id: 2,
    title: "Amora Meat Pure Variety Reindeer Dog Food Wet",
    price: "$5 – $7",
    rating: 5,
    image: canImg,
  },
  {
    id: 3,
    title: "A-Tape Cohesive Crepe Bandage Green Elastic",
    price: "$20 – $200",
    rating: 5,
    image: tapeImg,
  },
  {
    id: 4,
    title: "Hartz Hairball Remedy Plus Salmon Flavored Paste",
    price: "$8 – $15",
    rating: 5,
    image: pasteImg,
  },
];

export default function TopRated() {
  return (
    <aside className="w-full mt-[2rem] w-full">
      <div className=" rounded-[4px]    overflow-hidden">
        <img
          src={topDot}
          alt="Pet food promotion"
          className="w-full h-full object-cover object-center "
        />
      </div>

      <h4 className="text-[1.5rem] leading-none font-medium text-[#222222] mt-[2rem] mb-[2rem] mb-3">
        Top Rated
      </h4>

      <div className="space-y-3">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 bg-[#f2f2f2] rounded-[10px] p-3"
          >
            <div className="w-14 h-14 bg-[#e9e9e9] rounded-[8px] flex items-center justify-center shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[13px] leading-[1.2] text-[#0a2f63] font-normal line-clamp-2">
                {item.title}
              </p>
              <p className="text-[#f59e0b] text-[15px] leading-none mt-1">
                {"★".repeat(item.rating)}
              </p>
              <p className="text-[#0a2f63] text-[30px] leading-none font-semibold mt-1">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
