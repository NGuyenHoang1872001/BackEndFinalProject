const TransactionModel = require("../database/model/transactionModel");
const createTransaction = async (payload) => {
  const newTransaction = await TransactionModel.create(payload);
  return newTransaction;
};
const viewTransaction = async (req, res) => {
  try {
    const viewTransaction = await TransactionModel.find({});
    return viewTransaction;
  } catch (error) {
    console.log(
      "🚀 ~ file: TransactionRepository.js ~ line 11 ~ viewTransaction ~ error",
      error
    );
  }
};

module.exports = {
  createTransaction,
  viewTransaction,
};
