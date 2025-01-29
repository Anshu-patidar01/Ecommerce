import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";

const addTowishlist = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user.id;
  // console.log(userId);
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
    const productIndex = user.wishlistItems.findIndex(
      (item) => item.productId.toString() === productId
    );
    // console.log(productIndex);
    if (!productIndex) {
      // Update quantity if product exists
      res.status(200).json({ message: "Product is Already add to wishlist." });
    } else {
      // Add new product to the cart
      user.wishlistItems.push({ productId });
      await user.save();
      res.status(200).json({ message: "Wishlist updated", cart: user.cart });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating wishlist.", error: error.message });
  }
};

export { addTowishlist };
