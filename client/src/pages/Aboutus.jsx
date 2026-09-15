import React, { useEffect, useRef } from "react";
import assets from "../assets/assets";

const Aboutus = () => {
  const hero = useRef(null);
  const story = useRef(null);
  const cards = useRef([]);
  const stats = useRef([]);

 

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
     <div className="flex justify-center py-10 bg-black">
  <div className="flex flex-col md:flex-row w-[90%] max-w-5xl h-[60vh] rounded-2xl overflow-hidden shadow-xl">

    {/* Left Side */}
    <div className="w-full md:w-1/2 bg-gradient-to-r bg-black flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
        About Our Restaurant
      </h1>

      <p className="text-sm md:text-base text-orange-200 max-w-sm">
        Serving unforgettable flavors with fresh ingredients, passion,
        and exceptional hospitality since day one.
      </p>

    </div>

    {/* Right Side */}
    <div className="w-full md:w-1/2 bg-black flex justify-center items-center">

      <img
        src={assets.aboutimg}
        alt="Restaurant"
        className="w-4/5 h-4/5 object-cover rounded-xl"
      />

    </div>

  </div>
</div>

      {/* Story */}
      <section
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <img
        src={assets.about2img}
        alt="Restaurant"
        className="w-full max-w-[500px] aspect-square object-cover rounded-full shadow-2xl"
        />

        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Our Story
          </h2>

          <p className="text-gray-300 leading-8 mb-4">
            We believe food is more than just a meal—it's an experience.
            Every dish is prepared with carefully selected ingredients,
            authentic recipes, and a touch of creativity.
          </p>

          <p className="text-gray-300 leading-8">
            Our mission is to create memorable dining experiences where
            family and friends gather over delicious food and warm
            hospitality.
          </p>
        </div>
      </section>

     
      {/* Stats */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">

          {[
            ["15+", "Years"],
            ["50K+", "Customers"],
            ["120+", "Dishes"],
            ["20+", "Chefs"],
          ].map(([number, label], index) => (
            <div
              key={index}
              ref={(el) => (stats.current[index] = el)}
              className="text-center"
            >
              <h2 className="text-5xl font-bold text-orange-500">
                {number}
              </h2>

              <p className="mt-3 text-gray-400">
                {label}
              </p>
            </div>
          ))}

        </div>

      </section>
    </div>
  );
};

export default Aboutus;