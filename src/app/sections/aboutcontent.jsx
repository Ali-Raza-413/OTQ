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
            QTO Hub LLC is an employee-owned reputable cost estimating firm that
            takes pride in serving a multitude of satisfied clients. Our
            unwavering dedication to meeting stringent deadlines while upholding
            exceptional work quality sets us apart in the industry. We
            understand the importance of your business to you, and we strive to
            provide a comprehensive solution for all your Quantity Takeoff
            needs. No matter how complex or challenging the project, our team is
            fully equipped to fulfill your requirements. With our vast
            experience, we ensure accurate and detailed quantity takeoffs within
            limited time. We firmly believe in delivering results that not only
            meet but exceed your expectations.
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
            src="/s3.png"
            alt="Partner Success"
            className="w-full max-w-lg"
          />
        </div>
        <div className="max-w-lg px-4 ">
          <h1 className="text-4xl font-bold mb-10 text-center lg:text-left text-[#4d0362] ">
            Our Mission
          </h1>
          <p className="text-lg leading-relaxed mb-6 text-gray-600 font-[400]  text-center lg:text-left">
            One of our key differentiators is our ability to deliver exceptional
            work within budgetary constraints. Our team of experts works
            diligently to provide cost- effective solutions without compromising
            on quality. We have successfully completed multi-million-dollar
            projects, which speaks to our competence and reliability. Rest
            assured that when you choose QTO Hub LLC, you are placing your trust
            in capable hands. We prioritize client satisfaction and are
            committed to delivering excellence in all our Take-off services.
            Your project will receive the utmost attention from our experienced
            team, ensuring accurate estimations and timely deliverables. Partner
            with us today, and experience the outstandingTake0off services that
            have made us a trusted name in the industry
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
            At QTO HUB LLC, we envision a world where every sort of construction business, regardless of
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
