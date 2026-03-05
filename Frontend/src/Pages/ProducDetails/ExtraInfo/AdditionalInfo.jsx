import React from "react";

export default function AdditionalInfo() {
  return (
    <section className="w-full">
      <div className="border-t border-gray-200">
        <div className="flex py-4 border-b border-gray-200">
          <div className="w-48 font-semibold text-gray-900">Weight</div>
          <div className="flex-1 italic text-gray-600">100g, 250g</div>
        </div>
      </div>
    </section>
  );
}
