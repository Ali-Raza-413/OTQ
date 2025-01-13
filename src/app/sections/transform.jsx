"use client";
import React from "react";

const Transform = () => {
  return (
    <div className="mx-auto max-w-6xl py-16 flex  flex-col lg:flex-row  items-center justify-between px-10 md:px-0">
      {/* Content Section */}

      {/* Image Section */}
      <div className="flex-shrink-0 mt-5 lg:mt-0 px-10 ">
        <img
          src="/a3.webp"
          alt="transform Success"
          className="w-full max-w-lg"
        />
      </div>
      <div className="max-w-3xl ">
        <h1 className="text-[2.5rem] font-bold mb-10 text-center  text-[#4d0362] ">
          Ready to Transform Your Bidding Process?
        </h1>
        <p className="text-lg leading-relaxed mb-6 text-gray-600 font-[400]  text-center">
          Partner with QTO Hub and take the first step towards unparalleled
          growth and success. Our team of experts is ready to elevate your
          company to new heights. At QTO Hub, we stand out for our unwavering
          commitment to accuracy and detail. Our comprehensive suite of take-off
          is designed to cater to businesses of all sizes, ensuring each client
          receives personalized attention and strategies that yield tangible
          results. We take pride in our Expert Team, Tailored Solutions,
          Customer- Centric Approach, Proven Track Record
        </p>
        <div className="flex justify-center">
          <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-[#63078a] transition">
            Explore our services and solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transform;
