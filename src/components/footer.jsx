import React from "react";
import { Facebook, Linkedin, Instagram, PhoneCall, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#4d0362] p-10 md:p-0">
      {/* Icons Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 py-8  ">
        {/* Facebook Icon */}
        <div className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition">
          <Facebook className="text-[#1877F2]" /> {/* Facebook Blue */}
        </div>

        {/* Instagram Icon */}
        <div className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition">
          <Instagram className="text-[#E4405F]" /> {/* Instagram Pink */}
        </div>

        {/* LinkedIn Icon */}
        <div className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition">
          <Linkedin className="text-[#0077B5]" /> {/* LinkedIn Blue */}
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto text-center ">
        <p className="mt-4 text-white font-[450]">
          our unwavering commitment to accuracy and detail. Our comprehensive
          suite of take-off is designed to cater to businesses of all sizes,
          ensuring each client receives personalized attention and strategies
          that yield tangible results. We take pride in our Expert Team,
          Tailored Solutions, Customer- Centric Approach, Proven Track Record
        </p>

        <div className="flex flex-col items-center md:gap-5 mt-5 md:flex-row md:justify-center">
          <div className="flex items-center gap-2">
            <PhoneCall className="text-white" />
            <p className="text-white font-[450]">+ 92 336 7677802​</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-white" />
            <p className="text-white font-[450]">usmankhan3151@gmail.com​</p>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <Image src="/a6.png" width={120} height={120} alt="footer icon"  className="bg-white rounded-md"/>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-5 md:bg-[#00000026] md:p-3">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between text-center md:text-left">
          <p className="text-white opacity-80">
            Copyright © 2024 QTO. All Rights Reserved.
          </p>
          <div className="flex gap-1 flex-wrap items-center justify-center">
            <p className="text-white">Powered by</p>
            <button className="text-black opacity-80 bg-gray-100 rounded-full px-2">
              Odoo
            </button>
            <a href="#" className="text-white">
              - The #1{" "}
              <span className="text-[#c60ef8]">Open Source eCommerce</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
