const User = require("../database/model/userModel");
const UserModel = require("../database/model/userModel");

const FindDetailUser = async (userId) => {
  try {
    const getDetailUser = await UserModel.find({ _id: userId });
    return getDetailUser;
  } catch (error) {}
};

const FindAllUser = async () => {
  try {
    const getUser = await UserModel.find({});
    return getUser;
  } catch (error) {}
};
module.exports = { FindDetailUser, FindAllUser };
