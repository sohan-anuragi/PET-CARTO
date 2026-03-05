import React, { useState } from "react";

const faqData = [
  {
    question: "Global search engine optimization",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    question: "Complete Social Media Integration",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "End-to-end encryption for messages",
    answer:
      "Lorem Ipsum is simply dummy text used by designers and developers to build clean layouts. It remains one of the most common placeholder text formats in modern UI design.",
  },
];

const FaqBottomSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="w-full bg-[#f3f3f3]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <p className="text-gray-600">Pick one of 3 FAQ styles</p>
          <h2 className="mt-1 text-3xl md:text-4xl font-bold text-gray-900">
            Display FAQ accordions
          </h2>
        </div>

        <div className="border border-gray-300 bg-white">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={
                  index !== faqData.length - 1 ? "border-b border-gray-300" : ""
                }
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 md:px-6 py-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-[1.2rem] font-semibold text-gray-900 leading-snug">
                    {item.question}
                  </span>
                  <span className="text-3xl md:text-4xl font-semibold text-gray-900 leading-none">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 md:px-6 pb-6 text-gray-600 leading-relaxed space-y-6">
                    <p>{item.answer}</p>
                    {index === 0 ? (
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqBottomSection;
