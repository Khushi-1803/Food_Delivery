import express from express;
import {
    registerUser,
    userLogin,
    getProfile,
    updateAddress,
    getUserOrders,
} from "../controller/UserController.js"

import authMiddleware from "./middleware/middleware.js"

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", authMiddleware, getProfile);

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

module.exports = router;