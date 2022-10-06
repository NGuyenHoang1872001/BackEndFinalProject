var express = require("express");
var router = express.Router();
const authController = require("../../controller/AutherController");
const postController = require("../../controller/PostController");
const storeController = require("../../controller/StoreController");
const productController = require("../../controller/ProductController");
const { route } = require("moongose/routes");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/createPost", postController.createPost);

router.get("/getPost", postController.getAllPost);
router.put("/updatePost/:postId", postController.updatePost);
router.delete("/deletePost/:postId", postController.deletePost);
router.get("/getOnePost/:postId", postController.getOnePost);

router.post("/createStore", storeController.createStore);
router.get("/getStore", storeController.getAllStore);
router.put("/updateStore/:storeId", storeController.updateStore);
router.delete("/deleteStore/:storeId", storeController.deleteStore);
router.get("/getOneStore/:storeId", storeController.getStore);
router.get("/getOwnerStore/:ownerId", storeController.getOwnerStore);

router.post("/createProduct", productController.createProduct);
router.get("/getProduct", productController.getAllProduct);
router.put("/updateProduct/:productId", productController.updateProduct);
router.delete("/deleteProduct/:productId", productController.deleteProduct);
router.get("/productInStore/:storeId", productController.getProductStore);

/**
 * @swagger
 * /routerAPI/register:
 *   post:
 *     summary: resgister User
 *     description: register User.
 *     responses:
 *       200:
 *          description: ok.
 */

/**
 * @swagger
 * /routerAPI/login:
 *   post:
 *     summary: resgister User
 *     description: register User.
 *     responses:
 *       200:
 *          description: ok.
 */

module.exports = router;
