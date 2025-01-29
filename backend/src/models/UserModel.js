import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//Define Address Schema
// const addressSchema = new mongoose.Schema({
//   street: {
//     type: String,
//     trim: true,
//     default: "abc",
//   },
//   city: {
//     type: String,
//     trim: true,
//     default: "abc",
//   },
//   state: {
//     type: String,
//     trim: true,
//     default: "abc",
//   },
//   postalCode: {
//     type: String,
//     trim: true,
//     default: "abc",
//   },
//   country: {
//     type: String,
//     trim: true,
//     default: "abc",
//   },
// });

//card Schema
const cardItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    trim: true,
    default: "ABCD",
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
    default: 10,
  },
  price: {
    type: Number,
    required: true,
    default: 299,
  },
});

//wishlist Schema
const wishlistSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    trim: true,
    default: "ABCD",
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
    default: 10,
  },
  price: {
    type: Number,
    required: true,
    default: 299,
  },
});

// Define User Schema
const userSchema = new mongoose.Schema(
  {
    basicInfo: {
      fullName: {
        firstName: {
          type: String,
          required: true,
          trim: true,
        },
        lastName: {
          type: String,
          // required: true,
          trim: true,
        },
      },
      mobileNumber: {
        type: String,
        required: true,
        trim: true,
        default: 9578965478,
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
      },
    },
    address: {
      defaultAddress: {
        type: String,
        required: true,
        default: "indore",
      },
    },
    acountStatus: {
      type: String,
      enum: ["Active", "Inactive", "suspended", "closed", "blocked"],
      default: "Active",
    },

    wishlistItems: {
      type: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
          },
        },
      ],
      default: [],
    },
    cart: {
      type: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.basicInfo.password);
};

userSchema.statics.hashPassword = function (password) {
  return bcrypt.hash(password, 10);
};

// Create the User model based on the schema
const UserModel = mongoose.model("User", userSchema);

export default UserModel; // Export User model
