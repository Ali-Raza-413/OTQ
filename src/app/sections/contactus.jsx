"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Contactus = () => {
  const router = useRouter();
  return (
    <div className="relative h-[350px] flex items-center justify-center bg-black">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0" // Changed z-index to 0 so the image layer is below the content
        style={{
          backgroundImage: "url('/p1.svg')",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat no-repeat",
          // Centers the image
          // Makes the image cover the container
        }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 text-center text-white max-w-2xl px-10 md:px-0">
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <h1 className="md:text-4xl font-bold mb-4 text-2xl">
              Join hands with us on a success venture
            </h1>
            <p className="mb-6 text-lg font-[400]">
            Transfor your bidding processes and numbers with our experts.
            </p>
          </div>
          <div className="md:mt-10 mb-5">
            <button className="bg-[#4d0362] text-white text-xl font-semibold w-[200px] h-[50px]  rounded-xl hover:bg-[#63078a] transition"
                    onClick={() => router.push("/contactus")}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
