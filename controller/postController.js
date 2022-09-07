const PostMode = require("../database/model/postModel");
const UserMode = require("../database/model/userModel");
const postRepository = require("../repositories/PostRepository");

const createPost = async (req, res) => {
  try {
    const { title, cover, author } = req.body;
    const findUser = await UserMode.findById(author);
    if (!findUser) return res.send(400);
    const payload = { title, cover, author };

    const response = await postRepository.createPost(payload);
    return res.send(response);
  } catch (error) {
    console.log(
      "🚀 ~ file: postRepository.js ~ line 7 ~ createPost ~ error",
      error
    );
  }
};

const getAllPost = async (req, res) => {
  try {
    const getPost = await postRepository.getPost();
    return res.send(getPost);
  } catch (error) {
    console.log(
      "🚀 ~ file: postRepository.js ~ line 27 ~ getAllPost ~ error",
      error
    );
  }
};

const updatePost = async (req, res) => {
  const { postId } = req.params;
  if (!postId || !req.body) return res.status(403).send("Bad request");
  const { cover, title } = req.body;
  const option = { title, cover };
  console.log(
    "🚀 ~ file: postRepository.js ~ line 39 ~ updatePost ~ option",
    option
  );
  const post = await postRepository.updatePost(postId, option);
  if (!post) return res.status(503).send("Service Unavailable");
  return res.status(200).send(post);
};

const deletePost = async (req, res) => {
  const { postId } = req.params;
  const findPost = await PostMode.findById(postId);
  if (!findPost) return res.sendStatus(400);
  const post = await postRepository.deletePost(postId);
  return res.status(200).send("delete successfull");
};

module.exports = {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
};
