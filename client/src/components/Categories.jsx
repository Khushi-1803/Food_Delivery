
import React from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/assets";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h2 className="text-2xl font-bold mb-8">Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => {
              navigate(`/dishes/${category.path.toLowerCase()}`);
              window.scrollTo(0, 0);
            }}
          >
            {/* Image */}
            <div
              className="
                w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36
                overflow-hidden rounded-full shadow-lg
                transition-all duration-300
                group-hover:scale-105
                group-hover:ring-4
                group-hover:ring-orange-500
                group-hover:ring-offset-2
                group-hover:ring-offset-black
              "
            >
              <img
                src={category.image}
                alt={category.text}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <p className="mt-3 text-white font-semibold">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

