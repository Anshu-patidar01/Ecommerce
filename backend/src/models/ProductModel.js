import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "product name is required."],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "product Description is required."],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "product price is required."],
    trim: true,
    min: [0, "price cannot be less than 0."],
  },
  size: {
    type: String,
    required: [true, "Product size is required."],
    trim: true,
    enum: ["S", "M", "L", "XL", "XXL", "XXXL"],
  },
  Discount: {
    type: String,
    required: [true, "Product Discount is required."],
    trim: true,
  },
  Brand: {
    type: String,
    required: [true, "Product Brand is required."],
    trim: true,
  },
  Bandwidth: {
    type: String,
    required: [true, "Product Bandwidth is required."],
    trim: true,
  },
  Color: {
    type: String,
    required: [true, "Product Color is required."],
    trim: true,
  },
  image: {
    type: String,
    require: [true, "Product Image is required."],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Product category is required."],
    trim: true,
  },
  Pattern: {
    type: String,
    required: [true, "Product Pattern is required."],
    trim: true,
  },
  Length: {
    type: String,
    required: [true, "Product Length is required."],
    trim: true,
  },
  Offer: {
    type: String,
    required: [true, "Product Offer is required."],
    trim: true,
  },
});

const productModel = new mongoose.model("product", productSchema);

export default productModel;
