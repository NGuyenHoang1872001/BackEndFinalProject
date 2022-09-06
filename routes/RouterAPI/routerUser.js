var express = require("express");
var router = express.Router();
const authRespositories = require("../../repositories/autherController");
const postRepository = require("../../repositories/postRepository");

router.post("/register", authRespositories.register);

router.post("/login", authRespositories.login);

router.post("/createPost", postRepository.createPost);

module.exports = router;
