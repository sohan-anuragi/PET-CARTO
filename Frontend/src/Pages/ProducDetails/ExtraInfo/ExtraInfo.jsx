import { useState } from "react";
import Description from "./Description";
import AdditionalInfo from "./AdditionalInfo";
import Reviews from "./Reviews/Reviews";
import SizeChart from "./SizeChart";
import ImageSection from "./ImageSection";
import Shipping from "./Shipping";

export default function ExtraInfo() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional information" },
    { id: "reviews", label: "Reviews(1)" },
    { id: "size", label: "Size Chart" },
    { id: "image", label: "Image Tab" },
    { id: "shipping", label: "Shipping & Return" },
  ];

  return (
    <div className="p-[1rem]">
      <div className="w-full mt-[2rem] border border-gray-200 rounded-md">
        {/* Tabs */}
        <div className="overflow-x-auto border-b border-gray-200">
          <div className="flex justify-center gap-8 px-auto pt-4 text-[15px] font-medium whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 border-b-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? "border-blue-600 text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-gray-600">
          {activeTab === "description" && (
            <div>
              <Description />
            </div>
          )}

          {activeTab === "additional" && (
            <div>
              <AdditionalInfo />
            </div>
          )}

          {activeTab === "reviews" && <Reviews />}

          {activeTab === "size" && <SizeChart />}

          {activeTab === "image" && <ImageSection />}

          {activeTab === "shipping" && <Shipping />}
        </div>
      </div>
    </div>
  );
}
