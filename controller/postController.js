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

module.exports = { createPost };
