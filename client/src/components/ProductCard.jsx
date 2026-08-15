import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="relative bg-black border border-orange-800 rounded-2xl p-4 text-center overflow-hidden transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,140,0,0.5)]">

      {/* Badge */}
      <span className="absolute top-3 left-3 bg-orange-500 text-black text-[10px] font-bold px-2 py-1 rounded shadow-[0_0_10px_#84cc16]">
        BEST
        <br />
        SELLER
      </span>

      {/* Image */}
      <img
        src={product.image}
        alt={product.text}
        className="w-40 h-40 object-contain mx-auto"
      />

      {/* Name */}
      <h2 className="text-white font-semibold text-lg mt-2">
        {product.text}
      </h2>

      {/* Price */}
      <p className="text-orange-500 text-xl font-bold mt-1">
        Rs. {product.price}
      </p>

      {/* Button */}
      <button
  onClick={() => addToCart(product)}
  className="mt-4 w-full border border-orange-500 rounded-lg py-2 flex items-center justify-center gap-2 text-orange-400 hover:bg-orange-500 hover:text-white transition"
>
  <ShoppingCart size={18} />
  Add to Cart
</button>

    </div>
  );
};

export default ProductCard;