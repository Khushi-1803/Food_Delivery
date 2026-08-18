import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";

const Profile = () => {

  const {
    user,
    setUser,
    logout,
  } = useAppContext();

  const [address, setAddress] = useState(
    user?.address || ""
  );

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Please login first.
      </div>
    );
  }


  const updateAddress = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const { data } = await axios.put(
        "/api/user/address",
        {
          address,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      if (data.success) {

        setUser(data.user);

        toast.success(
          "Address updated successfully"
        );
      }

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to update address"
      );
    }
  };


  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-4xl font-bold text-orange-500 mb-8">
          My Profile
        </h1>


        {/* User ID + Name + Email */}

        <div className="bg-zinc-900 rounded-2xl p-6 space-y-4">

          <div>
            <p className="text-gray-400">
              User ID
            </p>

            <p className="break-all">
              {user.id || user._id}
            </p>
          </div>


          <div>
            <p className="text-gray-400">
              Name
            </p>

            <p>
              {user.name}
            </p>
          </div>


          <div>
            <p className="text-gray-400">
              Email
            </p>

            <p>
              {user.email}
            </p>
          </div>


          <div>

            <p className="text-gray-400 mb-2">
              Address
            </p>

            <input
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              placeholder="Enter your complete address"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
            />

          </div>


          <button
            onClick={updateAddress}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
          >
            Save Address
          </button>


          <button
            onClick={logout}
            className="w-full border border-red-500 text-red-400 py-3 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;