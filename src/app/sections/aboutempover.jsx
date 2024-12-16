import React from 'react'

export const AboutEmpover = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/a4.webp')" }}
    >
      {/* Overlay Layer for Second Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: "url('/b11.png')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
         <h1 className='text-white text-6xl text-center leading-tight opacity-85'>Empower your digital efficiency</h1>
      </div>
    </section>
  )
}
