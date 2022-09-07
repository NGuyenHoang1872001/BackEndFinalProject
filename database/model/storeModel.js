const mongoose = require("mongoose");
const { Schema } = mongoose;
const StoreModel = new Schema(
  {
    title: { type: String, required: true },
    cover: { type: String, required: true },
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
