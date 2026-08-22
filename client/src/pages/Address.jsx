import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

const Address = () => {
  const navigate = useNavigate();

  const {
    user,
    token,
    updateUserAddress,
  } = useAuth();

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    houseNo: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(false);

  // =====================================================
  // LOAD EXISTING ADDRESS
  // =====================================================

  useEffect(() => {
    if (user?.address) {
      setAddress({
        fullName: user.address.fullName || "",
        phone: user.address.phone || "",
        houseNo: user.address.houseNo || "",
        street: user.address.street || "",
        city: user.address.city || "",
        state: user.address.state || "",
        pincode: user.address.pincode || "",
      });
    }
  }, [user]);

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAddress((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================================
  // SAVE ADDRESS
  // =====================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user || !token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    try {
      setLoading(true);

      // Save address to backend
      await updateUserAddress(address);

      toast.success("Address saved successfully!");

      // Redirect to HOME
      navigate("/");

    } catch (error) {
      console.error("Address save error:", error);

      toast.error(
        error?.message || "Failed to save address"
      );

    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // NOT LOGGED IN
  // =====================================================

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

        <h1 className="text-2xl font-bold mb-4">
          Please login first
        </h1>

        <button
          onClick={() => navigate("/login")}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-black font-semibold"
        >
          Login
        </button>

      </div>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-2xl mx-auto">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold">
              Delivery Address
            </h1>

            <p className="text-gray-400 mt-2">
              Enter your delivery address
            </p>

          </div>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-orange-500 hover:text-orange-400"
          >
            Home
          </button>

        </div>


        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="bg-black border border-gray-700 rounded-xl p-6 space-y-5"
        >

          {/* FULL NAME */}

          <div>

            <label className="block text-gray-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={address.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              required
              className="
                w-full
                bg-gray-900
                border
                border-gray-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-orange-500
              "
            />

          </div>


          {/* PHONE */}

          <div>

            <label className="block text-gray-300 mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={address.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
              className="
                w-full
                bg-gray-900
                border
                border-gray-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-orange-500
              "
            />

          </div>


          {/* HOUSE */}

          <div>

            <label className="block text-gray-300 mb-2">
              House / Flat / Building
            </label>

            <input
              type="text"
              name="houseNo"
              value={address.houseNo}
              onChange={handleChange}
              placeholder="House / Flat / Building"
              required
              className="
                w-full
                bg-gray-900
                border
                border-gray-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-orange-500
              "
            />

          </div>


          {/* STREET */}

          <div>

            <label className="block text-gray-300 mb-2">
              Street / Area
            </label>

            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleChange}
              placeholder="Street / Area"
              required
              className="
                w-full
                bg-gray-900
                border
                border-gray-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-orange-500
              "
            />

          </div>


          {/* CITY + STATE */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>

              <label className="block text-gray-300 mb-2">
                City
              </label>

              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="
                  w-full
                  bg-gray-900
                  border
                  border-gray-700
                  rounded-lg
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-orange-500
                "
              />

            </div>


            <div>

              <label className="block text-gray-300 mb-2">
                State
              </label>

              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                placeholder="State"
                required
                className="
                  w-full
                  bg-gray-900
                  border
                  border-gray-700
                  rounded-lg
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-orange-500
                "
              />

            </div>

          </div>


          {/* PINCODE */}

          <div>

            <label className="block text-gray-300 mb-2">
              Pincode
            </label>

            <input
              type="text"
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              maxLength={6}
              required
              className="
                w-full
                bg-gray-900
                border
                border-gray-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-orange-500
              "
            />

          </div>


          {/* SAVE ADDRESS */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              disabled:bg-gray-600
              text-black
              font-semibold
              py-3
              rounded-lg
              transition
              cursor-pointer
            "
          >
            {loading
              ? "Saving..."
              : "Save Address"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default Address;