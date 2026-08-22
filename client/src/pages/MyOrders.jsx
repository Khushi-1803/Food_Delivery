import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const MyOrders = () => {
  const navigate = useNavigate();

  const {
    token,
    isAuthenticated,
    loading: authLoading,
  } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // =====================================================
  // FORMAT DELIVERY ADDRESS
  // =====================================================

  const formatAddress = (address) => {
    if (!address) {
      return "No delivery address";
    }

    try {
      const parsedAddress =
        typeof address === "string"
          ? JSON.parse(address)
          : address;

      return (
        <div className="space-y-1">
          {parsedAddress.fullName && (
            <p className="font-medium text-white">
              {parsedAddress.fullName}
            </p>
          )}

          {parsedAddress.phone && (
            <p className="text-gray-400">
              Phone: {parsedAddress.phone}
            </p>
          )}

          <p className="text-gray-300">
            {[
              parsedAddress.houseNo,
              parsedAddress.street,
            ]
              .filter(Boolean)
              .join(", ")}
          </p>

          <p className="text-gray-300">
            {[
              parsedAddress.city,
              parsedAddress.state,
              parsedAddress.pincode,
            ]
              .filter(Boolean)
              .join(", ")}
          </p>
        </div>
      );
    } catch (error) {
      // If address is already a normal string
      return (
        <p className="text-gray-300">
          {address}
        </p>
      );
    }
  };

  // =====================================================
  // FETCH ORDERS
  // =====================================================

  useEffect(() => {
    if (authLoading) {
      return;
    }

    if (!isAuthenticated || !token) {
      setLoading(false);
      navigate("/login");
      return;
    }

    const fetchOrders = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "http://localhost:5000/api/orders/my-orders",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Failed to load orders"
          );
        }

        setOrders(
          Array.isArray(data.orders)
            ? data.orders
            : []
        );
      } catch (error) {
        console.error(
          "Fetch orders error:",
          error
        );

        alert(
          error.message ||
            "Unable to load orders"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [
    authLoading,
    isAuthenticated,
    token,
    navigate,
  ]);

  // =====================================================
  // LOADING
  // =====================================================

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">
          Loading your orders...
        </p>
      </div>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 py-10">

      <div className="max-w-5xl mx-auto">

        {/* ================================================= */}
        {/* PAGE HEADER */}
        {/* ================================================= */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              My Orders
            </h1>

            <p className="text-gray-500 mt-1">
              View your order history
            </p>
          </div>

          <button
            onClick={() => navigate("/dishes")}
            className="
              bg-orange-500
              hover:bg-orange-600
              text-black
              px-5
              py-2.5
              rounded-lg
              font-semibold
              transition
            "
          >
            Continue Shopping
          </button>

        </div>

        {/* ================================================= */}
        {/* NO ORDERS */}
        {/* ================================================= */}

        {orders.length === 0 ? (

          <div className="
            border
            border-gray-800
            rounded-xl
            bg-gray-950
            p-10
            text-center
          ">

            <h2 className="text-xl font-semibold mb-3">
              No orders yet
            </h2>

            <p className="text-gray-400 mb-6">
              You haven't placed any orders yet.
            </p>

            <button
              onClick={() => navigate("/dishes")}
              className="
                bg-orange-500
                hover:bg-orange-600
                text-black
                px-6
                py-3
                rounded-lg
                font-semibold
              "
            >
              Start Shopping
            </button>

          </div>

        ) : (

          /* ================================================= */
          /* ORDERS */
          /* ================================================= */

          <div className="space-y-6">

            {orders.map((order) => (

              <div
                key={order._id}
                className="
                  border
                  border-gray-800
                  rounded-xl
                  bg-gray-950
                  overflow-hidden
                "
              >

                {/* ================================================= */}
                {/* ORDER HEADER */}
                {/* ================================================= */}

                <div className="
                  px-6
                  py-5
                  border-b
                  border-gray-800
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-4
                ">

                  <div>

                    <p className="
                      text-gray-500
                      text-xs
                      uppercase
                      tracking-wider
                    ">
                      Order ID
                    </p>

                    <p className="
                      text-white
                      font-medium
                      mt-1
                      break-all
                    ">
                      #{order._id}
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <span className="
                      px-3
                      py-1
                      rounded-full
                      bg-orange-500/15
                      text-orange-400
                      text-sm
                      font-medium
                    ">
                      {order.orderStatus}
                    </span>

                    <span className="
                      px-3
                      py-1
                      rounded-full
                      bg-gray-800
                      text-gray-300
                      text-sm
                    ">
                      {order.paymentMethod}
                    </span>

                  </div>

                </div>


                {/* ================================================= */}
                {/* ORDER ITEMS */}
                {/* ================================================= */}

                <div className="px-6">

                  {Array.isArray(order.items) &&
                    order.items.map(
                      (item, index) => (

                        <div
                          key={index}
                          className="
                            py-5
                            border-b
                            border-gray-800
                            flex
                            items-center
                            justify-between
                            gap-4
                          "
                        >

                          {/* PRODUCT INFO */}
                          <div className="flex-1">

                            <h3 className="
                              text-white
                              font-semibold
                              text-lg
                            ">
                              {item.name}
                            </h3>

                            <div className="
                              flex
                              flex-wrap
                              gap-x-6
                              gap-y-1
                              mt-2
                            ">

                              <p className="
                                text-gray-400
                                text-sm
                              ">
                                Quantity:{" "}
                                {item.quantity}
                              </p>

                              <p className="
                                text-gray-400
                                text-sm
                              ">
                                ₹{item.price} each
                              </p>

                            </div>

                          </div>


                          {/* ITEM TOTAL */}

                          <div className="text-right">

                            <p className="
                              text-white
                              font-semibold
                            ">
                              ₹
                              {(
                                Number(item.price) *
                                Number(item.quantity)
                              ).toFixed(2)}
                            </p>

                          </div>

                        </div>

                      )
                    )}

                </div>


                {/* ================================================= */}
                {/* ORDER BOTTOM */}
                {/* ================================================= */}

                <div className="
                  px-6
                  py-5
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-6
                ">

                  {/* DELIVERY ADDRESS */}

                  <div>

                    <p className="
                      text-gray-500
                      text-xs
                      uppercase
                      tracking-wider
                      mb-3
                    ">
                      Delivery Address
                    </p>

                    <div className="
                      bg-gray-900
                      border
                      border-gray-800
                      rounded-lg
                      p-4
                    ">
                      {formatAddress(
                        order.deliveryAddress
                      )}
                    </div>

                  </div>


                  {/* TOTAL */}

                  <div className="
                    md:text-right
                    flex
                    flex-col
                    md:items-end
                    justify-center
                  ">

                    <p className="
                      text-gray-500
                      text-xs
                      uppercase
                      tracking-wider
                    ">
                      Total Amount
                    </p>

                    <p className="
                      text-2xl
                      font-bold
                      text-orange-500
                      mt-1
                    ">
                      ₹
                      {Number(
                        order.totalAmount
                      ).toFixed(2)}
                    </p>

                    <p className="
                      text-gray-500
                      text-sm
                      mt-3
                    ">
                      {new Date(
                        order.createdAt
                      ).toLocaleString()}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default MyOrders;