const ReplyModel = require("../database/model/replyModel");

const createReply = async (payload) => {
  const newReply = await ReplyModel.create(payload);

  return newReply;
};

const updateReply = async (replyId, option) => {
  const update = ReplyModel.findByIdAndUpdate(replyId, option);
  return update;
};

const deleteReply = async (replyId) => {
  try {
    const deleteReply = await ReplyModel.findByIdAndDelete(replyId);
    return deleteReply;
  } catch (error) {}
};

const getReplybyComment = async (commentID) => {
  try {
    const comment = commentID;

    const getReply = ReplyModel.find({ commentId: comment }).populate("author");
    return getReply;
  } catch (error) {
    console.log(
      "🚀 ~ file: ReplyRepository.js ~ line 28 ~ getReplybyComment ~ error",
      error
    );
  }
};

module.exports = {
  createReply,
  updateReply,
  deleteReply,
  getReplybyComment,
};
