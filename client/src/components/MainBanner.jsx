import React from "react";
import assets from "../assets/assets";

const MainBanner = () => {
  return (
    <section className="max-w-7xl mx-auto mt-8 px-4">
      <div className="flex flex-col lg:flex-row h-[400px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
        {/* Left */}
        <div className="w-full lg:w-1/2 bg-orange-500 flex flex-col justify-center px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Craving Something Delicious?
          </h1>

          <p className="text-white mt-4 text-lg">
            Order from our wide range of dishes and get it delivered fast.
          </p>

          <button className="mt-6 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold w-fit">
            Order Now
          </button>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 h-full relative">
          <video
            src={assets.banner2}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
