import React from "react";

const Herosection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* First Background Image Layer (Fixed) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/un.jpg')", // First background image
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Keeps the first image fixed
        }}
      ></div>

      {/* Second Background Image Layer (Parallax Scroll) */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "url('/line.svg')", // Second background image
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Dark Overlay for Content Section */}
      <div className="absolute inset-0 z-20 bg-[#5c4e5c] opacity-80"></div>

      {/* Content Section */}
      <div className="relative z-30 text-center text-white max-w-6xl px-6">
        <h1 className="text-5xl font-bold mb-6">Innovating</h1>
        <h1 className="text-5xl font-bold mb-6">Tomorrow, Today.</h1>

        <p className="mb-8 text-lg leading-relaxed">
          Transform your business with Sologens. From web development and
          digital marketing to boosting sales, we bring your vision to life and
          rank your business to its peak. Discover the future of innovation with
          us.
        </p>
        <button className="bg-[#4d0362] text-white py-3 px-8 rounded-full hover:bg-[#63078a] transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Herosection;
