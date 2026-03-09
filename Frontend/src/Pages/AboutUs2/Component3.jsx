import rashi from "./AboutUsImg/rashi.webp";

export default function Component3() {
  return (
    <>
      <div className="m-[4rem] bg-[#f5f9fc] py-[3rem]  ">
        <div className=" flex px-[2rem] flex-col  lg:flex-row justify-center  gap-[3rem]">
          {/* Image Section */}
          <div className="w-full lg:w-3/2 flex justify-start">
            <img
              src={rashi}
              alt="Rashi and Sara"
              className="rounded-lg shadow-lg w-full max-w-[500px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full flex flex-col  justify-center ">
            {/* Quote */}
            <p className="text-[#141414] text-[1.3rem] font-medium leading-relaxed mb-[2rem] mt-[3rem] lg:mt-0">
              "Over a decade ago, a bundle of love named Sara bounded into our
              lives and made our family whole. Unquestioningly, she showered us
              with affection, expanded our hearts and showed us the way to pay
              it forward."
            </p>

            {/* Name and Title */}
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h3 className="text-[#141414] text-[1.8rem] md:text-[2rem] font-bold">
                Chandan Bhai
              </h3>
              <p className="text-[#FF6B35] text-[1.2rem] md:text-[1.4rem] font-semibold">
                Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
