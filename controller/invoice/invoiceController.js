const InvoiceModel = require("../../database/model/invoiceModel");
const UserModel = require("../../database/model/userModel");
const InvoiceRepository = require("../../repositories/invoice/InvoiceRepository");

const createInvoice = async (req, res) => {
  try {
    const {
      name,
      address,
      phoneNumber,
      email,
      quantityProduct,
      ammount,
      paymentMethod,
      productId,
      userId,
      transactionId,
    } = req.body;
    const status = "Preparing";
    const findUser = await UserModel.findById(userId);
    if (!findUser) return res.send(400);
    const payload = {
      name,
      address,
      phoneNumber,
      email,
      quantityProduct,
      ammount,
      paymentMethod,
      productId,
      userId,
      transactionId,
      status,
    };

    const response = await InvoiceRepository.createInvoice(payload);
    return res.send(response);
  } catch (error) {
    console.log(
      "🚀 ~ file: InvoiceController.js ~ line 23 ~ createInvoice ~ error",
      error
    );
  }
};

const getAllInvoice = async (req, res) => {
  try {
    const getInvoice = await InvoiceRepository.getInvoice();
    return res.send(getInvoice);
  } catch (error) {}
};

const updateInvoice = async (req, res) => {
  try {
    const { invoiceId } = req.params;
    if (!invoiceId || !req.body) return res.status(403).send("Bad request");
    const { name, address, phoneNumber, email, status } = req.body;
    const option = { name, address, phoneNumber, email, status };

    const invoice = await InvoiceRepository.updateInvoice(invoiceId, option);
    if (!invoice) return res.status(503).send("Service Unavailable");
    return res.status(200).send(invoice);
  } catch (error) {
    console.log(
      "🚀 ~ file: InvoiceController.js ~ line 62 ~ updateInvoice ~ error",
      error
    );
  }
};

const deleteInvoice = async (req, res) => {
  const { invoiceId } = req.params;
  const findInvoice = await InvoiceModel.findById(invoiceId);
  if (!findInvoice) return res.sendStatus(400);
  const post = await InvoiceRepository.deletePost(invoiceId);
  return res.status(200).send("delete successfull");
};

const getInvoiceByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const findInvoice = await InvoiceRepository.getInvoicebyAuthor(userId);

    return res.send(findInvoice);
  } catch (error) {
    console.log(
      "🚀 ~ file: postController.js ~ line 73 ~ getPostByAuthor ~ error",
      error
    );
  }
};

const getInvoiceByProductId = async (req, res) => {
  try {
    const { productId } = req.params;

    const findInvoice = await InvoiceRepository.getInvoiceByProduct(productId);

    return res.send(findInvoice);
  } catch (error) {
    console.log(
      "🚀 ~ file: InvoiceController.js ~ line 100 ~ getInvoiceByProductId ~ error",
      error
    );
  }
};

module.exports = {
  createInvoice,
  getAllInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoiceByUser,
  getInvoiceByProductId,
};
