var express = require("express");
var router = express.Router();
const authRespositories = require("../../controller/autherController");

router.post("/register", authRespositories.register);

router.post("/login", authRespositories.login);

module.exports = router;
