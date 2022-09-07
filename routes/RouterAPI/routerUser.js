var express = require("express");
var router = express.Router();
const authController = require("../../controller/AutherController");
const postController = require("../../controller/PostController");
const storeController = require("../../controller/StoreController");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/createPost", postController.createPost);
router.get("/getPost", postController.getAllPost);
router.put("/updatePost/:postId", postController.updatePost);
router.delete("/deletePost/:postId", postController.deletePost);

router.post("/createStore", storeController.createStore);
router.get("/getStore", storeController.getAllStore);
router.put("/updateStore/:storeId", storeController.updateStore);
router.delete("/deleteStore/:storeId", storeController.deleteStore);

module.exports = router;
