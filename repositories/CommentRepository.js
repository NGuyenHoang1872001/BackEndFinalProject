const CommentModel = require("../database/model/commentModel");

const createComment = async (payload) => {
  console.log(
    "🚀 ~ file: postController.js ~ line 5 ~ createPost ~ payload",
    payload
  );
  const newPost = await CommentModel.create(payload);

  return newPost;
};

const updateComment = async (commentId, option) => {
  const update = CommentModel.findByIdAndUpdate(commentId, option);
  return update;
};

const deleteComment = async (commentId) => {
  try {
    const deleteComment = await CommentModel.findByIdAndDelete(commentId);
    return deleteComment;
  } catch (error) {}
};

const getCommentbyPost = async (postId) => {
  try {
    const post = postId;

    const getComment = CommentModel.find({ postId: post }).populate("author");
    return getComment;
  } catch (error) {
    console.log(
      "🚀 ~ file: CommentRepository.js ~ line 33 ~ getCommentbyPost ~ error",
      error
    );
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
  getCommentbyPost,
};
