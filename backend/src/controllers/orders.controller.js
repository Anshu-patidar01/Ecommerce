import Order from "../models/OrderModel.js"; // Order model
import Product from "../models/ProductModel.js"; // Product model (for validation)
import UserModel from "../models/UserModel.js";
// Create a new order
const createOrder = async (req, res) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;
    const items = req.user.cart;
    const userId = req.user.id;
    // console.log();
    // Validate request body
    if (!userId || !items || !shippingAddress || !paymentMethod) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      throw new Error("User not found.");
    }

    // Validate product availability and calculate total amount
    let totalAmount = 0;
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res
          .status(400)
          .json({ error: `Product not available${item.productId}` });
      }
      // console.log(product.title);
      totalAmount += product.price * item.quantity;

      // Reduce stock
      // product.stock -= item.quantity;
      await product.save();
    }

    // Create order
    const newOrder = new Order({
      userId,
      items,
      paymentMethod,
      totalAmount,
      paymentStatus: "Pending",
    });

    await newOrder.save();

    res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// // // Get all orders (admin)
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("userId", "basicInfo")
      .populate("items.productId", "title price category");

    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// // // Get orders by userId
const getOrdersByUser = async (req, res) => {
  try {
    const userId = req.user.id;
    // console.log(userId);
    const orders = await Order.findOne({ userId });
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const orderId = req.params.id;
    const { orderStatus } = req.body;

    // Validate status
    const validStatuses = [
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
      "Returned",
    ];
    if (!validStatuses.includes(orderStatus)) {
      return res.status(400).json({ error: "Invalid order status" });
    }

    const order = await Order.findById(orderId).populate("userId", "basicInfo");
    console.log(order);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.orderStatus = orderStatus;
    await order.save();

    res
      .status(200)
      .json({ message: "Order status updated successfully", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// // // Update order status (admin)

// // Delete an order (admin)
const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;

    const order = await Order.findByIdAndDelete(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export {
  createOrder,
  getAllOrders,
  getOrdersByUser,
  updateOrderStatus,
  deleteOrder,
};
