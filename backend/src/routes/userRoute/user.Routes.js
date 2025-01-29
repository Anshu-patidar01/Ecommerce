import express from "express";
import {
  userLogin,
  userProfile,
  userRegister,
} from "../../controllers/user.controller.js";
import userAuth from "../../middleware/Auth.js";
import { addTowishlist } from "../../controllers/Whishlist.controller.js";
import {
  addToCart,
  deleteToCart,
  getAllCartProducts,
} from "../../controllers/cart.controller.js";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrdersByUser,
  updateOrderStatus,
} from "../../controllers/orders.controller.js";
import AdminAuth from "../../middleware/AdminAuth.js";
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);

router.get("/profiles", userAuth, userProfile);
router.post("/cart/:productId/:quantity", userAuth, addToCart);
router.delete("/cart/:productId", userAuth, deleteToCart);
router.get("/cart", userAuth, getAllCartProducts);
// router.get("/cart/:userId",
router.post("/wishlist/:productId", userAuth, addTowishlist);
router.delete("/wishlist/:productId", userAuth, deleteToCart);

router.post("/order", userAuth, createOrder);
router.get("/userOrder", userAuth, getOrdersByUser);

router.get("/order", getAllOrders);
// router.get("/order", userAuth, AdminAuth, getAllOrders);
router.patch("/order/:id", userAuth, AdminAuth, updateOrderStatus);
router.delete("/order/:id", userAuth, AdminAuth, deleteOrder);

export default router;
