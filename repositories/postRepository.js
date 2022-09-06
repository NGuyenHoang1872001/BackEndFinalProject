const PostMode = require("../database/model/postModel");
const UserMode = require("../database/model/userModel");
const createNewPost = require("../controller/postController");

const createPost = async (req, res) => {
  try {
    const { title, cover, author } = req.body;
    const findUser = await UserMode.findById(author);
    if (!findUser) return res.send(400);
    const payload = { title, cover, author };

    const response = await createNewPost.createPost(payload);
    return res.send(response);
  } catch (error) {
    console.log(
      "🚀 ~ file: postRepository.js ~ line 7 ~ createPost ~ error",
      error
    );
  }
};
module.exports = {
  createPost,
};
