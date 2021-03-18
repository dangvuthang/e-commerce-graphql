const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    requried: [true, "Product is required for a review"],
  },
  quantity: Number,
  isReviewable: {
    type: Boolean,
    default: false,
  },
});

module.exports = new mongoose.model("OrderDetail", orderDetailSchema);
