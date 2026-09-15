import mongoose from "mongoose";

import Order from "../models/Order.js";
import Product from "../models/Product.js";


// =====================================================
// CREATE ORDER
// =====================================================

const createOrder = async (req, res) => {

  const session = await mongoose.startSession();

  try {

    const {
      items,
      deliveryAddress,
      paymentMethod,
    } = req.body;


    // =================================================
    // CHECK USER
    // =================================================

    if (!req.user || !req.user.id) {

      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please login first.",
      });

    }


    // =================================================
    // CHECK CART
    // =================================================

    if (
      !items ||
      !Array.isArray(items) ||
      items.length === 0
    ) {

      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });

    }


    // =================================================
    // CHECK ADDRESS
    // =================================================

    if (
      !deliveryAddress ||
      !String(deliveryAddress).trim()
    ) {

      return res.status(400).json({
        success: false,
        message: "Delivery address is required",
      });

    }


    // =================================================
    // PAYMENT METHOD
    // =================================================

    const finalPaymentMethod =
      paymentMethod || "COD";


    if (
      !["COD", "ONLINE"].includes(
        finalPaymentMethod
      )
    ) {

      return res.status(400).json({
        success: false,
        message: "Invalid payment method",
      });

    }


    // =================================================
    // START TRANSACTION
    // =================================================

    session.startTransaction();


    // =================================================
    // ORDER ITEMS
    // =================================================

    const orderItems = [];

    let subtotal = 0;


    // =================================================
    // PROCESS EACH PRODUCT
    // =================================================

    for (const item of items) {

      const productId =
        Number(item.productId);

      const quantity =
        Number(item.quantity);


      // -----------------------------------------------
      // PRODUCT ID VALIDATION
      // -----------------------------------------------

      if (
        !Number.isInteger(productId) ||
        productId <= 0
      ) {

        await session.abortTransaction();

        return res.status(400).json({
          success: false,
          message:
            `Invalid product ID: ${item.productId}`,
        });

      }


      // -----------------------------------------------
      // QUANTITY VALIDATION
      // -----------------------------------------------

      if (
        !Number.isInteger(quantity) ||
        quantity < 1
      ) {

        await session.abortTransaction();

        return res.status(400).json({
          success: false,
          message:
            `Invalid quantity for product ${productId}`,
        });

      }
      
      // -----------------------------------------------
// DEBUG PRODUCTS
// -----------------------------------------------

const allProducts = await Product.find({})
  .select("productId name isAvailable");

console.log(
  "ALL PRODUCTS:",
  allProducts
);

console.log(
  "LOOKING FOR PRODUCT:",
  productId
);


   

     

const product = await Product.findOne({
  productId: productId,
}).session(session);

console.log(
  "LOOKING FOR PRODUCT:",
  productId
);

console.log(
  "FOUND PRODUCT:",
  product
);


if (!product) {

  await session.abortTransaction();

  return res.status(404).json({
    success: false,
    message:
      `Product ${productId} not found or unavailable`,
  });

}


      // -----------------------------------------------
      // PRODUCT NOT FOUND
      // -----------------------------------------------

      if (!product) {

        await session.abortTransaction();

        return res.status(404).json({

          success: false,

          message:
            `Product ${productId} not found or unavailable`,

        });

      }


      // -----------------------------------------------
      // CHECK STOCK
      // -----------------------------------------------

      if (
        quantity > product.stock
      ) {

        await session.abortTransaction();

        return res.status(400).json({

          success: false,

          message:
            `${product.name} does not have enough stock. Available stock: ${product.stock}`,

        });

      }


      // -----------------------------------------------
      // CALCULATE ITEM TOTAL
      // -----------------------------------------------

      const itemTotal =
        Number(product.price) *
        quantity;


      subtotal += itemTotal;


      // -----------------------------------------------
      // SAVE ORDER ITEM
      // -----------------------------------------------

      orderItems.push({

        // IMPORTANT:
        // Your Product model uses numeric productId.
        // Therefore save product.productId,
        // NOT product._id.

        productId:
          product.productId,

        name:
          product.name,

        image:
          product.image || "",

        price:
          Number(product.price),

        quantity,

      });


      // -----------------------------------------------
      // REDUCE STOCK
      // -----------------------------------------------

      product.stock =
        product.stock - quantity;


      await product.save({
        session,
      });

    }


    // =================================================
    // TAX
    // =================================================

    const tax =
      subtotal * 0.02;


    // =================================================
    // SHIPPING
    // =================================================

    const shippingFee = 0;


    // =================================================
    // FINAL TOTAL
    // =================================================

    const totalAmount =
      subtotal +
      tax +
      shippingFee;


    // =================================================
    // CREATE ORDER
    // =================================================

    const createdOrders =
      await Order.create(
        [
          {

            userId:
              req.user.id,

            items:
              orderItems,

            deliveryAddress:
              String(
                deliveryAddress
              ).trim(),

            totalAmount:
              Number(
                totalAmount.toFixed(2)
              ),

            paymentMethod:
              finalPaymentMethod,

            paymentStatus:
              "PENDING",

            orderStatus:
              "PLACED",

          },
        ],
        {
          session,
        }
      );


    const order =
      createdOrders[0];


    // =================================================
    // COMMIT TRANSACTION
    // =================================================

    await session.commitTransaction();


    // =================================================
    // SUCCESS RESPONSE
    // =================================================

    return res.status(201).json({

      success: true,

      message:
        "Order placed successfully",

      order,

    });


  } catch (error) {

    console.error(
      "Create order error:",
      error
    );


    // -----------------------------------------------
    // ROLLBACK ONLY IF TRANSACTION IS ACTIVE
    // -----------------------------------------------

    if (
      session.inTransaction()
    ) {

      await session.abortTransaction();

    }


    return res.status(500).json({

      success: false,

      message:
        error.message ||
        "Failed to create order",

    });


  } finally {

    await session.endSession();

  }

};


