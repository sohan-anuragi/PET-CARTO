import React from "react";
import FaqImage from "./FaqsImg/faq-page-img.jpg";

const faqItems = [
  {
    question: "How can you help?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "What is a return policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "Do you sell gift cards?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const FaqTopSection = () => {
  return (
    <section className="w-full bg-[#ffffff] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-500">
              FAQs
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Question
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="mt-6">
              <img
                src={FaqImage}
                alt="Frequently Asked Questions"
                className="w-full h-[280px] sm:h-[340px] md:h-[360px] lg:h-[390px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.question}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqTopSection;
