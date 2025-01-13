"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Herosection = () => {
  const router = useRouter();
  
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-[#4a6270] opacity-60"></div>

      {/* Content Section */}
      <div className="relative z-20 text-center text-white max-w-6xl px-6">
        <h1 className=" text-4xl md:text-6xl font-bold md:mb-4">Innovating</h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Today & Tomorrow.</h1>

        <p className="mb-8 text-2xl md:text-3xl font-[400] leading-relaxed">
        Transform your business with QTO Hub. From bidding to estimation to 
        boosting sales, we bring your vision to life and rank your business to its peak
        </p>
        <button className="bg-[#4d0362] md:text-3xl text-white py-3 px-10 rounded-full hover:bg-[#63078a] transition"
                onClick={() => router.push("/contactus")}
                  
           >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Herosection;
