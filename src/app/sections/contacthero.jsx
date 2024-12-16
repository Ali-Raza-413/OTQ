import React from "react";

const ContactHero = () => {
  return (
    <div className="relative h-[200px]">
      {/* First Background Image Layer (Fixed) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/b7.jpg')", // First background image
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Keeps the first image fixed
        }}
      ></div>

      {/* Dark Overlay for Content Section */}
      <div className="absolute inset-0 z-20 bg-[#5c4e5c] opacity-80"></div>

      {/* Content Section */}
      <div className="relative z-30 max-w-6xl mx-auto h-full flex items-center">
        <div className="text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Contact us</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
