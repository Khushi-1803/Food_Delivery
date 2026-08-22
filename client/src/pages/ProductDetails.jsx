
import React from "react";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../assets/assets";
import { useCart } from "../context/AppContext";
import {useNavigate} from "react-router-dom";


const ProductData = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = ProductDetails.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>
      </div>
    );
  }

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 lg:px-16 py-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ================= LEFT - PRODUCT IMAGE ================= */}
        <div className="flex items-start justify-center">
          <div className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>


        {/* ================= RIGHT - PRODUCT DETAILS ================= */}
        <div className="flex flex-col">

          {/* Product Name */}
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mt-5">
            <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ⭐ {product.rating}
            </span>

            <span className="text-gray-400">
              (285 Ratings)
            </span>
          </div>


          {/* Price */}
          <div className="flex items-center gap-4 mt-6">

            <h2 className="text-3xl font-bold text-orange-500">
              ₹{product.price}
            </h2>

            <span className="text-xl text-gray-500 line-through">
              ₹{product.oldPrice}
            </span>

            <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
              {discount}% OFF
            </span>

          </div>


          {/* Category */}
          <p className="mt-4 text-lg">
            <span className="font-semibold">
              Category :
            </span>{" "}
            <span className="text-orange-500">
              {product.category}
            </span>
          </p>


          {/* Delivery */}
          <p className="mt-2 text-lg">
            <span className="font-semibold">
              Delivery Time :
            </span>{" "}
            <span className="text-gray-300">
              {product.deliveryTime}
            </span>
          </p>


          {/* ================= DESCRIPTION ================= */}

          <div className="mt-6">

            <h2 className="text-2xl font-bold mb-3">
              Description
            </h2>

            <p className="text-gray-300 leading-7">
              {product.description}
            </p>

          </div>


          {/* ================= INGREDIENTS ================= */}

          <div className="mt-6">

            <h2 className="text-2xl font-bold mb-3">
              Ingredients
            </h2>

            <ul className=" flex gap-5 list-disc ml-6 space-y-2 text-gray-300">
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient}
                </li>
              ))}
            </ul>

          </div>


          {/* ================= BUTTONS ================= */}

          <div className="flex flex-col sm:flex-row gap-4 mt-5">

            {/* Add To Cart */}
            <button
              onClick={() => addToCart(product)}
              className="
    flex-1
    bg-orange-500
    hover:bg-orange-600
    text-white
    font-bold
    py-4
    rounded-xl
    transition
    duration-300
    shadow-lg
  "
            >
              🛒 Add to Cart
            </button>


            {/* Buy Now */}
            <button
              type="button"
              onClick={() => navigate("/cart")}
              className="
                flex-1
                bg-white
                hover:bg-gray-200
                text-black
                font-bold
                py-4
                rounded-xl
                transition
                duration-300
                shadow-lg
              "
            >
              ⚡ Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductData;
