const mongoose = require("mongoose");
const { Schema } = mongoose;
const StoreModel = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model("Store", StoreModel);

module.exports = Store;
