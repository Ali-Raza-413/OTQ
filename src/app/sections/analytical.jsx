"use client";
import React from "react";

const AnalyticalSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/a4.webp')" }}
    >
      {/* Overlay Layer for Second Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: "url('/a5.svg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Content Block 1 */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 text-white">12</h2>
            <p className="text-lg text-gray-200 ">24/7 Monitoring</p>
          </div>

          {/* Content Block 2 */}
          <div className="flex flex-col  items-center">
            <h2 className="text-3xl font-bold mb-4 text-white ">45</h2>
            <p className="text-lg text-gray-200 ">
              Efficient and Effective Solutions
            </p>
          </div>

          {/* Content Block 3 - With Dark Effect */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-200 shadow-lg text-center ">
              8
            </h2>
            <p className="text-lg text-gray-200 ">User-Friendly Interfaces</p>
          </div>

          {/* Content Block 4 */}
          <div className="flex flex-col  items-center">
            <h2 className="text-3xl font-bold mb-4 text-white">37</h2>
            <p className="text-lg text-gray-200">Customized Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticalSection;
