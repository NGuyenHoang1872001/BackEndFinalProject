const { post } = require("moongose/routes");
const PostMode = require("../database/model/postModel");
const UserMode = require("../database/model/userModel");

const createPost = async (payload) => {
  console.log(
    "🚀 ~ file: postController.js ~ line 5 ~ createPost ~ payload",
    payload
  );
  const newPost = await PostMode.create(payload);

  return newPost;
};

const getPost = async () => {
  const getAllPost = PostMode.find({})
    .populate("author")
    .sort({ createdAt: -1 });
  return getAllPost;
};

const updatePost = async (postId, option) => {
  const update = PostMode.findByIdAndUpdate(postId, option);
  return update;
};

const deletePost = async (postId) => {
  try {
    const deleteAPost = await PostMode.findByIdAndDelete(postId);
    return deleteAPost;
  } catch (error) {}
};

const getOnePost = async (postId) => {
  try {
    const getPost = PostMode.findById(postId);
    return getPost;
  } catch (error) {}
};

const getPostbyAuthor = async (userId) => {
  try {
    const user = userId;
    console.log(
      "🚀 ~ file: PostRepository.js ~ line 41 ~ getPostbyAuthor ~ user",
      user
    );
    const getPost = PostMode.find({ author: userId }).populate("author");
    return getPost;
  } catch (error) {
    console.log(
      "🚀 ~ file: PostRepository.js ~ line 43 ~ getPostbyAuthor ~ error",
      error
    );
  }
};
const pushAuthorLikePost = async (postId, liked) => {
  try {
    const getLike = PostMode.findByIdAndUpdate(
      { _id: postId },
      { $push: { liked } }
    );
    return getLike;
  } catch (error) {}
};

const pullAuthorLikePost = async (postId, liked) => {
  try {
    const unLike = PostMode.findByIdAndUpdate(
      { _id: postId },
      { $pull: { liked } }
    );
    return unLike;
  } catch (error) {}
};

module.exports = {
  createPost,
  getPost,
  updatePost,
  deletePost,
  getOnePost,
  getPostbyAuthor,
  pushAuthorLikePost,
  pullAuthorLikePost,
};
