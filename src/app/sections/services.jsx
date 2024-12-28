"use client";
import React from "react";

// Example JSON data
const services = [
  { id: 1, title: "General Contracting Take-offs" },
  { id: 2, title: "MEP Take-offs" },
  { id: 3, title: "Plumbing Take-offs" },
  { id: 4, title: "Civil Take-offs" },
  { id: 5, title: "Concrete Take-offs" },
  { id: 6, title: "Site Take-offs" },
  { id: 7, title: "Rebar Take-offs" },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white hover:bg-[#63078a] text-black rounded-lg p-8 shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out relative"
            >
              <h2 className="text-xl text-center font-semibold mt-6    group-hover:text-[#fdda04] transition duration-300">
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
