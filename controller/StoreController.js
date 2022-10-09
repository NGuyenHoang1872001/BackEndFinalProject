const storeRepository = require("../repositories/StoreRepository");
const StoreModel = require("../database/model/storeModel");
const UserMode = require("../database/model/userModel");

const createStore = async (req, res) => {
  try {
    const { name, email, phoneNumber, ownerId } = req.body;
    const findUser = await UserMode.findById(ownerId);
    if (!findUser) return res.send(400);
    const payload = { name, email, phoneNumber, ownerId };

    const response = await storeRepository.createStore(payload);
    return res.send(response);
  } catch (error) {
    console.log(
      "🚀 ~ file: storeController.js ~ line 15 ~ createStore ~ error",
      error
    );
  }
};

const getAllStore = async (req, res) => {
  try {
    const getStore = await storeRepository.getAllStore();
    return res.send(getStore);
  } catch (error) {
    console.log(
      "🚀 ~ file: storeController.js ~ line 27 ~ getAllStore ~ error",
      error
    );
  }
};

const updateStore = async (req, res) => {
  const { storeId } = req.params;
  if (!storeId || !req.body) return res.status(403).send("Bad request");
  const { name, email, phoneNumber } = req.body;
  const option = { name, email, phoneNumber };
  const store = await storeRepository.updateStore(storeId, option);
  if (!store) return res.status(503).send("Service Unavailable");
  return res.status(200).send(store);
};

const deleteStore = async (req, res) => {
  const { storeId } = req.params;
  const findStore = await StoreModel.findById(storeId);
  if (!findStore) return res.sendStatus(400);
  const store = await storeRepository.deleteStore(storeId);
  return res.status(200).send("delete successfull");
};

const getStore = async (req, res) => {
  const { storeId } = req.params;
  const findStore = await storeRepository.getStore(storeId);
  return res.status(200).send(findStore);
};

const getOwnerStore = async (req, res) => {
  const { ownerId } = req.params;
  console.log(
    "🚀 ~ file: StoreController.js ~ line 60 ~ getOwnerStore ~ ownerId",
    ownerId
  );
  const getDetailOwner = await storeRepository.getOwnerStore(ownerId);
  console.log(
    "🚀 ~ file: StoreController.js ~ line 61 ~ getOwnerStore ~ getDetailOwner",
    getDetailOwner
  );
  res.send(getDetailOwner);
};

module.exports = {
  createStore,
  getAllStore,
  updateStore,
  deleteStore,
  getStore,
  getOwnerStore,
};
