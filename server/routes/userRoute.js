import express from "express";

import {
  registerUser,
  userLogin,
  getProfile,
  updateAddress,
  getUserOrders,
} from "../controllers/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/register",
  registerUser
);

router.post(
  "/login",
  userLogin
);

router.get(
  "/profile",
  authMiddleware,
  getProfile
);

router.put(
  "/address",
  authMiddleware,
  updateAddress
);

router.get(
  "/orders",
  authMiddleware,
  getUserOrders
);

export default router;