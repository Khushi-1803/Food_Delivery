import React from "react";
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";

const Favourite = () => {
  const navigate = useNavigate();

  const {
    favourites,
    toggleFavourite,
    addToCart,
  } = useAppContext();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= HEADER ================= */}
      <div className="border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-8">

          <div className="flex items-center justify-between gap-4">

            {/* Title */}
            <div>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
                Your Collection
              </p>

              <h1 className="text-3xl md:text-5xl font-bold mt-2">
                My Favourites
              </h1>

              <p className="text-white/60 mt-2">
                Your favourite dishes, all in one place.
              </p>
            </div>

            {/* Favourite Count */}
            <div className="hidden sm:flex items-center gap-2 border border-orange-500 px-4 py-3 rounded-full">
              <Heart
                size={20}
                className="text-orange-500"
                fill="currentColor"
              />

              <span className="text-white font-semibold">
                {favourites.length}
              </span>
            </div>

          </div>

        </div>
      </div>


      {/* ================= CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-5 md:px-10 py-10">

        {favourites.length === 0 ? (

          /* ================= EMPTY STATE ================= */
          <div className="min-h-[55vh] flex flex-col items-center justify-center text-center">

            <div className="w-24 h-24 rounded-full border-2 border-orange-500 flex items-center justify-center">
              <Heart
                size={45}
                className="text-orange-500"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-7">
              No Favourite Dishes
            </h2>

            <p className="text-white/60 mt-3 max-w-md">
              You haven't added any dishes to your favourites yet.
              Explore our menu and save the dishes you love.
            </p>

            <button
              type="button"
              onClick={() => navigate("/dishes")}
              className="
                mt-7
                bg-orange-500
                hover:bg-orange-600
                text-black
                font-bold
                px-7
                py-3
                rounded-full
                transition
                duration-300
              "
            >
              Explore Dishes
            </button>

          </div>

        ) : (

          /* ================= FAVOURITE LIST ================= */
          <div className="space-y-6">

            {favourites.map((product) => (

              <div
                key={product.id}
                className="
                  bg-black
                  border
                  border-orange-500/40
                  hover:border-orange-500
                  rounded-2xl
                  overflow-hidden
                  transition
                  duration-300
                  shadow-[0_0_20px_rgba(249,115,22,0.08)]
                  hover:shadow-[0_0_25px_rgba(249,115,22,0.18)]
                "
              >

                <div className="flex flex-col md:flex-row">

                  {/* ================= IMAGE ================= */}
                  <div className="relative w-full md:w-64 h-56 md:h-48 shrink-0 overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        hover:scale-105
                        transition
                        duration-500
                      "
                    />

                    {/* Category */}
                    <span
                      className="
                        absolute
                        bottom-4
                        left-4
                        bg-orange-500
                        text-black
                        text-xs
                        font-bold
                        px-3
                        py-1
                        rounded-full
                      "
                    >
                      {product.category}
                    </span>

                  </div>


                  {/* ================= DETAILS ================= */}
                  <div className="flex-1 p-5 md:p-7">

                    {/* Top */}
                    <div className="flex justify-between items-start gap-4">

                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                          {product.name}
                        </h2>

                        <p className="text-orange-500 text-sm mt-1">
                          Fresh • Hot • Delicious
                        </p>
                      </div>


                      {/* Remove Favourite */}
                      <button
                        type="button"
                        onClick={() => toggleFavourite(product)}
                        title="Remove from favourites"
                        className="
                          shrink-0
                          w-10
                          h-10
                          rounded-full
                          bg-orange-500
                          text-black
                          flex
                          items-center
                          justify-center
                          hover:bg-white
                          transition
                          duration-300
                        "
                      >
                        <Heart
                          size={20}
                          fill="currentColor"
                        />
                      </button>

                    </div>


                    {/* ================= PRODUCT INFO ================= */}
                    <div className="flex flex-wrap items-center gap-3 mt-5">

                      {/* Rating */}
                      <span
                        className="
                          border
                          border-orange-500
                          text-orange-500
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          font-semibold
                        "
                      >
                        ⭐ {product.rating}
                      </span>


                      {/* Delivery */}
                      <span
                        className="
                          border
                          border-orange-500
                          text-orange-500
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          font-semibold
                        "
                      >
                        🕒 {product.deliveryTime}
                      </span>


                      {/* Price */}
                      {product.price && (
                        <span
                          className="
                            bg-orange-500
                            text-black
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-bold
                          "
                        >
                          ₹{product.price}
                        </span>
                      )}

                    </div>


                    {/* ================= BOTTOM ================= */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">

                      <p className="text-white/50 text-sm">
                        Added to your favourites
                      </p>


                      {/* Add To Cart */}
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          bg-orange-500
                          hover:bg-white
                          text-black
                          font-bold
                          px-6
                          py-3
                          rounded-full
                          transition
                          duration-300
                        "
                      >
                        <ShoppingCart size={18} />

                        Add to Cart
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </main>


      {/* ================= BOTTOM NAVIGATION ================= */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 pb-10">

        <button
          type="button"
          onClick={() => navigate("/dishes")}
          className="
            flex
            items-center
            gap-2
            text-orange-500
            hover:text-white
            font-semibold
            transition
          "
        >
          <ArrowLeft size={18} />

          Continue Shopping
        </button>

      </div>

    </div>
  );
};

export default Favourite;