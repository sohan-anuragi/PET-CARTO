import React from "react";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoTimeOutline,
} from "react-icons/io5";

const BottomSection = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <IoLocationOutline className="text-3xl" />,
      title: "50-UTC, Beside Orange",
      subtitle: "Hospital",
    },
    {
      id: 2,
      icon: <IoCallOutline className="text-3xl" />,
      title: "Call us :",
      subtitle: "+00 123-456-789",
    },
    {
      id: 3,
      icon: <IoMailOutline className="text-3xl" />,
      title: "Mail us :",
      subtitle: "demo@example.com",
    },
    {
      id: 4,
      icon: <IoTimeOutline className="text-3xl" />,
      title: "Open time :",
      subtitle: "10:00AM – 6:00PM",
    },
  ];

  return (
    <section className="w-full bg-gray-50 mb-[2rem] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-6 rounded-lg transition-shadow hover:shadow-md"
            >
              {/* Icon Circle */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <p className="text-gray-600 text-sm font-medium mb-1">
                  {item.title}
                </p>
                <p className="text-gray-800 font-semibold">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
