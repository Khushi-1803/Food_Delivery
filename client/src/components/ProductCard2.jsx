
import React from "react";
import { Heart, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard2 = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(
      `/dishes/${product.category.toLowerCase()}/${product.id}`
    );

    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={handleProductClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Favourite */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition"
        >
          <Heart size={18} />
        </button>

        {/* Category */}
        <span className="absolute bottom-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
          {product.category}
        </span>
      </div>

      {/* Details */}
      <div className="p-5 bg-orange-500">
        <div className="flex justify-between items-start">
          <h2 className="text-sm font-bold text-black line-clamp-1">
            {product.name}
          </h2>

          <span className="bg-black text-white text-sm px-3 py-1 rounded-full font-semibold">
            ⭐ {product.rating}
          </span>
        </div>

        <p className="text-gray-600 mt-2">
          Fresh • Hot • Delicious
        </p>

        <div className="flex items-center justify-between mt-5">
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
            🕒 {product.deliveryTime}
          </span>

          <button
            onClick={(e) => e.stopPropagation()}
            className="bg-orange-300 hover:bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
