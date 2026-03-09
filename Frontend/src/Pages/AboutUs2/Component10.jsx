export default function Component10() {
  const stats = [
    { number: "13000+", label: "Pet Products" },
    { number: "250+", label: "Brands" },
    { number: "400+", label: "India First Products" },
    { number: "20+", label: "Indian Cities" },
    { number: "100+", label: "Stores" },
    { number: "80+", label: "Expert Pet Spas" },
  ];

  return (
    <section className="w-full mt-[-8rem] z-[1]  bg-transparent px-6 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        {/* Grid Container */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white w-full sm:w-[45%] md:w-[17rem] p-6 sm:p-8 text-center shadow-xl transition-shadow ${
                index >= 4 ? "col-span-1" : ""
              }`}
            >
              {/* Number */}
              <p className="text-[1.5rem]  font-semibold text-[#1f2937] leading-none mb-3">
                {stat.number}
              </p>

              {/* Label */}
              <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] font-semibold text-[#374151]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
