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
  4;
  try {
    const getPost = PostMode.findById(postId);
    return getPost;
  } catch (error) {}
};

module.exports = { createPost, getPost, updatePost, deletePost, getOnePost };
