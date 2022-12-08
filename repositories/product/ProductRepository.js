const StoreModel = require("../../database/model/storeModel");
const ProductModel = require("../../database/model/productModel");

const createProduct = async (payload) => {
  const newProduct = await ProductModel.create(payload);

  return newProduct;
};

const getProduct = async () => {
  const getAllProduct = ProductModel.find({});
  return getAllProduct;
};

const updateProduct = async (productId, option) => {
  const update = ProductModel.findByIdAndUpdate(productId, option);
  return update;
};

const deleteProduct = async (productId) => {
  try {
    const deleteProduct = await ProductModel.findByIdAndDelete(productId);
    return deleteProduct;
  } catch (error) {}
};

const getProductStore = async (storeId) => {
  const getProductInStore = ProductModel.find({ storeId });
  return getProductInStore;
};
const handleGetProductMonthly = async (startDay, endDay) => {
  try {
    const store = await ProductModel.find({
      createdAt: {
        $gte: startDay,
        $lte: endDay,
      },
    });
    return store;
  } catch (error) {}
};
module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductStore,
  handleGetProductMonthly,
};
