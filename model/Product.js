const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a name for product."],
  },
  description: {
    type: String,
    trim: true,
    required: [true, "Please provide a description for product."],
  },
  price: {
    type: Number,
    get: getPrice,
    set: setPrice,
    required: [true, "Please provie a price for product."],
    validate: {
      validator: (v) => parseFloat(v) > 0,
      message: "Price must be greater than 0.",
    },
  },
  sku: {
    type: String,
  },
  status: {
    type: String,
    enum: ["PRE_ORDER", "ON_SALE", "OUT_OF_STOCK"],
    default: "PRE_ORDER",
  },
  photos: {
    type: [
      {
        type: String,
      },
    ],
  },
  slug: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

function getPrice(num) {
  return (num / 100).toFixed(2);
}

function setPrice(num) {
  return num * 100;
}

productSchema.pre("save", function (next) {
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model("Product", productSchema);
