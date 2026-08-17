import bcrypt from bcrypt.js;
import jwt from jsonwebtoken;
import User from "../modelss/users.model";
import Order from "../modelss/orders.model";

const createToken = (userId) => {
    return jwt.sign(
        {
            id:userId
        },
          process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
    )
}


// ================= REGISTER =================

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = createToken(user._id);

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// ================= LOGIN =================

const userLogin = (req,res) => {
    try {
        const {email,password} = req.body

        if (!emal || !password) {
            res.status(400).json({
                success:false,
                message:"Email and password are required"

            })
        }

        const user = await User.findOne({email});
        if (!user) {
            res.status(401).json({
                success:false,
                message:"Email and password are required"
            })
        }

        const passwordMatch = bcrypt.compare(
            password,
            user.password
        )
        if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const token = User.createToken(user._id);
    res.json({
      success: true,
      message: "Login successful",
      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
      },
    });

    } catch (error) {
        console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

  // ================= GET PROFILE ================

  const getProfile = async(req,res) => {
    try {
        const user = User.fiindById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
         res.json({
      success: true,
      user,
    });
    } catch (error) {
         res.status(500).json({
      success: false,
      message: error.message,
    });
  }
 }

 // ================= UPDATE ADDRESS =================
 const updateAddress = async (req, res) => {
  try {
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({
        success: false,
        message: "Address is required",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        address,
      },
      {
        new: true,
      }
    ).select("-password");

    res.json({
      success: true,
      message: "Address updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// ================= USER ORDERS =================

const getOrders = async => {
try {
    const order = await Order.find({
        userId: req.user.id
    }) 
     .populate("items.productId")
      .sort({ createdAt: -1 });

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
}

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  updateAddress,
  getUserOrders,
};


    
