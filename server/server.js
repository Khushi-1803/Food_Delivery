import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "../config/db.js";

import userRoutes from "../routes/userRoutes.js";
import productRoutes from "../routes/productRoutes.js";
import orderRoutes from "../routes/orderRoutes.js";

dotenv.config();

const app = express();


// Database

connectDB();


// Middleware

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());


// Test route

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "ShopKart API is running",
  });
});


// API routes

app.use("/api/user", userRoutes);

app.use("/api/products", productRoutes);

app.use("/api/orders", orderRoutes);


// Error handler

app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});