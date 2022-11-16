const mongoose = require("mongoose");
const { Schema } = mongoose;
const ReplyModel = new Schema(
  {
    reply: { type: String, required: true },
    author: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    ],
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Comment",
    },
  },
  {
    timestamps: true,
  }
);

const Reply = mongoose.model("Reply", ReplyModel);

module.exports = Reply;
