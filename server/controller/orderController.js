const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");


// ================= CREATE ORDER =================

const createOrder = async (req, res) => {
  try {
    const { items, deliveryAddress, paymentMethod } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const orderItems = [];

    let totalAmount = 0;

    for (const item of items) {
      const product = await Product.findOne({
        productId: item.productId,
      });

      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product ${item.productId} not found`,
        });
      }

      const quantity = Number(item.quantity);

      if (!quantity || quantity < 1) {
        return res.status(400).json({
          success: false,
          message: "Invalid quantity",
        });
      }

      orderItems.push({
        productId: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity,
      });

      totalAmount += product.price * quantity;
    }

    const order = await Order.create({
      userId: user._id,

      items: orderItems,

      totalAmount,

      deliveryAddress:
        deliveryAddress || user.address,

      paymentMethod:
        paymentMethod || "COD",
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ================= GET MY ORDERS =================

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.user.id,
    })
      .populate("items.productId")
      .sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ================= GET SINGLE ORDER =================

const getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      userId: req.user.id,
    }).populate("items.productId");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createOrder,
  getMyOrders,
  getOrder,
};