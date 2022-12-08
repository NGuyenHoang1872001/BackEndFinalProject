const ReplyRepository = require("../../repositories/ReplyRepository");
const ReplyModel = require("../../database/model/replyModel");
const UserMode = require("../../database/model/userModel");
const CommentModel = require("../../database/model/commentModel");

const createReply = async (req, res) => {
  try {
    const { reply, author, commentId } = req.body;
    const findUser = await UserMode.findById(author);
    if (!findUser) return res.sendStatus(400);
    const findComment = await CommentModel.findById(commentId);
    if (!findComment) return res.sendStatus(400);
    const payload = { reply, author, commentId };
    console.log(
      "🚀 ~ file: ReplyController.js ~ line 14 ~ createReply ~ payload",
      payload
    );

    const response = await ReplyRepository.createReply(payload);
    return res.send(response);
  } catch (error) {
    console.log(
      "🚀 ~ file: ReplyController.js ~ line 22 ~ createReply ~ error",
      error
    );
  }
};

const updateReply = async (req, res) => {
  const { replyId } = req.params;
  if (!replyId || !req.body) return res.status(403).send("Bad request");
  const { reply } = req.body;

  const option = { reply };

  const updateComment = await ReplyRepository.updateReply(replyId, option);
  if (!updateComment) return res.status(503).send("Service Unavailable");
  return res.status(200).send(updateComment);
};

const deleteReply = async (req, res) => {
  const { replyId } = req.params;
  const findReply = await ReplyModel.findById(replyId);
  if (!findReply) return res.sendStatus(400);
  const reply = await ReplyRepository.deleteReply(replyId);
  return res.status(200).send("delete successfull");
};

const getReplybyComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const findComment = await CommentModel.findById(commentId);
    if (!findComment) return res.sendStatus(400);

    const getReply = await ReplyRepository.getReplybyComment(commentId);

    return res.send(getReply);
  } catch (error) {
    console.log(
      "🚀 ~ file: ReplyController.js ~ line 57 ~ getReplybyComment ~ error",
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
