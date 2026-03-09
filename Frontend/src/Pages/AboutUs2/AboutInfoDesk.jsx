import { useState } from "react";

function AboutInfoDesk() {
  const [activeIndex, setActiveIndex] = useState(1);

  const sections = [
    {
      title: "Development",
      content:
        "We are a dedicated team passionate about providing the best products and services for your pets. Our goal is to make pet care easy, accessible, and enjoyable for everyone. With years of experience, we strive to bring you quality and trust in everything we do. We are a dedicated team passionate about providing the best products and services for your pets. Our goal is to make pet care easy, accessible, and enjoyable for everyone. With years of experience, we strive to bring you quality and trust in everything we do. value, convenience, and excellent customer service. Our mission is to improve the lives of pets and their owners by offering a wide range of carefully selected products. We believe every pet deserves the best, and we are committed to delivering value, convenience, and excellent customer service.",
    },
    {
      title: "Quilified team",
      content:
        "Our mission is to improve the lives of pets and their owners by offering a wide range of carefully selected products. We believe every pet deserves the best, and we are committed to delivering value, convenience, and excellent customer service. Our mission is to improve the lives of pets and their owners by offering a wide range of carefully selected products. We believe every pet deserves the best, and we are committed to delivering value, convenience, and excellent customer service. value, convenience, and excellent customer service. Our mission is to improve the lives of pets and their owners by offering a wide range of carefully selected products. We believe every pet deserves the best, and we are committed to delivering value, convenience, and excellent customer service.",
    },
    {
      title: "Strategy",
      content:
        "Choosing us means choosing reliability, quality, and a team that truly cares about your pet’s well-being. We focus on customer satisfaction and always aim to exceed your expectations with our products and support. Choosing us means choosing reliability, quality, and a team that truly cares about your pet’s well-being. We focus on customer satisfaction and always aim to exceed your expectations with our products and support.",
    },
  ];

  return (
    <div className="w-full mt-8">
      <div className="flex  border-black bg-white">
        {sections.map((section, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`flex-1 text-center  py-3 font-semibold transition-none
              ${
                activeIndex === idx
                  ? "border-t border-gray-300 border-l border-r bg-white text-black -mb-px z-10"
                  : "border-b border-gray-300 text-gray-500 bg-white"
              }
              
            `}
            style={{
              borderBottom: activeIndex === idx ? "none" : undefined,
              borderTop: activeIndex === idx ? undefined : "none",
            }}
          >
            {section.title}
          </button>
        ))}
      </div>
      <div className="border-l border-r border-b border-gray-300 bg-white px-6 py-5 text-gray-700 text-[0.95rem] text-[#7b7b7b] rounded-b-md">
        {sections[activeIndex].content}
      </div>
    </div>
  );
}

export default AboutInfoDesk;
