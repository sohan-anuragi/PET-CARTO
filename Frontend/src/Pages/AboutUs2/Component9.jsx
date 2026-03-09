import img9 from "./AboutUsImg/img9.webp";

export default function Component9() {
  return (
    <section className="w-full ">
      {/* Hero Section with Image and Overlay */}
      <div
        className="relative h-[300px] z-[-1] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img9})`,
        }}
      >
        {/* Content Container */}
        <div className="relative h-full w-full flex flex-col items-center justify-center px-6 text-center">
          {/* Overlay Chip */}
          <div className="mb-8 inline-block bg-[#2d2d2d]/90 px-4 py-2 md:px-5 md:py-3">
            <p className="text-[0.95rem] md:text-[1rem] font-bold uppercase tracking-wider text-white">
              Who We Are, What We Do
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] font-black uppercase leading-none tracking-[-0.02em] text-white drop-shadow-lg">
            OUR <span className="text-[#f79439]">MISSION</span>
          </h1>
          <p className="text-white text-[1.6rem] md:px-[10rem] mt-[3rem] text-semibold">
            To create and curate, innovative products and services that bring
            joy to pets and their families, one home at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
