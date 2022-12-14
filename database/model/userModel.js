const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { Schema } = mongoose;
const Admin_Role = "admin";
const User_Role = "user";
const UserModel = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    role: {
      type: String,
      enum: [Admin_Role, User_Role],
    },
    storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store" },
  },
  {
    timestamps: true,
  }
);
UserModel.plugin(mongoosePaginate);
const User = mongoose.model("User", UserModel);

module.exports = User;
