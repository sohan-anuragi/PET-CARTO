import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    id: 1,
    question: "Are you also Paws and Tail Lovers Company?",
    answer:
      "Yes, we are passionate about pets and committed to providing products and services that improve the lives of pets and their families.",
  },
  {
    id: 2,
    question: "Do you offer any grooming services?",
    answer:
      "Yes, we provide professional grooming services including bathing, trimming and hygiene care for pets.",
  },
  {
    id: 3,
    question: "Do you sell pets?",
    answer:
      "No, we do not sell pets. We support ethical pet ownership and encourage pet adoption.",
  },
  {
    id: 4,
    question: "Do you help out with pet adoption?",
    answer:
      "Yes, we collaborate with shelters and organizations to promote pet adoption programs.",
  },
  {
    id: 5,
    question: "Can products be customized?",
    answer: "Yes, selected products can be customized according to pet needs.",
  },
  {
    id: 6,
    question:
      "Besides dogs and cats, what other pets do you have products for?",
    answer: "We also provide products for birds, rabbits and other small pets.",
  },
  {
    id: 7,
    question: "Are your stores pet friendly?",
    answer:
      "Yes, our stores welcome pets and customers are encouraged to bring them.",
  },
  {
    id: 8,
    question: "When are your stores open?",
    answer: "Our stores are open daily during regular business hours.",
  },
];

export default function Component15() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#ffffff]">
      <div className="mx-auto max-w-[900px] px-4 py-16">
        <h2 className="mb-6 text-center text-4xl font-bold tracking-wide text-gray-800">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="mx-auto mb-8 flex items-center justify-center gap-2">
          <div className="flex gap-1">
            {[...Array(10)].map((_, i) => (
              <span
                key={`faq-left-${i}`}
                className="h-[3px] w-[3px] rounded-full bg-[#f28c38]"
              />
            ))}
          </div>
          <span className="h-[4px] w-[12px] rounded-full bg-[#f28c38]" />
          <div className="flex gap-1">
            {[...Array(10)].map((_, i) => (
              <span
                key={`faq-right-${i}`}
                className="h-[3px] w-[3px] rounded-full bg-[#f28c38]"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                key={faq.id}
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer rounded-xl bg-white px-6 py-5 shadow-md transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[16px] font-medium text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#f28c38] text-white">
                    {isOpen ? <FiMinus size={15} /> : <FiPlus size={15} />}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
