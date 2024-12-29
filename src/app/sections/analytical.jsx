"use client";
import React from "react";
import NumberTicker from "@/components/ui/numberticker";
const AnalyticalSection = () => {
  const analyticsData = [
    { id: 1, number: 200, title: "24/7 Monitoring" },
    { id: 2, number: 550, title: "Efficient and Effective Solutions" },
    { id: 3, number: 200, title: "User-Friendly Interfaces" },
    { id: 4, number: 600, title: "Customized Solutions" },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/p3.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {analyticsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg  p-5 hover:scale-105 transform transition duration-300"
            >
             <NumberTicker
                targetNumber={item.number}
                duration={2000} // Animation duration in ms
                className="text-3xl font-bold mb-4 text-yellow-400"
                loop  
              />
              <p className="text-lg text-black font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticalSection;
