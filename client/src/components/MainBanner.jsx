


import React from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const MainBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto mt-6 sm:mt-8 px-3 sm:px-4">
      <div className="flex flex-col md:flex-row md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">

        {/* Left Content */}
        <div className="w-full md:w-1/2 bg-orange-500 flex flex-col justify-center px-6 py-8 sm:px-8 md:px-10 lg:px-12 md:py-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Craving Something Delicious?
          </h1>

          <p className="text-white mt-4 text-base sm:text-lg">
            Order from our wide range of dishes and get it delivered fast.
          </p>

          <button
            onClick={() => navigate("/dishes")}
            className="mt-6 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold w-fit hover:bg-orange-50 transition-colors cursor-pointer"
          >
            Order Now
          </button>
        </div>

        {/* Right Image / Video */}
        <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-full relative">

          {/* Tablet & Desktop Video */}
          <video
            src={assets.banner2}
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block w-full h-full object-cover object-center"
          />

          {/* Mobile Image */}
          <img
            src={assets.banner_food}
            alt="Delicious food spread"
            className="block md:hidden w-full h-full object-cover object-center"
          />

        </div>
      </div>
    </section>
  );
};

export default MainBanner;
