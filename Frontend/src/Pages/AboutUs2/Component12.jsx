import DogImg from "./AboutUsImg/Component12Img/DogImg.webp";
import img1 from "./AboutUsImg/Component12Img/img1.webp";
import img2 from "./AboutUsImg/Component12Img/img2.webp";
import img3 from "./AboutUsImg/Component12Img/img3.webp";
import img4 from "./AboutUsImg/Component12Img/img4.webp";
import img5 from "./AboutUsImg/Component12Img/img5.webp";
import img6 from "./AboutUsImg/Component12Img/img6.webp";

const awardsData = [
  { id: 1, image: img1, title: "'Winner of 2021'" },
  { id: 2, image: img2, title: "'Winner of 2019'" },
  { id: 3, image: img3, title: "'Winner of 2017'" },
  { id: 4, image: img4, title: "'Lufthansa LHRunway To Success'" },
  { id: 5, image: img5, title: "'Women Icon Award's'" },
  { id: 6, image: img6, title: "'Award For Most Innovative Product'" },
];

export default function Component12() {
  return (
    <section className="w-full bg-[#f3f3f3] px-4 py-12 md:px-[7rem] md:py-16">
      <div className="mx-auto max-w-[1220px]">
        <div className="relative mb-8 flex items-center justify-center md:mb-10">
          <div className="absolute left-0 top-4 hidden md:flex md:flex-col md:gap-3">
            <span className="h-1 w-1 rounded-full bg-[#f28c38]" />
            <span className="h-1 w-1 rounded-full bg-[#f28c38]" />
            <span className="h-1 w-1 rounded-full bg-[#f28c38]" />
          </div>

          <img
            src={DogImg}
            alt="Dog"
            className="absolute left-2 top-[-14px] w-[125px] object-contain md:left-10 md:w-[210px] lg:w-[260px]"
          />

          <h2 className="pl-20 text-center text-[2.4rem] font-black uppercase leading-none tracking-tight text-[#2f3135] sm:text-[3.2rem] md:pl-24 md:text-[5rem] lg:text-[6rem]">
            AWARDS
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {awardsData.map((award) => (
            <article
              key={award.id}
              className=" rounded-[2px] border-[8px] border-[#f4f0ea] bg-white px-4 py-6 text-center shadow-sm"
            >
              <img
                src={award.image}
                alt={award.title}
                className="mx-auto h-full w-full object-contain "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
