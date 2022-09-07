var express = require("express");
var router = express.Router();
const authRespositories = require("../../repositories/autherController");
const postRepository = require("../../repositories/postRepository");

router.post("/register", authRespositories.register);

router.post("/login", authRespositories.login);

router.post("/createPost", postRepository.createPost);
router.get("/getPost", postRepository.getAllPost);
router.put("/updatePost/:postId", postRepository.updatePost);
router.delete("/deletePost/:postId", postRepository.deletePost);

module.exports = router;
