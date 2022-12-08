const TransactionRepository = require("../../repositories/TransactionRepository");

const createTransaction = async (req, res) => {
  try {
    const { status, ammount, transactionId } = req.body;
    const payload = {
      status,
      ammount,
      transactionId,
    };

    const response = await TransactionRepository.createTransaction(payload);
    return res.send(response);
  } catch (error) {
    console.log(
      "🚀 ~ file: InvoiceController.js ~ line 23 ~ createInvoice ~ error",
      error
    );
  }
};
const viewTransaction = async (req, res) => {
  try {
    const response = await TransactionRepository.viewTransaction();

    return res.send(response);
  } catch (error) {
    console.log(
      "🚀 ~ file: TransactionController.js ~ line 26 ~ viewTransaction ~ error",
      error
    );
  }
};

module.exports = {
  createTransaction,
  viewTransaction,
};
