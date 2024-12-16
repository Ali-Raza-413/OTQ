"use client";
import React from "react";

const ImageGallery = () => {
  const images = [
    { id: 1, src: "/b1.webp", alt: "Image b1" },
    { id: 2, src: "/b2.webp", alt: "Image b2" },
    { id: 3, src: "/b3.webp", alt: "Image b3" },
    { id: 4, src: "/b4.png", alt: "Image b4" },
    { id: 5, src: "/b5.png", alt: "Image b5" },
  ];

  return (
    <div className="bg-gray-200">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl text-center font-semibold text-[#63078a] leading-tight">
          Our Clients
        </h1>
        <p className="text-lg font-[450] text-center text-gray-500 ">
          Join the leaders.
        </p>
        <div className="flex gap-3 flex-col lg:flex-row items-center justify-center">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="w-[200px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
