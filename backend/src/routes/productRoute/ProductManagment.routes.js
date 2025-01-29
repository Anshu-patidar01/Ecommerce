import express from "express";
import {
  getAllProduct,
  getProductByID,
} from "../../controllers/product.controller.js";
const Router = express.Router();

Router.get("/BrowseAll", getAllProduct); //get all product
Router.get("/:id", getProductByID); //get product details by id

export default Router;
