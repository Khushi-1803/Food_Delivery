import React from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext.jsx";


const Profile = () => {
  const navigate =
    useNavigate();

  const {
    user,
    logout,
  } = useAuth();


  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Please login first.
      </div>
    );
  }


  const handleLogout = () => {
    logout();

    navigate("/login");
  };


  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-xl mx-auto">

        <div className="flex flex-col items-center">

          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-orange-500 mb-5">

            {user.profilePicture ? (
              <img
                src={
                  user.profilePicture
                }
                alt={user.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-orange-500 flex items-center justify-center text-black text-4xl font-bold">
                {user.name
                  ?.charAt(0)
                  ?.toUpperCase()}
              </div>
            )}

          </div>


          <h1 className="text-3xl font-bold">
            {user.name}
          </h1>

          <p className="text-gray-400 mt-2">
            {user.email}
          </p>

        </div>


        <div className="mt-10 border border-gray-700 p-6 rounded-xl">

          <h2 className="text-xl font-semibold mb-5">
            Account
          </h2>


          <p className="text-gray-400">
            Address
          </p>

          <p className="mt-1">
            {user.address ||
              "No address added"}
          </p>

        </div>


        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 py-3 rounded font-semibold"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Profile;