import img5 from "./AboutUsImg/img5.webp";

export default function Component5() {
  return (
    <section className="w-full md:px-[8rem] bg-[#f9f7f5] py-12 px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h1 className="text-[4rem] md:text-[5rem] lg:text-[6rem] font-black text-[#031345] leading-none">
              Hi!
            </h1>

            {/* Subheading */}
            <h2 className="text-[1.4rem] md:text-[1.5rem] font-bold text-[#2d2d2d] leading-tight">
              We're Heads Up For Tails.
            </h2>

            {/* Description */}
            <p className="text-[1.05rem] md:text-[1.1rem] text-[#3d3d3d] leading-relaxed">
              India's 1st and most trusted pet care brand in the industry,
              dedicated to our favourite family members—our pets.
            </p>

            {/* Orange Divider Line */}
            <div className="w-[5rem] h-1 bg-[#080954]" />

            {/* About Us Section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-[1.15rem] md:text-[1.2rem] font-bold text-[#2d2d2d]">
                A little about us
              </h3>

              <p className="text-[1rem] md:text-[1.05rem] text-[#3d3d3d] leading-relaxed">
                As pet parents ourselves, we want to help every pet parent and
                their pet meet all their needs through our innovative products
                and services. Our hope is that we can play a meaningful role in
                bringing pets and their humans closer to each other for years
                and years to come, and through that build a kinder world.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative Heart with Dotted Line */}
            <div className="absolute top-4 right-8 lg:right-16 z-10">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 15C20 15 25 25 35 35"
                  stroke="#2d2d2d"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                />
                <path
                  d="M35 10C35 8.67392 35.5268 7.40215 36.4645 6.46447C37.4021 5.52678 38.6739 5 40 5C41.3261 5 42.5979 5.52678 43.5355 6.46447C44.4732 7.40215 45 8.67392 45 10C45 11.3261 44.4732 12.5979 43.5355 13.5355L40 17.0711L36.4645 13.5355C35.5268 12.5979 35 11.3261 35 10Z"
                  fill="#2d2d2d"
                />
              </svg>
            </div>

            {/* Main Image */}
            <div className="w-full max-w-[500px]">
              <img
                src={img5}
                alt="Dog wearing blue harness"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
