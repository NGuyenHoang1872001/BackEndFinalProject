const mongoose = require("mongoose");
const { Schema } = mongoose;
const PostModel = new Schema(
  {
    title: { type: String, required: true },
    cover: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostModel);

module.exports = Post;
