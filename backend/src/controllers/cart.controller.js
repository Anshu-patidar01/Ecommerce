import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";

const addToCart = async (req, res) => {
  const { productId, quantity } = req.params;
  const userId = req.user.id;
  // console.log(userId);
  const data = { userId, productId, quantity };
  try {
    const isUserIdValid = mongoose.isValidObjectId(userId);
    const isProductIdValid = mongoose.isValidObjectId(productId);
    if (!isUserIdValid || !isProductIdValid) {
      throw new Error("User or Product is Invalid.");
    }
    const user = await UserModel.findById(userId);
    if (!user) {
      throw new Error("User not found.");
    }
    const productIndex = user.cart.findIndex(
      (item) => item.productId.toString() === productId
    );
    // console.log(productIndex);
    if (productIndex > -1) {
      // Update quantity if product exists
      user.cart[productIndex].quantity = quantity;
      res
        .status(200)
        .json({ message: "Cart updated Quantity", cart: user.cart });
    } else {
      // Add new product to the cart
      user.cart.push({ productId, quantity });
      await user.save();
      res.status(200).json({ message: "Cart updated", cart: user.cart });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating cart", error: error.message });
  }
};

const deleteToCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user;
    const user = await UserModel.findById(userId);
    const isValidProductId = mongoose.isValidObjectId(productId);
    if (!isValidProductId) {
      throw new Error("User or Product Id is Invalid.");
    }
    if (!user) return res.status(404).json({ message: "User not found" });
    // Filter out the product to be removed
    user.cart = user.cart.filter(
      (item) => item.productId.toString() !== productId
    );
    await user.save();
    res
      .status(200)
      .json({ message: "Product removed from cart", cart: user.cart });
  } catch (error) {
    res.status(500).json({
      message: "Error removing product from cart",
      error: error.message,
    });
  }
};

const getAllCartProducts = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await UserModel.findById(userId).populate("cart.productId"); // Populate product details
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ cart: user.cart });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving cart", error: error.message });
  }
};

export { addToCart, deleteToCart, getAllCartProducts };
{
  // const express = require("express");
  // const router = express.Router();
  // const User = require("../models/userModel"); // Your User model
  // // Add or update a product in the cart
  // router.put("/cart", async (req, res) => {
  //   try {
  //     const { userId, productId, quantity } = req.body;
  //     // Find the user
  //     const user = await User.findById(userId);
  //     if (!user) return res.status(404).json({ message: "User not found" });
  //     // Check if product is already in the cart
  //     const productIndex = user.cart.findIndex(
  //       (item) => item.productId.toString() === productId
  //     );
  //     if (productIndex > -1) {
  //       // Update quantity if product exists
  //       user.cart[productIndex].quantity = quantity;
  //     } else {
  //       // Add new product to the cart
  //       user.cart.push({ productId, quantity });
  //     }
  //     await user.save();
  //     res.status(200).json({ message: "Cart updated", cart: user.cart });
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ message: "Error updating cart", error: error.message });
  //   }
  // });
  // // Get the user's cart
  // router.get("/cart/:userId", async (req, res) => {
  //   try {
  //     const { userId } = req.params;
  //     const user = await User.findById(userId).populate("cart.productId"); // Populate product details
  //     if (!user) return res.status(404).json({ message: "User not found" });
  //     res.status(200).json({ cart: user.cart });
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ message: "Error retrieving cart", error: error.message });
  //   }
  // });
  // // Remove a product from the cart
  // router.delete("/cart", async (req, res) => {
  //   try {
  //     const { userId, productId } = req.body;
  //     const user = await User.findById(userId);
  //     if (!user) return res.status(404).json({ message: "User not found" });
  //     // Filter out the product to be removed
  //     user.cart = user.cart.filter(
  //       (item) => item.productId.toString() !== productId
  //     );
  //     await user.save();
  //     res
  //       .status(200)
  //       .json({ message: "Product removed from cart", cart: user.cart });
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({
  //         message: "Error removing product from cart",
  //         error: error.message,
  //       });
  //   }
  // });
  // module.exports = router;
}
