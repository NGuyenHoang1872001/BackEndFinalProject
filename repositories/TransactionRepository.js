const TransactionModel = require("../database/model/transactionModel");
const createTransaction = async (payload) => {
  const newTransaction = await TransactionModel.create(payload);
  return newTransaction;
};

module.exports = {
  createTransaction,
};
