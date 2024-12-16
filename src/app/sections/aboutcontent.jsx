import React from "react";

const AboutContent = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl py-16 flex  flex-col lg:flex-row  items-center justify-between px-10 md:px-0">
        {/* Content Section */}
        <div className="max-w-lg px-4 ">
          <h1 className="text-4xl font-bold mb-10 text-center lg:text-left text-[#4d0362] ">
            Who We Are
          </h1>
          <p className="text-lg leading-relaxed mb-6 text-gray-600 font-[400]  text-center lg:text-left">
            Sologens is a dynamic digital solutions provider committed to
            transforming your online presence. Our expertise spans web
            development, eCommerce solutions, digital marketing, and SEO,
            ensuring your business excels in today's competitive landscape. We
            pride ourselves on delivering tailored strategies that not only meet
            but exceed your business goals.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 mt-5 lg:mt-0">
          <img
            src="/b6.webp"
            alt="Partner Success"
            className="w-full max-w-lg"
          />
        </div>
      </div>
      <div className="mx-auto max-w-6xl py-16 flex  flex-col lg:flex-row  items-center justify-between px-10 md:px-0">
        {/* Content Section */}
        <div className="flex-shrink-0 mt-5 lg:mt-0">
          <img
            src="/b6.jpg"
            alt="Partner Success"
            className="w-full max-w-lg"
          />
        </div>
        <div className="max-w-lg px-4 ">
          <h1 className="text-4xl font-bold mb-10 text-center lg:text-left text-[#4d0362] ">
            Our Mission
          </h1>
          <p className="text-lg leading-relaxed mb-6 text-gray-600 font-[400]  text-center lg:text-left">
            Our mission is to empower businesses by enhancing their digital
            footprint through innovative and optimized solutions. We strive to
            build long-lasting relationships with our clients, based on trust
            and results-driven performance.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl py-16 flex  flex-col lg:flex-row  items-center justify-between px-10 md:px-0">
        {/* Content Section */}
        <div className="max-w-lg px-4 ">
          <h1 className="text-4xl font-bold mb-10 text-center lg:text-left text-[#4d0362] ">
            Our Vision
          </h1>
          <p className="text-lg leading-relaxed mb-6 text-gray-600 font-[400]  text-center lg:text-left">
            At Sologens, we envision a world where every business, regardless of
            size, has the tools and knowledge to thrive in the digital
            marketplace. We are dedicated to being a catalyst for growth and
            success for our clients.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 mt-5 lg:mt-0">
          <img
            src="/b9.webp"
            alt="Partner Success"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
