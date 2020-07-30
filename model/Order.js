const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Feedback title cannot be empty."],
  },
  content: {
    type: String,
    trim: true,
    required: [true, "Feedback content cannot be empty."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Please provide a user id"],
  },
  productId: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: [true, "Please provide a product id"],
  },
  sku: {
    type: String,
  },
  orderId: {
    type: String,
  },
  associatedOrderId: {
    type: String,
  },
  price: {
    type: Number,
  },
  currency: {
    type: String,
    enum: ["USD", "EURO", "POUND"],
    default: "USD",
  },
  feedbacks: [feedbackSchema],
});

module.exports = mongoose.model("Order", orderSchema);
