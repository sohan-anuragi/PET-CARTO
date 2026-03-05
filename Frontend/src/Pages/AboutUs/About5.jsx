import img6 from "./AboutUsImg/img6.jpg";

function About5() {
  return (
    <section className="w-full overflow-x-hidden">
      <div
        className="relative min-h-[380px] w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img6})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex h-full min-h-[380px] items-center justify-center px-4">
          <div className="grid w-full max-w-7xl grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8">
            <div>
              <h3 className="text-5xl font-bold text-white md:text-6xl">18+</h3>
              <p className="mt-2 text-lg text-gray-200">years</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-white md:text-6xl">
                200+
              </h3>
              <p className="mt-2 text-lg text-gray-200">Employee</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-white md:text-6xl">85%</h3>
              <p className="mt-2 text-lg text-gray-200">Page views</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-white md:text-6xl">27+</h3>
              <p className="mt-2 text-lg text-gray-200">Awards</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white px-4 py-14 md:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-widest">
            Contact us
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            About us info
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
            It is a long-established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here.
          </p>

          <a
            href="/contact-us"
            className="mt-10 bg-[#001f4d] rounded-md  px-6 py-3 font-semibold text-white transition-colors hover:bg-[#002d6a] "
          >
            CLICK HERE TO CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}

export default About5;
