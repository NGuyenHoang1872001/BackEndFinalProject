const {
  FindDetailUser,
  FindAllUser,
  pullFollowUser,
  pushFollowUser,
  getUserFollowing,
  getSearchUser,
  updateUser,
  handleGetUserMonthly,
} = require("../../repositories/user/UserRepository");
const { hash } = require("../../helper/bcrypt");
const bcrypt = require("../../helper/bcrypt");

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
    const { page = 1, limit = 10 } = req.query;
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
    const { firstName, lastName, email, password, role, storeId } = req.body;
    const hashPasword = await bcrypt.hash(password);
    const payLoad = {
      firstName,
      lastName,
      email,
      password: hashPasword,
      role,
      storeId,
    };
    console.log(
      "🚀 ~ file: userController.js:118 ~ handleUpdateUser ~ payLoad",
      payLoad
    );
    const response = await updateUser(userId, payLoad);
    console.log(
      "🚀 ~ file: userController.js:128 ~ handleUpdateUser ~ response",
      response
    );
    res.send(response);
  } catch (error) {
    console.log(
      "🚀 ~ file: UserController.js:119 ~ handleUpdateUser ~ error",
      error
    );
  }
};

const getUserMonthly = async (req, res) => {
  try {
    const dateToday = new Date();
    console.log(
      "🚀 ~ file: UserController.js:138 ~ getUserMonthly ~ dateToday",
      dateToday
    );
    const yearToday = dateToday.getFullYear();
    console.log(
      "🚀 ~ file: UserController.js:140 ~ getUserMonthly ~ yearToday",
      yearToday
    );

    let userMonthly = [];
    for (let month = 0; month < 12; month++) {
      const startDay = new Date(yearToday, month);

      const endDay = new Date(yearToday, month + 1);

      const response = await handleGetUserMonthly(startDay, endDay);
      console.log(
        "🚀 ~ file: UserController.js:161 ~ getUserMonthly ~ response",
        response
      );
      const numberOfUser = response.length;
      await userMonthly.push({
        month: month + 1,
        numOfUser: numberOfUser,
      });
    }
    res.send(userMonthly);
  } catch (error) {
    console.log(
      "🚀 ~ file: UserController.js:152 ~ getUserMonthly ~ error",
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
  getUserMonthly,
  // handleGetUserStore,
  // handleGetUserNoStore,
};
