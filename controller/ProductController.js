const productRepository = require("../repositories/ProductRepository");
const StoreModel = require("../database/model/storeModel");
const ProductModel = require("../database/model/productModel");

const createProduct = async (req, res) => {
  try {
    const { title, cover, price, storeId } = req.body;
    const findStore = await StoreModel.findById(storeId);
    if (!findStore) return res.send(400);
    const payload = { title, cover, price, storeId };

    const response = await productRepository.createProduct(payload);
    return res.send(response);
  } catch (error) {
    console.log(
      "🚀 ~ file: storeController.js ~ line 15 ~ createStore ~ error",
      error
    );
  }
};

const getAllProduct = async (req, res) => {
  try {
    const getProduct = await productRepository.getProduct();
    return res.send(getProduct);
  } catch (error) {
    console.log(
      "🚀 ~ file: storeController.js ~ line 27 ~ getAllStore ~ error",
      error
    );
  }
};

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  if (!productId || !req.body) return res.status(403).send("Bad request");
  const { cover, title, price } = req.body;
  const option = { title, cover, price };
  const product = await productRepository.updateProduct(productId, option);
  if (!product) return res.status(503).send("Service Unavailable");
  return res.status(200).send(product);
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const findProduct = await ProductModel.findById(productId);
  if (!findProduct) return res.sendStatus(400);
  const product = await productRepository.deleteProduct(productId);
  return res.status(200).send("delete successfull");
};

const getProductStore = async (req, res) => {
  const { storeId } = req.params;
  const findStore = await StoreModel.findById(storeId);
  if (!findStore) return res.sendStatus(400);
  const getProduct = await productRepository.getProductStore(storeId);
  return res.status(200).send(getProduct);
};

module.exports = {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  getProductStore,
};
