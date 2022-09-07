const StoreModel = require("../database/model/storeModel");
const UserMode = require("../database/model/userModel");

const createStore = async (payload) => {
  console.log(
    "🚀 ~ file: postController.js ~ line 5 ~ createPost ~ payload",
    payload
  );
  const newStore = await StoreModel.create(payload);

  return newStore;
};

const getStore = async () => {
  const getAllStore = StoreModel.find({});
  return getAllStore;
};

const updateStore = async (storeId, option) => {
  const update = StoreModel.findByIdAndUpdate(storeId, option);
  return update;
};

const deleteStore = async (storeId) => {
  try {
    const deleteStore = await StoreModel.findByIdAndDelete(storeId);
    return deleteStore;
  } catch (error) {}
};

module.exports = { createStore, getStore, updateStore, deleteStore };
