import productValidation from "./productValidation.js";
import createProduct from "../services/product.service.js";
import productModel from "../models/ProductModel.js";
import upload from "../middleware/multer.js";
import cloudinary from "../config/cloudinary.js";
import mongoose from "mongoose";
const addProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      image,
      price,
      size,
      Discount,
      Brand,
      Bandwidth,
      Color,
      Pattern,
      Length,
      Offer,
    } = req.body;
    upload.single("image");
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(image, {
      folder: "ecommerce",
    });
    const item = {
      title,
      description,
      category,
      image: result.secure_url,
      price,
      size,
      Discount,
      Brand,
      Bandwidth,
      Color,
      Pattern,
      Length,
      Offer,
    };

    const productvalidation = await productValidation(req);
    if (productvalidation !== "0") {
      throw new Error(`${productvalidation}`);
    }
    const isProduct = item.title;
    const isProductPresent = await productModel.findOne({ title: isProduct });
    if (isProductPresent) {
      throw new Error("This product is already Present.");
    }
    const product = await createProduct(item);
    res.send({ product });
  } catch (err) {
    res.json({ message: "Problem while Adding Product.", error: `${err}` });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    if (!products) {
      throw new Error("products not found.");
    }
    res.send(products);
  } catch (err) {
    res.status(400).json({
      message: "some problem while getting all products. ",
      error: `${err}`,
    });
  }
};

const getProductByID = async (req, res) => {
  try {
    const id = req.params.id;
    const isId = mongoose.isValidObjectId(id);
    if (!isId) {
      throw new Error("Wrong  Id.");
    }
    const product = await productModel.findById(id);
    if (!product) {
      throw new Error("Product not found.");
    }
    res.send(product);
  } catch (err) {
    res.status(400).json({
      message: "some problem while getting all products. ",
      error: `${err}`,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const isId = mongoose.isValidObjectId(id);
    if (!isId) {
      throw new Error("Id not found.");
    }
    const updateData = req.body;
    const updateProduct = await productModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );
    if (!updateProduct) {
      throw new Error("Product not found.");
    }
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(400).json({
      message: "some problem while getting all products. ",
      error: `${err}`,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const isId = mongoose.isValidObjectId(id);
    if (!isId) {
      throw new Error("Id not found.");
    }
    const DeletedProduct = await productModel.findByIdAndDelete(id);
    if (!DeletedProduct) {
      throw new Error("Product not found.");
    }
    res.status(200).json({ "Product Deleted:": DeletedProduct });
  } catch (err) {
    res.status(400).json({
      message: "some problem while getting all products. ",
      error: `${err}`,
    });
  }
};

export {
  addProduct,
  getAllProduct,
  getProductByID,
  updateProduct,
  deleteProduct,
};
