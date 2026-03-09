import banner from "./AboutUsImg/abt-banner.webp";

export default function Component2() {
  return (
    <>
      <div className="mt-[3rem]">
        <div>
          <img src={banner} alt="About Us Banner" />
        </div>
        <div className="p-[2rem] mt-[2rem]  md:px-[8rem] text-center">
          <span className="text-center text-[1.5rem] text-[#525252] ">
            Long before the stores, the spas and the website, even before that
            tiny spark of an idea came to be, there was love. The kind of love
            you can only share with a pet.
          </span>
          <br />
          <span className="text-center text-[1.5rem] font-semibold mt-[0.5rem] text-[#141414]">
            The kind of love that makes us family.
          </span>
        </div>
      </div>
    </>
  );
}
