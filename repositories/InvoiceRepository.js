const UserMode = require("../database/model/userModel");
const InvoiceModel = require("../database/model/invoiceModel");

const createInvoice = async (payload) => {
  console.log(
    "🚀 ~ file: postController.js ~ line 5 ~ createPost ~ payload",
    payload
  );
  const newInvoice = await InvoiceModel.create(payload);

  return newInvoice;
};

const getInvoice = async () => {
  const getAllInvoice = InvoiceModel.find({});
  return getAllInvoice;
};

const updateInvoice = async (id, option) => {
  const update = InvoiceModel.findByIdAndUpdate(id, option);
  return update;
};

const deleteInvoice = async (id) => {
  try {
    const deleteInvoice = await InvoiceModel.findByIdAndDelete(id);
    return deleteInvoice;
  } catch (error) {}
};

// const getOnePost = async (postId) => {
//   try {
//     const getPost = PostMode.findById(postId);
//     return getPost;
//   } catch (error) {}
// };

const getInvoicebyAuthor = async (userId) => {
  try {
    const user = userId;

    const getInvoice = InvoiceModel.find({ userId: user }).populate(
      "productId"
    );
    if (getInvoice) return getInvoice;
    console.log("no Data");
  } catch (error) {
    console.log(
      "🚀 ~ file: InvoiceRepository.js ~ line 46 ~ getInvoicebyAuthor ~ error",
      error
    );
  }
};

const getInvoiceByProduct = async (productId) => {
  try {
    const product = productId;
    console.log(
      "🚀 ~ file: InvoiceRepository.js ~ line 58 ~ getInvoiceByProduct ~ product",
      product
    );
    const getInvoice = await InvoiceModel.find({ productId: product }).populate(
      "userId"
    );

    return getInvoice;
  } catch (error) {
    console.log(
      "🚀 ~ file: InvoiceRepository.js ~ line 71 ~ getInvoiceByProduct ~ error",
      error
    );
  }
};

module.exports = {
  createInvoice,
  getInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoicebyAuthor,
  getInvoiceByProduct,
};
