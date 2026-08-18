import React from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  User,
} from "lucide-react";

import {
  useAuth,
} from "../context/AuthContext.jsx";


const Navbar = () => {
  const navigate =
    useNavigate();

  const {
    user,
    logout,
    isAuthenticated,
  } = useAuth();


  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">

      {/* Logo */}
      <div
        onClick={() =>
          navigate("/")
        }
        className="cursor-pointer font-bold text-xl"
      >
        ShopKart
      </div>


      <div className="flex items-center gap-5">

        {/* Other navbar buttons */}
        

        {!isAuthenticated ? (
          <>
            <button
              onClick={() =>
                navigate("/login")
              }
              className="text-white"
            >
              Login
            </button>

            <button
              onClick={() =>
                navigate("/register")
              }
              className="bg-orange-500 px-4 py-2 rounded"
            >
              Sign Up
            </button>
          </>
        ) : (

          <button
            onClick={() =>
              navigate("/profile")
            }
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500"
            title={
              user?.name ||
              "Profile"
            }
          >

            {user?.profilePicture ? (
              <img
                src={
                  user.profilePicture
                }
                alt={
                  user.name
                }
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-orange-500 flex items-center justify-center">
                <User
                  size={20}
                  className="text-black"
                />
              </div>
            )}

          </button>

        )}

      </div>

    </nav>
  );
};

export default Navbar;