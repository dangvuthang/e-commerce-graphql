const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    requried: [true, "User is required for a review"],
  },
  orderDetail: [
    {
      type: mongoose.Types.ObjectId,
      ref: "OrderDetail",
    },
  ],
  status: {
    type: String,
    enum: {
      values: ["processing", "delivering", "delivered", "other"],
      message: "Status must be processing, delivering, other, or delivered",
    },
  },
  orderOn: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = new mongoose.model("Order", orderSchema);
