import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      // ,
      // price: {
      //   type: Number,
      //   required: true,
      // },
    },
  ],
  shippingAddress: {
    street: { type: String, default: "indore" },
    city: { type: String, default: "indore" },
    state: { type: String, default: "indore" },
    country: { type: String, default: "indore" },
    zipCode: { type: String, default: "indore" },
  },
  paymentMethod: {
    type: String,
    enum: ["Credit Card", "Debit Card", "PayPal", "UPI", "Cash on Delivery"],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Completed", "Failed", "Refunded"],
    default: "Pending",
  },
  orderStatus: {
    type: String,
    enum: ["Processing", "Shipped", "Delivered", "Cancelled", "Returned"],
    default: "Processing",
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  deliveryDate: {
    type: Date,
  },
  trackingNumber: {
    type: String,
  },
});
export default mongoose.model("Order", orderSchema);
