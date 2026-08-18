import Product from "../models/Product.js";


// ================= GET ALL PRODUCTS =================

const getProducts = async (
  req,
  res
) => {
  try {
    const products =
      await Product.find({
        isAvailable: true,
      }).sort({
        createdAt: -1,
      });

    return res.json({
      success: true,
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ================= GET SINGLE PRODUCT =================

const getProduct = async (
  req,
  res
) => {
  try {
    const product =
      await Product.findOne({
        productId: Number(
          req.params.id
        ),
        isAvailable: true,
      });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ================= CATEGORY =================

const getProductsByCategory =
  async (req, res) => {
    try {
      const products =
        await Product.find({
          category: {
            $regex: new RegExp(
              `^${req.params.category}$`,
              "i"
            ),
          },

          isAvailable: true,
        });

      return res.json({
        success: true,
        products,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


export {
  getProducts,
  getProduct,
  getProductsByCategory,
};