import img1 from "./AboutUsImg/rashi1.webp";
import img2 from "./AboutUsImg/rashi2.webp";

export default function Component4() {
  return (
    <section className="w-full bg-[#ffffff] my-[3rem] px-[2rem]">
      <div className="">
        <div className="text-center">
          <h2 className="text-[2.1rem] leading-tight font-bold mb-[0.5rem] text-[#040735] md:text-[2.5rem]">
            Senior Leadership Team
          </h2>
          <p className="mt-1 text-[1rem] font-extrabold uppercase tracking-[0.02em] text-[#16202d] ">
            KEY STAKEHOLDERS
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-[980px] bg-[#f2eee8] p-6 text-center md:mt-7 md:p-8">
          <p className="mx-auto max-w-[860px] text-[1.05rem] font-semibold leading-[1.5] text-[#424141] md:text-[1.2rem]">
            Our senior leadership team comprises pet parents and individuals
            with diverse profiles. Together, they bring in a plethora of
            experience spanning across industries such as business, retail,
            finance, management consulting and HR. The team also has expertise
            in grooming, canine behaviour and understanding animal
            communication.
          </p>
        </div>

        <div className="mx-auto h-[15px]  max-w-[980px] bg-[#0e0a50]" />

        <div className="mx-auto first-letter: mt-12 grid max-w-[470px] grid-cols-1 gap-4 sm:mt-14 sm:max-w-[640px] sm:grid-cols-2 sm:gap-5">
          <article className="flex  h-[146px] overflow-hidden rounded-[3px] border border-[#ece6dd] bg-[#f6f5f4] shadow-lg">
            <div className="flex w-[60%] items-end p-3 pb-4">
              <div className="border-l-4 border-[#0f1151] pl-2 leading-tight">
                <h3 className="text-[1rem] font-semibold mb-[1rem] text-[#111827] md:text-[1rem]">
                  Rashi Narang
                </h3>
                <p className="mt-1 text-[0.8rem] text-[#303744] ">Founder</p>
              </div>
            </div>
            <img
              src={img1}
              alt="Rashi Narang"
              className="h-full w-[40%] object-cover"
            />
          </article>

          <article className="flex shadow-lg h-[146px] overflow-hidden rounded-[3px] border border-[#ece6dd] bg-[#f6f5f4] shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
            <div className="flex w-[60%] items-end p-3 pb-4">
              <div className="border-l-4 border-[#0f1151] pl-2 leading-tight">
                <h3 className="text-[1rem] mb-[1rem] font-semibold text-[#111827] md:text-[1rem]">
                  Misara &amp; Poppins
                </h3>
                <p className="mt-1 text-[0.8rem] leading-tight text-[#303744] ">
                  Chief Wagging Officers
                </p>
              </div>
            </div>
            <img
              src={img2}
              alt="Misara and Poppins"
              className="h-full w-[40%] object-cover"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
