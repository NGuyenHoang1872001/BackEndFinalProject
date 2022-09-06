const mongoose = require("mongoose");
const { Schema } = mongoose;
const storeModel = new Schema(
  {
    title: { type: String, required: true },
    cover: { type: String, required: true },
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

const Store = mongoose.model("Store", StoreModel);

module.exports = Store;
