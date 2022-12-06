var express = require("express");
var router = express.Router();
const authController = require("../../controller/AutherController");
const postController = require("../../controller/PostController");
const storeController = require("../../controller/StoreController");
const productController = require("../../controller/ProductController");
const userControleer = require("../../controller/UserController");
const InvoiceController = require("../../controller/InvoiceController");
const TransactionController = require("../../controller/TransactionController");
const CommentControler = require("../../controller/CommentController");
const ReplyController = require("../../controller/ReplyController");
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

router.get("/getUser", userControleer.findAllUser);
router.get("/getDetailUser/:userId", userControleer.findInformationUser);
router.get("/getPostByAuthor/:authorId", postController.getPostByAuthor);
router.put("/updateUser/:userId", userControleer.handleUpdateUser);

router.post("/createInvoice", InvoiceController.createInvoice);

router.get("/getInvoice", InvoiceController.getAllInvoice);
router.put("/updateInvoice/:invoiceId", InvoiceController.updateInvoice);
router.delete("/deleteInvoice/:invoiceId", InvoiceController.deleteInvoice);
router.get("/getInvoiceByAuthor/:userId", InvoiceController.getInvoiceByUser);

router.post("/createTransaction", TransactionController.createTransaction);
router.get("/viewTransaction", TransactionController.viewTransaction);

router.post("/createComment", CommentControler.createComment);
router.put("/updateComment/:commentId", CommentControler.updateComment);
router.delete("/deleteComment/:commentId", CommentControler.deleteComment);
router.get("/getComment/:postId", CommentControler.getCommentByPost);

router.post("/createReply", ReplyController.createReply);
router.put("/updateReply/:replyId", ReplyController.updateReply);
router.delete("/deleteReply/:replyId", ReplyController.deleteReply);
router.get("/getReply/:commentId", ReplyController.getReplybyComment);

router.put("/getLikedPost/:postId", postController.getAuthorLIike);
router.put("/getUnLikedPost/:postId", postController.getAuthorUnLike);
router.put("/getStoreFollowing/:storeId", storeController.getFollowingStore);
router.put(
  "/getStoreUnFollowing/:storeId",
  storeController.getUnFollowingStore
);

router.get(
  "/getInvoiceByProduct/:productId",
  InvoiceController.getInvoiceByProductId
);

router.put("/getUserFollowing/:id", userControleer.getFollowingUser);
router.put("/getUserUnFollowing/:id", userControleer.getUnFollowingUser);

router.get("/getUserFollow/:id", userControleer.getUserFollow);
router.get("/searchUser", userControleer.findUserName);
router.get("/userMonthly", userControleer.getUserMonthly);
router.get("/storeMonthly", storeController.getStoreMonthly);
router.get("/productMonthly", productController.getProductMonthly);
// router.get("/getUserStore", userControleer.handleGetUserStore);
// router.get("/getUserNoStore", userControleer.handleGetUserNoStore);
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
