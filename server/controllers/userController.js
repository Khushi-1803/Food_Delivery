

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import Order from "../models/Order.js";

const createToken = (userId) => {
  return jwt.sign(
    {
      id: userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};


// ================= REGISTER =================

const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 6 characters",
      });
    }

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = createToken(user._id);

    return res.status(201).json({
      success: true,
      message: "Account created successfully",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        profilePicture:
          user.profilePicture,
      },
    });
  } catch (error) {
    console.error(
      "Register error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// ================= LOGIN =================

const userLogin = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Email and password are required",
      });
    }

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid email or password",
      });
    }

    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid email or password",
      });
    }

    const token = createToken(
      user._id
    );

    return res.json({
      success: true,
      message: "Login successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        profilePicture:
          user.profilePicture,
      },
    });
  } catch (error) {
    console.error(
      "Login error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// ================= PROFILE =================

const getProfile = async (
  req,
  res
) => {
  try {
    const user =
      await User.findById(
        req.user.id
      ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ================= UPDATE ADDRESS =================

const updateAddress = async (req, res) => {
  try {
    const { address } = req.body;

    if (!address || typeof address !== "object") {
      return res.status(400).json({
        success: false,
        message: "Valid address is required",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          address,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      message: "Address updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    console.error("Update address error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ================= USER ORDERS =================

const getUserOrders = async (
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


export {
  registerUser,
  userLogin,
  getProfile,
  updateAddress,
  getUserOrders,
};