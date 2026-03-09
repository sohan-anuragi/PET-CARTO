import img7 from "./AboutUsImg/img7.webp";
import img77 from "./AboutUsImg/img77.webp";

export default function Component7() {
  return (
    <section className="w-full bg-[#f5f5f4] py-8 md:py-12 lg:py-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-[1fr_1.15fr]">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-[18px] bg-[#f79439]" />
          <img
            src={img7}
            alt="HUFT Foundation feeding initiative"
            className="h-full w-full object-cover pl-[18px]"
          />
        </div>

        <div className="relative overflow-hidden bg-[#f1ece5] px-6 py-8 sm:px-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <h2 className="max-w-[420px] text-[2.5rem] font-extrabold leading-[1.05] text-[#f79439] sm:text-[3rem] lg:text-[3.7rem]">
            HUFT Foundation
          </h2>

          <div className="my-5 h-[3px] w-[70px] bg-[#f79439]" />

          <div className="space-y-5 pr-16 md:pr-20 lg:pr-24">
            <p className="text-[1.15rem] font-medium leading-[1.4] text-[#111827]">
              In addition to running a full time for profit retail,
              manufacturing and design outlet, we also run our very own Heads Up
              For Tails Foundation.
            </p>

            <p className="text-[1.15rem] font-medium leading-[1.4] text-[#111827] ">
              Through this, we aim to reconnect our world with animals so we can
              all find a space to co-exist peacefully.
            </p>

            <p className="text-[1.15rem] font-medium leading-[1.4] text-[#111827] ">
              Our work through the Foundation involves running grassroots
              programs that include sterilisation drives, feeding programs,
              adoption drives and setting up reflective collars for street dogs
              independently and in collaboration with our partners.
            </p>
            <button className="rounded-full bg-[#1a0f06e0] px-[2rem] py-3 text-[1.5rem] font-semibold text-white transition-colors duration-300 hover:bg-[#e5832b]">
              know More
            </button>
          </div>

          <img
            src={img77}
            alt="Cats"
            className="pointer-events-none absolute bottom-0 right-0 w-[120px] sm:w-[135px] md:w-[150px]"
          />
        </div>
      </div>
    </section>
  );
}
