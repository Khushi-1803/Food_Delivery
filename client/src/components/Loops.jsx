
import React from "react";
import assets from "../assets/assets";
import "../App.css"; // Import the CSS file for animations

const dishes = [
  assets.loop1,
  assets.loop2,
  assets.loop3,
  assets.loop4,
  assets.loop5,
  assets.loop6,
  assets.loop7,
  assets.loop8,
];

const Loop = () => {
  return (
    <section className="w-full py-16 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-12 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-[320px] h-[320px]">
              {/* Rotating Circle */}
              <div className="absolute inset-0 rotating-circle">
                {dishes.map((dish, index) => {
                  const angle = index * 45;
                  const radius = 120;

                  const x = radius * Math.cos(((angle - 90) * Math.PI) / 180);

                  const y = radius * Math.sin(((angle - 90) * Math.PI) / 180);

                  return (
                    <div
                      key={index}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                      }}
                    >
                      <img
                        src={dish}
                        alt=""
                        className="w-20 h-20 rounded-full object-cover border border-white shadow-lg"
                      />
                    </div>
                  );
                })}
              </div>

              {/* Center Circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-black border border-orange-500 flex items-center justify-center shadow-xl z-10">
                <div className="text-center">
                  <h2 className="text-xl font-bold text-orange-400">Snack</h2>
                  <h2 className="text-xl font-bold text-white">Loop</h2>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 transition-all duration-500 hover:-translate-y-2">
            <h2 className="text-5xl font-bold mb-6 fade-title">
              Why Choose Our Snacks?
            </h2>

            <p className="text-lg leading-8 mb-8 fade-text">
              Experience the perfect blend of freshness, quality, and taste.
              Every snack is prepared using premium ingredients and authentic
              recipes. Our handcrafted snacks are made fresh every day to
              deliver unforgettable flavor in every bite.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 rounded-full font-semibold fade-btn">
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loop;
