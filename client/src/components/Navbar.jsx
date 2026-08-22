import React, { useState } from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  User,
  ShoppingCart,
  Heart,
  LogOut,
} from "lucide-react";

import {
  useAuth,
} from "../context/AuthContext.jsx";

import {
  useAppContext,
} from "../context/AppContext.jsx";


const Navbar = () => {

  const navigate = useNavigate();


  // =====================================================
  // AUTH
  // =====================================================

  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();


  // =====================================================
  // APP CONTEXT
  // =====================================================

  const {
    cartCount,
    favouriteCount,
    setShowUserLogin,
  } = useAppContext();


  // =====================================================
  // PROFILE MENU
  // =====================================================

  const [showLogout, setShowLogout] =
    useState(false);


  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
  logout();

  setShowLogout(false);

  // Completely restart React application
  window.location.href = "/";
};


  // =====================================================
  // PROFILE
  // =====================================================

  const handleProfileClick = () => {

    setShowLogout(false);

    navigate("/profile");

  };


  // =====================================================
  // MY ORDERS
  // =====================================================

  const handleMyOrdersClick = () => {

    setShowLogout(false);

    navigate("/my-orders");

  };


  return (

    <nav
      className="
        flex
        items-center
        justify-between
        px-6
        py-4
        bg-black
        text-white
        border-b
        border-gray-800
      "
    >

      {/* ================================================= */}
      {/* LOGO */}
      {/* ================================================= */}

      <div
        onClick={() => navigate("/")}
        className="
          cursor-pointer
          font-bold
          text-xl
          text-orange-500
        "
      >
        ShopKart
      </div>


      {/* ================================================= */}
      {/* NAVIGATION */}
      {/* ================================================= */}

      <div
        className="
          hidden
          md:flex
          items-center
          gap-8
        "
      >

        {/* HOME */}

        <button
          type="button"
          onClick={() => navigate("/")}
          className="
            text-white
            hover:text-orange-500
            transition
          "
        >
          Home
        </button>


        {/* DISHES */}

        <button
          type="button"
          onClick={() => navigate("/dishes")}
          className="
            text-white
            hover:text-orange-500
            transition
          "
        >
          Dishes
        </button>


        {/* ABOUT US */}

        <button
          type="button"
          onClick={() => navigate("/aboutus")}
          className="
            text-white
            hover:text-orange-500
            transition
          "
        >
          About Us
        </button>


        {/* CONTACT */}

        <button
          type="button"
          onClick={() => navigate("/contact")}
          className="
            text-white
            hover:text-orange-500
            transition
          "
        >
          Contact Us
        </button>

      </div>


      {/* ================================================= */}
      {/* RIGHT SIDE */}
      {/* ================================================= */}

      <div
        className="
          flex
          items-center
          gap-5
        "
      >

       

        {/* ================================================= */}
        {/* FAVOURITES */}
        {/* ================================================= */}

        <button
          type="button"
          onClick={() => navigate("/favourites")}
          className="
            relative
            hover:text-orange-500
            transition
            p-1
          "
          title="Favourites"
        >

          <Heart size={25} />

          {favouriteCount > 0 && (

            <span
              className="
                absolute
                -top-2
                -right-2
                min-w-[20px]
                h-5
                px-1
                rounded-full
                bg-orange-500
                text-black
                text-xs
                font-bold
                flex
                items-center
                justify-center
              "
            >
              {favouriteCount}
            </span>

          )}

        </button>


        {/* ================================================= */}
        {/* CART */}
        {/* ================================================= */}

        <button
          type="button"
          onClick={() => navigate("/cart")}
          className="
            relative
            hover:text-orange-500
            transition
            p-1
          "
          title="Cart"
        >

          <ShoppingCart size={25} />

          {cartCount > 0 && (

            <span
              className="
                absolute
                -top-2
                -right-2
                min-w-[20px]
                h-5
                px-1
                rounded-full
                bg-orange-500
                text-black
                text-xs
                font-bold
                flex
                items-center
                justify-center
              "
            >
              {cartCount}
            </span>

          )}

        </button>


        {/* ================================================= */}
        {/* AUTHENTICATED USER */}
        {/* ================================================= */}

        {isAuthenticated ? (

          <div className="relative">


            {/* ============================================= */}
            {/* PROFILE BUTTON */}
            {/* ============================================= */}

            <button
              type="button"
              onClick={() =>
                setShowLogout(
                  (previous) => !previous
                )
              }
              className="
                w-10
                h-10
                rounded-full
                overflow-hidden
                border-2
                border-orange-500
                cursor-pointer
                focus:outline-none
              "
              title="Profile"
            >

              {user?.profilePicture ? (

                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              ) : (

                <div
                  className="
                    w-full
                    h-full
                    bg-orange-500
                    flex
                    items-center
                    justify-center
                  "
                >

                  <User
                    size={20}
                    className="text-black"
                  />

                </div>

              )}

            </button>


            {/* ============================================= */}
            {/* PROFILE DROPDOWN */}
            {/* ============================================= */}

            {showLogout && (

              <div
                className="
                  absolute
                  right-0
                  top-12
                  z-[9999]
                  w-48
                  bg-white
                  text-black
                  rounded-lg
                  shadow-2xl
                  border
                  border-gray-200
                  overflow-hidden
                "
              >

                {/* ========================================= */}
                {/* PROFILE */}
                {/* ========================================= */}

                <button
                  type="button"
                  onClick={handleProfileClick}
                  className="
                    block
                    w-full
                    text-left
                    px-4
                    py-3
                    hover:bg-gray-100
                    cursor-pointer
                    transition
                  "
                >
                  Profile
                </button>


                {/* ========================================= */}
                {/* MY ORDERS */}
                {/* ========================================= */}

                <button
                  type="button"
                  onClick={handleMyOrdersClick}
                  className="
                    block
                    w-full
                    text-left
                    px-4
                    py-3
                    hover:bg-gray-100
                    cursor-pointer
                    transition
                  "
                >
                  My Orders
                </button>


                {/* ========================================= */}
                {/* LOGOUT */}
                {/* ========================================= */}

                <button
                  type="button"
                  onClick={handleLogout}
                  className="
                    flex
                    items-center
                    gap-2
                    w-full
                    text-left
                    px-4
                    py-3
                    text-red-500
                    hover:bg-red-50
                    cursor-pointer
                    transition
                  "
                >

                  <LogOut size={18} />

                  Logout

                </button>

              </div>

            )}

          </div>

        ) : (

          /* ================================================= */
          /* LOGIN */
          /* ================================================= */

          <button
            type="button"
            onClick={() =>
              setShowUserLogin(true)
            }
            className="
              bg-orange-500
              hover:bg-orange-600
              px-4
              py-2
              rounded
              text-black
              font-medium
              transition
            "
          >
            Login
          </button>

        )}

      </div>

    </nav>

  );

};


export default Navbar;