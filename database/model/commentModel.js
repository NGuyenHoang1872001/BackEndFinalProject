const mongoose = require("mongoose");
const { Schema } = mongoose;
const CommentModel = new Schema(
  {
    comment: { type: String, required: true },
    author: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    ],
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", CommentModel);

module.exports = Comment;
