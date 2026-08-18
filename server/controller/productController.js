import Product from  "../modelss/products.model.js"

// Get all products

const getProducts = async(req, res) => {
    try {
        const products = await Product.find({
            isavailable:true
        }).sort({ createdAt: -1 });
         res.json({
      success: true,
      products,
    });
    } catch (error) {
        res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// Get single product

const getProduct = async(req, res) => {
    try {
        const product = await Product.find({
            productID:Number(req.params.id)
        })

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
        success:true,
        product
    })
    } catch (error) {
        res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// Get category products

// Get category products

const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({
      category: {
        $regex: new RegExp(
          `^${req.params.category}$`,
          "i"
        ),
      },

      isAvailable: true,
    });

    res.json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
  getProductsByCategory
};
