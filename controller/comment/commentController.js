const CommentRepository = require("../../repositories/CommentRepository");
const PostMode = require("../../database/model/postModel");
const UserMode = require("../../database/model/userModel");
const CommentModel = require("../../database/model/commentModel");

const createComment = async (req, res) => {
  try {
    const { comment, author, postId } = req.body;
    const findUser = await UserMode.findById(author);
    if (!findUser) return res.sendStatus(400);
    const findPost = await PostMode.findById(postId);
    if (!findPost) return res.sendStatus(400);
    const payload = { comment, author, postId };
    console.log(
      "🚀 ~ file: CommentController.js ~ line 14 ~ createComment ~ payload",
      payload
    );

    const response = await CommentRepository.createComment(payload);
    return res.send(response);
  } catch (error) {
    console.log(
      "🚀 ~ file: CommentController.js ~ line 22 ~ createComment ~ error",
      error
    );
  }
};

const updateComment = async (req, res) => {
  const { commentId } = req.params;
  if (!commentId || !req.body) return res.status(403).send("Bad request");
  const { comment } = req.body;
  console.log(
    "🚀 ~ file: CommentController.js ~ line 33 ~ updateComment ~ comment",
    comment
  );
  const option = { comment };

  const updateComment = await CommentRepository.updateComment(
    commentId,
    option
  );
  if (!updateComment) return res.status(503).send("Service Unavailable");
  return res.status(200).send(updateComment);
};

const deleteComment = async (req, res) => {
  const { commentId } = req.params;
  const findComment = await CommentModel.findById(commentId);
  if (!findComment) return res.sendStatus(400);
  const comment = await CommentRepository.deleteComment(commentId);
  return res.status(200).send("delete successfull");
};

const getCommentByPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const getCommnent = await CommentRepository.getCommentbyPost(postId);

    return res.send(getCommnent);
  } catch (error) {
    console.log(
      "🚀 ~ file: CommentController.js ~ line 56 ~ getCommentByPost ~ error",
      error
    );
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
  getCommentByPost,
};
