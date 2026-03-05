import React from "react";
import extraInfoImg from "./ExtraInfoImg/Description.jpg";

const technicalDetails = [
  { key: "Colour", value: "White,Pink" },
  { key: "Brand", value: "Pbka" },
  { key: "Pattern", value: "Printed" },
  { key: "Collection", value: "Name All" },
  { key: "Item Weight", value: "1100 Grams" },
  { key: "Finish Type", value: "Glossy" },
  {
    key: "Product Care Instructions",
    value: "Handle with care.May chip or break on impact,Food save",
  },
  { key: "Is Microwaveable", value: "Yes" },
  { key: "Number of Pieces", value: "3" },
  {
    key: "Manufacturer",
    value: "The Wishing Chair, 193, 2nd floor, Shahpurjat, New Delhi-110049",
  },
  { key: "Item model number", value: "Breakfast Set" },
  { key: "ASIN", value: "B09ZF1525B" },
];

export default function Description() {
  return (
    <section className="w-full">
      <div className="w-full">
        <img
          src={extraInfoImg}
          alt="extra info"
          className="w-full h-auto object-cover "
        />
      </div>

      <div className="mt-4 overflow-x-auto whitespace-nowrap">
        <div className="min-w-[720px] border border-[#d5d5d5] bg-[#f9f9f9]">
          <h2 className="text-xl font-semibold text-[#0c2f5c] uppercase px-4 py-3 border-b border-[#d5d5d5]">
            Technical Details
          </h2>

          <div>
            {technicalDetails.map((item) => (
              <div
                key={item.key}
                className="grid grid-cols-[220px_1fr] border-b border-[#d5d5d5] last:border-b-0"
              >
                <p className="text-gray-600 leading-relaxed px-4 py-2 font-semibold text-sm">
                  {item.key}
                </p>
                <p className="text-gray-600 leading-relaxed px-4 py-2 text-sm whitespace-normal">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
