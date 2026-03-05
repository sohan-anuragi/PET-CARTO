import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Img5 from "./AboutUsImg/about-page-07.jpg";

function About3() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Business’s vision",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Our mission",
      content:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. It has roots in classical Latin literature and has remained the standard placeholder text for design and publishing industries.",
    },
    {
      title: "Our support",
      content:
        "We provide consistent and reliable support with a customer-first approach. Our team focuses on practical solutions, quick response times, and quality service to help businesses grow with confidence.",
    },
  ];

  return (
    <section className="w-full p-[1rem] bg-[#efefef]  overflow-x-hidden">
      <div className="  grid w-full grid-cols-1 gap-8 md:gap-10  lg:grid-cols-2 lg:gap-12">
        <div className="order-2 lg:order-1 self-center">
          <h2 className="text-[1.8rem] font-semibold leading-tight text-slate-900 ">
            Inspiration, innovation, and opportunities.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 tracking-wide text-slate-500 ">
            Many Desktop Publishing Packages And Web Page Editors Now Use Lorem
            Ipsum As Their Default Model Text.
          </p>

          <div className="mt-8 bg-white">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full items-center gap-3 px-4 py-4 text-left text-[34px] font-semibold leading-none transition-colors md:px-5 ${
                    activeIndex === index ? "text-[#0c2a50]" : "text-slate-900"
                  }`}
                >
                  <IoIosArrowDown
                    size={15}
                    className={`text-[10px]  transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                  <span className="text-[1.1rem] font-semibold">
                    {section.title}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="px-4 pb-5 md:px-5 md:pb-6 bg-gray-100">
                    <p className=" leading-9 text-slate-700  ">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="h-[360px] w-full sm:h-[520px] md:h-[680px] lg:h-[860px]">
            <img
              src={Img5}
              alt="About section"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About3;
