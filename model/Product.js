const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  inStock: {
    type: Number,
    required: [true, "In Stock is required"],
  },
  description: String,
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  price: Number,
  ratingsAverage: {
    type: Number,
    default: 0,
  },
});

module.exports = new mongoose.model("Product", productSchema);
