"use client";
import React from "react";

// Example JSON data
const services = [
  {
    id: 1,
    image: "/c2.webp",
    title: "Web Development",
    description:
      "Custom websites tailored to your business needs, ensuring functionality and aesthetic appeal.",
  },
  {
    id: 2,
    image: "/c3.webp",
    title: "SEO Optimization",
    description: "Boost your online visibility and drive organic traffic with expert SEO services.",
  },
  {
    id: 3,
    image: "/c4.webp",
    title: "Digital Marketing",
    description: "Comprehensive strategies to grow your brand and connect with your audience online.",
  },
  {
    id: 4,
    image: "/c5.webp",
    title: "E-commerce Solutions",
    description: "Seamless e-commerce platforms to enhance your sales and user experience.",
  },
  {
    id: 5,
    image: "/c6.webp",
    title: "Mobile App Development",
    description: "Engaging and functional mobile applications tailored to your audience.",
  },
  {
    id: 6,
    image: "/c8.jpg",
    title: "Content Creation",
    description: "High-quality content that aligns with your brand voice and goals.",
  },
  {
    id: 7,
    image: "/c9.webp",
    title: "Graphic Design",
    description: "Creative designs that effectively communicate your brand's message.",
  },
  {
    id: 8,
    image: "/c10.webp",
    title: "Brand Strategy",
    description: "Tailored strategies to establish and grow your brand in the market.",
  },
];

const Services = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto relative">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        {/* Cards Grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      
          {services.map((service) => (
             
            <div
              key={service.id}
              className="bg-gray-100 rounded-lg p-10 md:p-6 shadow-lg relative"
            >
              <img
                src={service.image}
                alt={service.title}
                className="max-w-full rounded-md mb-4 p-[32px] h-auto"
              />
              <h2 className="text-2xl font-bold mt-5">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
