import img13 from "./AboutUsImg/img13.webp";

export default function Component13() {
  return (
    <section className="w-full bg-[#f3f3f3] px-4 py-12 md:px-[5rem]">
      <div className="mx-auto max-w-[1220px]">
        <div className="relative min-h-[260px] overflow-visible bg-[#f6f2ec]">
          <div className="px-6 py-10 pr-24 text-center sm:px-10 sm:py-12 md:px-16 md:pr-[280px] lg:px-20 lg:py-14 lg:pr-[320px]">
            <p className="text-[1.2rem] font-semibold leading-[1.4] text-[#1f2937d9] ">
              It is an honour to be at the forefront of the pet industry and add
              these feathers to our cap. With our feet firm in innovation and
              empathy, we promise to never stop at the &apos;best&apos; and keep
              pushing our boundaries to create a world where each pet parent can
              make their pet&apos;s lives even more beautiful.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 h-[14px] w-full bg-[#f28c38]" />

          <img
            src={img13}
            alt="Dog"
            className="absolute bottom-0 right-0 z-10 w-[130px] object-contain sm:w-[170px] md:w-[240px] lg:w-[290px]"
          />
        </div>
      </div>
    </section>
  );
}
