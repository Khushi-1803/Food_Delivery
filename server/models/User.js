// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },

//     password: {
//       type: String,
//       required: true,
//       minlength: 6,
//     },

//     address: {
//       type: mongoose.Schema.Types.Mixed,
//       default: null,
//     },

//     profilePicture: {
//       type: String,
//       default: "",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const User = mongoose.model("User", userSchema);

// export default User;

import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      default: "",
      trim: true,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    houseNo: {
      type: String,
      default: "",
      trim: true,
    },

    street: {
      type: String,
      default: "",
      trim: true,
    },

    city: {
      type: String,
      default: "",
      trim: true,
    },

    state: {
      type: String,
      default: "",
      trim: true,
    },

    pincode: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    address: {
      type: addressSchema,
      default: null,
    },

    profilePicture: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;