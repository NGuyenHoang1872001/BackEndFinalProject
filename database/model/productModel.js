const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductModel = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    cover: { type: String, required: true },
    price: { type: Number, required: true },
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Store",
    },
    quantity: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductModel);

module.exports = Product;
