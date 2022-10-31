const mongoose = require("mongoose");
const { Schema } = mongoose;
const InvoiceModel = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String, required: true },
    quantity: { type: Number, required: true },
    ammount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Store",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.model("Invoice", InvoiceModel);

module.exports = Invoice;
