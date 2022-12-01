const {
  FindDetailUser,
  FindAllUser,
  pullFollowUser,
  pushFollowUser,
  getUserFollowing,
  getSearchUser,
  updateUser,
} = require("../repositories/UserRepository");
const { hash } = require("../helper/bcrypt");
const bcrypt = require("../helper/bcrypt");

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
const getFollowingUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { following } = req.body;

    const getFollow = await pushFollowUser(id, following);
    res.send(getFollow);
  } catch (error) {
    console.log(
      "🚀 ~ file: StoreController.js ~ line 80 ~ getAuthorLIike ~ error",
      error
    );
  }
};
const getUnFollowingUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { following } = req.body;

    const unFollowing = await pullFollowUser(id, following);
    res.send(unFollowing);
  } catch (error) {
    console.log(
      "🚀 ~ file: StoreController.js ~ line 94 ~ getUnFollowingStore ~ error",
      error
    );
  }
};
const getUserFollow = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(
      "🚀 ~ file: UserController.js ~ line 72 ~ getUserFollowing ~ id",
      id
    );
    const userFollowing = await getUserFollowing(id);
    console.log(
      "🚀 ~ file: UserController.js ~ line 77 ~ getUserFollow ~ userFollowing",
      userFollowing
    );
    return res.send(userFollowing);
  } catch (error) {
    console.log(
      "🚀 ~ file: UserController.js ~ line 78 ~ getUserFollow ~ error",
      error
    );
  }
};

const findUserName = async (req, res) => {
  try {
    const { query } = req.query;
    const { page = 1, limit = 3 } = req.query;
    const options = {
      page,
      limit,
    };
    const condition = {
      $or: [
        { firstName: { $regex: String(query), $options: "i" } },
        { lastName: { $regex: String(query), $options: "i" } },
        { email: { $regex: String(query), $options: "i" } },
      ],
    };
    const responses = await getSearchUser(condition, options);
    return res.send(responses);
  } catch (error) {
    console.log(
      "🚀 ~ file: UserController.js ~ line 90 ~ findUserName ~ error",
      error
    );
  }
};
const handleUpdateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { firstName, lastName, email, password, role } = req.body;
    const hashPasword = await bcrypt.hash(password);
    const payLoad = { firstName, lastName, email, password: hashPasword, role };
    const response = await updateUser(userId, payLoad);
    res.send(response);
  } catch (error) {
    console.log(
      "🚀 ~ file: UserController.js:119 ~ handleUpdateUser ~ error",
      error
    );
  }
};

module.exports = {
  findInformationUser,
  findAllUser,
  getFollowingUser,
  getUnFollowingUser,
  findUserName,
  getUserFollow,
  handleUpdateUser,
};
