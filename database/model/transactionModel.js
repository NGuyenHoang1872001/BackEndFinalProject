const mongoose = require("mongoose");
const { Schema } = mongoose;
const TransactionModel = new Schema(
  {
    status: { type: String, required: true },
    ammount: { type: Number, required: true },
    transactionId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", TransactionModel);

module.exports = Transaction;