// =====================================================
// GET MY ORDERS
// =====================================================

const getMyOrders = async (
  req,
  res
) => {

  try {

    // =================================================
    // CHECK USER
    // =================================================

    if (
      !req.user ||
      !req.user.id
    ) {

      return res.status(401).json({

        success: false,

        message:
          "Unauthorized. Please login first.",

      });

    }


    // =================================================
    // GET ALL ORDERS
    // =================================================

    const orders =
      await Order.find({

        userId:
          req.user.id,

      }).sort({

        createdAt: -1,

      });


    // =================================================
    // SUCCESS
    // =================================================

    return res.status(200).json({

      success: true,

      orders,

    });


  } catch (error) {

    console.error(
      "Get my orders error:",
      error
    );


    return res.status(500).json({

      success: false,

      message:
        error.message ||
        "Failed to fetch orders",

    });

  }

};


// =====================================================
// GET SINGLE ORDER
// =====================================================

const getOrder = async (
  req,
  res
) => {

  try {

    // =================================================
    // CHECK USER
    // =================================================

    if (
      !req.user ||
      !req.user.id
    ) {

      return res.status(401).json({

        success: false,

        message:
          "Unauthorized. Please login first.",

      });

    }


    // =================================================
    // CHECK ORDER ID
    // =================================================

    if (
      !mongoose.Types.ObjectId.isValid(
        req.params.id
      )
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Invalid order ID",

      });

    }


    // =================================================
    // FIND ORDER
    // =================================================

    const order =
      await Order.findOne({

        _id:
          req.params.id,

        userId:
          req.user.id,

      });


    // =================================================
    // ORDER NOT FOUND
    // =================================================

    if (!order) {

      return res.status(404).json({

        success: false,

        message:
          "Order not found",

      });

    }


    // =================================================
    // SUCCESS
    // =================================================

    return res.status(200).json({

      success: true,

      order,

    });


  } catch (error) {

    console.error(
      "Get order error:",
      error
    );


    return res.status(500).json({

      success: false,

      message:
        error.message ||
        "Failed to fetch order",

    });

  }

};


// =====================================================
// EXPORT
// =====================================================

export {
  createOrder,
  getMyOrders,
  getOrder,
};