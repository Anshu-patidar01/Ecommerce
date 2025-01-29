import upload from "../../middleware/multer.js";
import express from "express";
import userAuth from "../../middleware/Auth.js";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../controllers/product.controller.js";
import AdminAuth from "../../middleware/AdminAuth.js";
const Router = express.Router();

Router.post("/addProduct", addProduct);
// Router.post("/addProduct", userAuth, AdminAuth, addProduct);
Router.put("/:id", userAuth, AdminAuth, updateProduct); //update product by id
Router.delete("/:id", userAuth, AdminAuth, deleteProduct); //delete product by id

export default Router;
