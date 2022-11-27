const {
  FindDetailUser,
  FindAllUser,
  pullFollowUser,
  pushFollowUser,
  getUserFollowing,
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

module.exports = {
  findInformationUser,
  findAllUser,
  getFollowingUser,
  getUnFollowingUser,
  getUserFollow,
};
