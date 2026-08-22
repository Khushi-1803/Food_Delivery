import express from "express";

import {
  getProducts,
  getProduct,
  getProductsByCategory,
} from "../controllers/productController.js";

const router = express.Router();

router.get(
  "/",
  getProducts
);

router.get(
  "/category/:category",
  getProductsByCategory
);

router.get(
  "/:id",
  getProduct
);

export default router;