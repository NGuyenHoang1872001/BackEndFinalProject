const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserModel = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserModel);

module.exports = User;
