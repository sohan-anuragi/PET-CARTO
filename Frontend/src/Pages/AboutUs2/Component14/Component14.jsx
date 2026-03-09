import { FaBone } from "react-icons/fa";

import img1 from "./Component14Img/HUFT___Alicia_Souza.webp";
import img2 from "./Component14Img/HUFT___Shivan_Narresh.webp";
import img3 from "./Component14Img/HUFT___DISNEY.webp";
import img4 from "./Component14Img/HUFT___MARVEL.webp";

const collaborationData = [
  { id: 1, image: img1, title: "HUFT | Alicia Souza" },
  { id: 2, image: img2, title: "HUFT | Shivan & Narresh" },
  { id: 3, image: img3, title: "HUFT | DISNEY" },
  { id: 4, image: img4, title: "HUFT | MARVEL" },
];

export default function Component14() {
  return (
    <section className="w-full bg-[#f3f3f3] px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1220px]">
        <div className="text-center">
          <h2 className="text-[2.3rem] font-black uppercase leading-none text-[#2f3135] sm:text-[3rem] md:text-[4rem] lg:text-[5rem]">
            OUR <span className="text-[#f28c38]">COLLABORATIONS</span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2 md:mt-6">
            <div className="flex gap-1">
              {[...Array(11)].map((_, i) => (
                <span
                  key={`left-dot-${i}`}
                  className="h-[4px] w-[4px] rounded-full bg-[#f28c38]"
                />
              ))}
            </div>
            <FaBone className="text-[0.95rem] text-[#f28c38]" />
            <div className="flex gap-1">
              {[...Array(11)].map((_, i) => (
                <span
                  key={`right-dot-${i}`}
                  className="h-[4px] w-[4px] rounded-full bg-[#f28c38]"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collaborationData.map((item) => (
            <article
              key={item.id}
              className="bg-white p-[0.2rem]  shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[320px] w-full object-cover"
              />
              <h3 className="py-4 text-center text-[1.15rem] font-extrabold text-[#1f2937] md:text-[1.25rem]">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
