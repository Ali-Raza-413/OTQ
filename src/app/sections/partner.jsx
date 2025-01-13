"use client";
import React from "react";

const PartnerSection = () => {
  return (
    <div className="mx-auto max-w-6xl py-16 flex  flex-col lg:flex-row  items-center justify-between px-10 md:px-0">
      {/* Content Section */}
      <div className="max-w-lg ">
        <h1 className="text-4xl font-bold mb-10 text-center lg:text-left text-[#4d0362] ">
          Your Partner in Success
        </h1>
        <p className="text-lg leading-relaxed mb-6 text-gray-600 font-[400]  text-center lg:text-left">
          At QTO Hub, we provide comprehensive and detailed take-offs to
          elevate your bidding process. We expertise in GC, MEP, Subcontracting
          and all types of building take-offs. We ensure your bid stands out in
          whole bidding process. Let us help you achieve your business goals.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-[#63078a] transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 mt-5 lg:mt-0">
        <img src="/s1.jpg" alt="Partner Success" className="w-full max-w-lg" />
      </div>
    </div>
  );
};

export default PartnerSection;
