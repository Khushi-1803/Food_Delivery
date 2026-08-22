
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/AppContext";
import { useAuth } from "../context/AuthContext.jsx";
import { API_URL } from "../config/api.js";


const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    setCartItems,
  } = useCart();

  const {
    user,
    token,
    isAuthenticated,
  } = useAuth();


  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    const newQuantity = Number(quantity);

    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: newQuantity,
          }
          : item
      )
    );
  };

  // Total number of products
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Price
  const price = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  // Tax 2%
  const tax = price * 0.02;

  // Shipping
  const shippingFee = 0;

  // Final total
  const totalAmount = price + tax + shippingFee;

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">

        <h1 className="text-3xl font-bold mb-4">
          Your Cart is Empty
        </h1>

        <p className="text-gray-400 mb-6">
          Add some delicious items to your cart.
        </p>

        <button
          onClick={() => navigate("/dishes")}
          className="
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-6
            py-3
            rounded-lg
            font-semibold
            transition
          "
        >
          Continue Shopping
        </button>

      </div>
    );
  }

  const handlePlaceOrder = async () => {

  console.log("PLACE ORDER BUTTON CLICKED");

  try {

    // ==========================================
    // CHECK LOGIN
    // ==========================================

    if (!token) {

      alert(
        "Please login before placing an order."
      );

      return;
    }


    // ==========================================
    // CHECK ADDRESS
    // ==========================================

    if (!user?.address) {

      alert(
        "Please add a delivery address first."
      );

      navigate("/address");

      return;
    }


    // ==========================================
    // CHECK CART
    // ==========================================

    if (
      !cartItems ||
      cartItems.length === 0
    ) {

      alert("Your cart is empty.");

      return;
    }


    // ==========================================
    // PAYMENT
    // ==========================================

    const paymentMethod = "COD";


    // ==========================================
    // PREPARE ITEMS
    // ==========================================

    const items = cartItems.map(
      (item) => ({

        productId: item.id,

        quantity:
          Number(item.quantity),

      })
    );


    console.log(
      "ORDER ITEMS:",
      items
    );

    console.log(
      "USER:",
      user
    );

    console.log(
      "TOKEN EXISTS:",
      !!token
    );


    // ==========================================
    // SEND REQUEST
    // ==========================================

    const response = await fetch(
      `${API_URL}/api/orders`,
      {

        method: "POST",

        headers: {

          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${token}`,

        },

        body: JSON.stringify({

          items,

          deliveryAddress:
            JSON.stringify(
              user.address
            ),

          paymentMethod,

        }),

      }
    );


    // ==========================================
    // READ RESPONSE
    // ==========================================

    const data =
      await response.json();


    console.log(
      "ORDER RESPONSE:",
      data
    );


    // ==========================================
    // ERROR
    // ==========================================

    if (!response.ok) {

      throw new Error(
        data.message ||
        "Failed to place order"
      );

    }


    // ==========================================
    // SUCCESS
    // ==========================================

    alert(
      "Order placed successfully!"
    );


    // ==========================================
    // CLEAR CART
    // ==========================================

    setCartItems([]);


    // ==========================================
    // GO TO MY ORDERS
    // ==========================================

    navigate("/my-orders");

  }

  catch (error) {

    console.error(
      "PLACE ORDER ERROR:",
      error
    );

    alert(
      error.message ||
      "Something went wrong while placing the order."
    );

  }

};

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-16 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">

        {/* ================= LEFT SIDE ================= */}
        <div>

          {/* Heading */}
          <div className="flex items-center gap-2 mb-8">

            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Shopping Cart
            </h1>

            <span className="text-orange-500 text-sm font-semibold">
              {cartCount}
            </span>

          </div>

          {/* Table Headings */}
          <div className="
            grid
            grid-cols-[1fr_150px_80px]
            text-gray-400
            font-semibold
            mb-6
          ">
            <p>Product Details</p>
            <p>Subtotal</p>
            <p>Action</p>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="
                  grid
                  grid-cols-[1fr_150px_80px]
                  items-center
                "
              >

                {/* Product Details */}
                <div className="flex items-center gap-6">

                  {/* Product Image */}
                  <div
                    className="
                      w-24
                      h-24
                      border
                      border-gray-700
                      rounded-md
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      bg-gray-900
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Information */}
                  <div>

                    <h2 className="font-semibold text-white text-lg">
                      {item.name}
                    </h2>

                    <p className="text-gray-400 mt-1">
                      Weight: {item.weight || "N/A"}
                    </p>

                    <div className="flex items-center gap-1 mt-1">

                      <span className="text-gray-400">
                        Qty:
                      </span>

                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item.id,
                            e.target.value
                          )
                        }
                        className="
                          bg-black
                          text-gray-300
                          outline-none
                          cursor-pointer
                        "
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                          (number) => (
                            <option
                              key={number}
                              value={number}
                            >
                              {number}
                            </option>
                          )
                        )}
                      </select>

                    </div>

                  </div>

                </div>

                {/* Subtotal */}
                <p className="text-gray-300 font-medium">
                  ₹{Number(item.price) * item.quantity}
                </p>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="
                    w-6
                    h-6
                    border-2
                    border-red-500
                    text-red-500
                    rounded-full
                    flex
                    items-center
                    justify-center
                    font-bold
                    hover:bg-red-500
                    hover:text-white
                    transition
                  "
                  title="Remove"
                >
                  ×
                </button>

              </div>

            ))}

          </div>

          {/* Continue Shopping */}
          <button
            onClick={() => navigate("/dishes")}
            className="
              mt-10
              text-orange-500
              font-semibold
              hover:text-orange-400
              transition
            "
          >
            ← Continue Shopping
          </button>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            bg-black
            border
            border-gray-700
            p-5
            h-fit
          "
        >

          {/* Order Summary */}
          <h2 className="text-xl font-semibold text-white">
            Order Summary
          </h2>

          <div className="border-t border-gray-700 mt-5 pt-5">

            {/* Delivery Address */}
            <div className="mb-7">

              <h3 className="text-sm font-semibold text-white">
                DELIVERY ADDRESS
              </h3>

              <div className="flex justify-between items-start mt-3 gap-4">

                <div>
                  {user?.address ? (
                    <div className="text-gray-400 text-sm">

                      <p className="text-white font-medium">
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
                    <p className="text-gray-400">
                      No address found
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/address");
                  }}
                  className="text-orange-500 font-medium hover:text-orange-400 cursor-pointer"
                >
                  Change
                </button>

              </div>

            </div>


            {/* Payment Method */}
            <div className="mb-6">

              <h3 className="text-sm font-semibold text-white mb-3">
                PAYMENT METHOD
              </h3>

              <select
                className="
                  w-full
                  bg-black
                  border
                  border-gray-700
                  px-4
                  py-3
                  outline-none
                  text-gray-300
                "
              >
                <option>Cash On Delivery</option>
                <option>Online Payment</option>
              </select>

            </div>


            {/* Price Details */}
            <div className="border-t border-gray-700 pt-5">

              {/* Price */}
              <div className="flex justify-between mb-4">

                <span className="text-gray-400">
                  Price
                </span>

                <span className="text-gray-300">
                  ₹{price}
                </span>

              </div>


              {/* Shipping */}
              <div className="flex justify-between mb-4">

                <span className="text-gray-400">
                  Shipping Fee
                </span>

                <span className="text-green-500 font-medium">
                  Free
                </span>

              </div>


              {/* Tax */}
              <div className="flex justify-between mb-4">

                <span className="text-gray-400">
                  Tax (2%)
                </span>

                <span className="text-gray-300">
                  ₹{tax.toFixed(1)}
                </span>

              </div>


              {/* Total */}
              <div className="flex justify-between mb-7">

                <span className="text-gray-300 font-semibold">
                  Total Amount:
                </span>

                <span className="text-white font-semibold">
                  ₹{totalAmount.toFixed(1)}
                </span>

              </div>


              {/* Place Order */}
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="
                w-full
                bg-orange-500
                hover:bg-orange-600
                text-white
                py-4
                font-semibold
                transition
                rounded-sm
                "
              >
                Place Order
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;

