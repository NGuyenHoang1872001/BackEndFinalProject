const {
  FindDetailUser,
  FindAllUser,
} = require("../repositories/UserRepository");

const findAllUser = async (req, res) => {
  try {
    const getUser = await FindAllUser();
    return res.send(getUser);
  } catch (error) {}
};

const findInformationUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = await FindDetailUser(userId);
    console.log(
      "🚀 ~ file: UserController.js ~ line 17 ~ findInformationUser ~ userData",
      userData
    );
    return res.send(userData);
  } catch (error) {
    console.log(
      "🚀 ~ file: UserController.js ~ line 23 ~ findInformationUser ~ error",
      error
    );
  }
};

module.exports = { findInformationUser, findAllUser };
