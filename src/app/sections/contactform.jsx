"use client";
import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-6xl mx-auto py-10">
      {/* Business Hours Section */}
      <div className="px-4 md:px-0">
      <div className="flex flex-col bg-[#63078a] p-5 mb-5 max-w-md mx-auto rounded-lg shadow-lg">
        <p className="text-3xl font-semibold text-center mb-3 text-[#fdda04]">
        Working  Hours
        </p>
        <div className="text-center mb-5  text-white">
        <p className="text-xl font-[400] mb-3">
          Monday: <span className="font-[500]">8 AM to 5 PM</span>
        </p>
        <p className="text-xl font-[400] mb-3">
          Tuesday: <span className="font-[500] ">8 AM to 5 PM</span>
        </p>
        <p className="text-xl font-[400] mb-3">
          Wednesday: <span className="font-[500]">8 AM to 5 PM</span>
        </p>
        <p className="text-xl font-[400] mb-3">
          Thursday: <span className="font-[500]">8 AM to 5 PM</span>
        </p>
        <p className="text-xl font-[400]">
          Friday: <span className="font-[500]">8 AM to 5 PM</span>
        </p>
        </div>
      </div>
      </div>
      {/* Main Contact Us Message */}
      <p className="text-center text-xl font-semibold max-w-lg mx-auto px-4 md:px-0">
        Contact us about anything related to our company or services. We'll do
        our best to get back to you as soon as possible.
      </p>

      <div className="max-w-4xl p-5">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="name"
              className="w-1/3 text-right font-medium text-gray-600"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-2/3 p-3 border border-gray-300 rounded-md text-black"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="email"
              className="w-1/3 text-right font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-2/3 p-3 border border-gray-300 rounded-md text-black"
            />
          </div>

          {/* Phone Number Field */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="phone"
              className="w-1/3 text-right font-medium text-gray-600"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-2/3 p-3 border border-gray-300 rounded-md text-black"
            />
          </div>

          {/* Subject Field */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="subject"
              className="w-1/3 text-right font-medium text-gray-600"
            >
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              className="w-2/3 p-3 border border-gray-300 rounded-md text-black"
            />
          </div>

          {/* Question/Message Field */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="question"
              className="w-1/3 text-right font-medium text-gray-600"
            >
              Questions:
            </label>
            <textarea
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              placeholder="Enter your questions or message"
              className="w-2/3 p-3 border border-gray-300 rounded-md text-black"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button className="bg-[#4d0362] text-white py-3 px-8 rounded-full hover:bg-[#63078a] transition">
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
