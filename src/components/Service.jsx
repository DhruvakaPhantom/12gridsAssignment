import React from "react";

const Service = () => {
  return (
    <div className="services flex flex-col  h-[400px] mt-10 mb-10 justify-center items-center gap-8 md:gap-12 lg:flex-row lg:gap-16">
      <div className="flex space-x-8    md:space-x-16 lg:space-x-12">
        <img
          src="/src/assets/frame-5.png"
          alt="services"
          className="cursor-pointer"
        />
        <img
          src="/src/assets/frame-6.png"
          alt="services"
          className="cursor-pointer"
        />
      </div>
      <div className="flex space-x-8  md:space-x-16 lg:space-x-12">
        <img
          src="/src/assets/frame-4.png"
          alt="services"
          className="cursor-pointer"
        />
        <img
          src="/src/assets/frame-3.png"
          alt="services"
          className="cursor-pointer"
        />
      </div>
      <div className="flex space-x-8  md:space-x-16 lg:space-x-12">
        <img
          src="/src/assets/frame-1.png"
          alt="services"
          className="cursor-pointer"
        />
        <img
          src="/src/assets/frame-2.png"
          alt="services"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Service;
