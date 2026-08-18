import Order from "../models/Order.js";
import Product from "../models/Product.js";


// ================= CREATE ORDER =================

const createOrder = async (
  req,
  res
) => {
  try {
    const {
      items,
      deliveryAddress,
      paymentMethod,
    } = req.body;

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

    const orderItems = [];

    let totalAmount = 0;

    for (const item of items) {
      const product =
        await Product.findOne({
          productId: Number(
            item.productId
          ),
          isAvailable: true,
        });

      if (!product) {
        return res.status(404).json({
          success: false,
          message:
            `Product ${item.productId} not found`,
        });
      }

      const quantity =
        Number(item.quantity);

      if (
        !Number.isInteger(quantity) ||
        quantity < 1
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid quantity",
        });
      }

      if (
        quantity > product.stock
      ) {
        return res.status(400).json({
          success: false,
          message:
            `${product.name} does not have enough stock`,
        });
      }

      orderItems.push({
        productId: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity,
      });

      totalAmount +=
        product.price * quantity;
    }

    if (!deliveryAddress) {
      return res.status(400).json({
        success: false,
        message:
          "Delivery address is required",
      });
    }

    const order =
      await Order.create({
        userId: req.user.id,

        items: orderItems,

        totalAmount,

        deliveryAddress,

        paymentMethod:
          paymentMethod || "COD",
      });

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

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ================= MY ORDERS =================

const getMyOrders = async (
  req,
  res
) => {
  try {
    const orders =
      await Order.find({
        userId: req.user.id,
      })
        .populate(
          "items.productId"
        )
        .sort({
          createdAt: -1,
        });

    return res.json({
      success: true,
      orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ================= SINGLE ORDER =================

const getOrder = async (
  req,
  res
) => {
  try {
    const order =
      await Order.findOne({
        _id: req.params.id,
        userId: req.user.id,
      }).populate(
        "items.productId"
      );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.json({
      success: true,
      order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export {
  createOrder,
  getMyOrders,
  getOrder,
};