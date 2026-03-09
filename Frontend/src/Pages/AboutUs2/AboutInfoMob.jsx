import { useState } from "react";

function AboutInfoMob() {
  // Default first section open
  const [openIndex, setOpenIndex] = useState(0);

  const sections = [
    {
      title: "Development",
      content:
        "We are a dedicated team passionate about providing the best products and services for your pets. Our goal is to make pet care easy, accessible, and enjoyable for everyone. With years of experience, we strive to bring you quality and trust in everything we do. " +
        "We are a dedicated team passionate about providing the best products and services for your pets. Our goal is to make pet care easy, accessible, and enjoyable for everyone. With years of experience, we strive to bring you quality and trust in everything we do. ",
    },
    {
      title: "Qualified Team",
      content:
        "Our mission is to improve the lives of pets and their owners by offering a wide range of carefully selected products. We believe every pet deserves the best, and we are committed to delivering value, convenience, and excellent customer service. " +
        "Our mission is to improve the lives of pets and their owners by offering a wide range of carefully selected products. We believe every pet deserves the best, and we are committed to delivering value, convenience, and excellent customer service.",
    },
    {
      title: "Strategy",
      content:
        "Choosing us means choosing reliability, quality, and a team that truly cares about your pet’s well-being. We focus on customer satisfaction and always aim to exceed your expectations with our products and support. " +
        "Choosing us means choosing reliability, quality, and a team that truly cares about your pet’s well-being. We focus on customer satisfaction and always aim to exceed your expectations with our products and support.",
    },
  ];

  // Always keep one section open
  const handleToggle = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  return (
    <div className="p-[1rem]">
      <div className="border border-gray-300 w-full bg-white">
        {sections.map((section, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full text-[1.2rem] text-[#1c1c1cca] text-left px-4 py-4 font-semibold focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              {section.title}
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 border-t text-[0.95rem] text-[#6f6f6f] pt-[1rem] border-gray-200 text-gray-700 text-base">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutInfoMob;
