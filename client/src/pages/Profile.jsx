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
    isAuthenticated,
  } = useAuth();


  // =====================================================
  // NOT LOGGED IN
  // =====================================================

  if (!isAuthenticated || !user) {

    return (

      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

        <h2 className="text-xl mb-5">
          Please login first.
        </h2>


        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded"
        >
          Go Home
        </button>

      </div>

    );
  }


  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {

    logout();

    navigate("/");
  };


  // =====================================================
  // PROFILE PAGE
  // =====================================================

  return (

    <div className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-xl mx-auto">


        {/* ================================================= */}
        {/* PROFILE IMAGE */}
        {/* ================================================= */}

        <div className="flex flex-col items-center">

          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-orange-500 mb-5">


            {user.profilePicture ? (

              <img
                src={user.profilePicture}
                alt={user.name || "Profile"}
                className="w-full h-full object-cover"
              />

            ) : (

              <div className="w-full h-full bg-orange-500 flex items-center justify-center text-black text-4xl font-bold">

                {user.name
                  ?.charAt(0)
                  ?.toUpperCase() || "U"}

              </div>

            )}

          </div>


          {/* ================================================= */}
          {/* NAME */}
          {/* ================================================= */}

          <h1 className="text-3xl font-bold">
            {user.name}
          </h1>


          {/* ================================================= */}
          {/* EMAIL */}
          {/* ================================================= */}

          <p className="text-gray-400 mt-2">
            {user.email}
          </p>

        </div>


        {/* ================================================= */}
        {/* ACCOUNT */}
        {/* ================================================= */}

        <div className="mt-10 border border-gray-700 p-6 rounded-xl">

          <h2 className="text-xl font-semibold mb-5">
            Account
          </h2>


          {/* <p className="text-gray-400">
            Address
          </p>


          <p className="mt-1">
            {user.address ||
              "No address added"}
          </p> */}
          <div className="mt-10 border border-gray-700 p-6 rounded-xl">

  <div className="flex items-center justify-between">

    <h2 className="text-xl font-semibold">
      Delivery Address
    </h2>

    <button
      onClick={() => navigate("/address")}
      className="text-orange-500 hover:text-orange-400"
    >
      {user.address ? "Change" : "Add Address"}
    </button>

  </div>


  {user.address ? (

    <div className="mt-5 space-y-1 text-gray-300">

      <p className="font-semibold text-white">
        {user.address.fullName}
      </p>

      <p>
        {user.address.houseNo},{" "}
        {user.address.street}
      </p>

      <p>
        {user.address.city},{" "}
        {user.address.state} -{" "}
        {user.address.pincode}
      </p>

      <p>
        Phone: {user.address.phone}
      </p>

    </div>

  ) : (

    <p className="mt-4 text-gray-400">
      No address added
    </p>

  )}

</div>

        </div>


        {/* ================================================= */}
        {/* LOGOUT */}
        {/* ================================================= */}

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 py-3 rounded font-semibold transition"
        >
          Logout
        </button>

      </div>

    </div>

  );
};


export default Profile;