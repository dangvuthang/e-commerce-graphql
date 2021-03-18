const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    requried: [true, "User is required for a review"],
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    requried: [true, "Product is required for a review"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
  },
});

module.exports = new mongoose.model("Review", reviewSchema);
