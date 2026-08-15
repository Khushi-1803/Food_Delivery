
import React from "react";
import { useParams } from "react-router-dom";
import ProductCard2 from "../components/ProductCard2";
import { FoodList } from "../assets/assets";

const FoodListing = () => {
  const { category } = useParams();

  // If category exists, filter products.
  // If no category exists, show all products.
  const filteredProducts = category
    ? FoodList.filter(
        (product) =>
          product.category.toLowerCase() === category.toLowerCase()
      )
    : FoodList;

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 py-10">

      <h1 className="text-3xl font-bold mb-8 capitalize">
        {category || "All Products"}
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard2
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">
          No products found in this category.
        </p>
      )}

    </div>
  );
};

export default FoodListing;

