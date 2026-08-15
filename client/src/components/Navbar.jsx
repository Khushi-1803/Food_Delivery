import React, { useState } from "react";
import assets from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
   const navigate = useNavigate();

  const {
  cartCount,
  favouriteCount,
  setShowUserLogin,
} = useAppContext();

  return (
    <nav className="bg-black shadow-md">

      <div className="flex justify-between items-center p-4">

        {/* Logo */}
        <img
          src={assets.logo}
          alt="Logo"
          className="w-10"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/dishes"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-white"
            }
          >
            Dishes
          </NavLink>

          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-white"
            }
          >
            About us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-white"
            }
          >
            Contact
          </NavLink>

        </ul>

        {/* Icons + Sign In */}
        <div className="flex items-center gap-4">

          {/* Favourite */}
          {/* Favourite */}
<NavLink
  to="/favourites"
  className="relative cursor-pointer block"
>
  <img
    className="w-6 h-6"
    src={assets.favourite}
    alt="Favourite"
  />

  {favouriteCount > 0 && (
    <span
      className="
        absolute
        -top-3
        -right-3
        bg-red-500
        text-white
        text-xs
        font-bold
        w-5
        h-5
        rounded-full
        flex
        items-center
        justify-center
      "
    >
      {favouriteCount}
    </span>
  )}
</NavLink>

          {/* Cart */}
          <NavLink
  to="/cart"
  className="relative cursor-pointer block"
>
  <img
    className="w-6 h-6"
    src={assets.cart}
    alt="Cart"
  />

  {cartCount > 0 && (
    <span
      className="
        absolute
        -top-3
        -right-3
        bg-orange-500
        text-white
        text-xs
        font-bold
        w-5
        h-5
        rounded-full
        flex
        items-center
        justify-center
      "
    >
      {cartCount}
    </span>
  )}
</NavLink>

         

          {/* Sign In */}
          <button
            type="button"
            onClick={() => setShowUserLogin(true)}
            className="
              bg-orange-500
              text-white
              px-3
              py-2
              rounded
              cursor-pointer
            "
          >
            SignIn
          </button>

        </div>

        {/* Hamburger */}
        <button
          type="button"
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md">

          <ul className="flex flex-col items-center py-4 gap-4">

            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Dishes</a>
            </li>

            <li>
              <a href="#">Orders</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;