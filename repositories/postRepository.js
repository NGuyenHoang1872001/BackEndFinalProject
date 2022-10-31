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
  const getAllPost = PostMode.find({});
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

module.exports = {
  createPost,
  getPost,
  updatePost,
  deletePost,
  getOnePost,
  getPostbyAuthor,
};
