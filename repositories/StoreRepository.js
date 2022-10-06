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

const getAllStore = async () => {
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

const getStore = async (storeId) => {
  try {
    const getOneStore = await StoreModel.findById(storeId);
    return getOneStore;
  } catch (error) {
    console.log(
      "🚀 ~ file: StoreRepository.js ~ line 35 ~ getStore ~ error",
      error
    );
  }
};

const getOwnerStore = async (ownerId) => {
  try {
    const getOwner = await StoreModel.find({ ownerId: ownerId });

    return getOwner;
  } catch (error) {}
};

module.exports = {
  createStore,
  getAllStore,
  updateStore,
  deleteStore,
  getStore,
  getOwnerStore,
};
