import express from "express";
import {
  getAllProduct,
  getProductByID,
} from "../../controllers/product.controller.js";
import userAuth from "../../middleware/Auth.js";
const Router = express.Router();

Router.get("/BrowseAll", getAllProduct); //get all product
Router.post("/productbyid", getProductByID); //get product details by id

export default Router;
