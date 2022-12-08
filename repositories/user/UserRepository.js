const User = require("../../database/model/userModel");
const UserModel = require("../../database/model/userModel");

const FindDetailUser = async (authorId) => {
  try {
    const getDetailUser = await UserModel.find({ _id: authorId });
    return getDetailUser;
  } catch (error) {}
};

const FindAllUser = async (createdAt) => {
  try {
    if (createdAt) {
      const getUser = await UserModel.find({});
      return getUser;
    } else {
      const getUser = await UserModel.find({});
      return getUser;
    }
  } catch (error) {}
};

const pushFollowUser = async (id, following) => {
  try {
    console.log(
      "🚀 ~ file: UserRepository.js ~ line 19 ~ pushFollowUser ~ following",
      following
    );
    console.log(
      "🚀 ~ file: UserRepository.js ~ line 19 ~ pushFollowUser ~ id",
      id
    );
    const getFollow = await UserModel.findByIdAndUpdate(
      { _id: id },
      { $push: { following } }
    );
    return getFollow;
  } catch (error) {
    console.log(
      "🚀 ~ file: UserRepository.js ~ line 28 ~ pushFollowStore ~ error",
      error
    );
  }
};

const pullFollowUser = async (id, following) => {
  try {
    const unFollow = await UserModel.findByIdAndUpdate(
      { _id: id },
      { $pull: { following } }
    );
    return unFollow;
  } catch (error) {}
};

const getUserFollowing = async (id) => {
  try {
    console.log(
      "🚀 ~ file: UserRepository.js ~ line 54 ~ getUserFollowing ~ id",
      id
    );
    const findUser = await UserModel.find({
      following: { $all: [id] },
    });

    return findUser;
  } catch (error) {
    console.log(
      "🚀 ~ file: UserRepository.js ~ line 62 ~ getUserFollowing ~ error",
      error
    );
  }
};

const getSearchUser = async (condition, options) => {
  console.log(
    "🚀 ~ file: UserRepository.js:76 ~ getSearchUser ~ condition",
    condition
  );
  try {
    const findUserName = await UserModel.paginate(condition, options);
    return findUserName;
  } catch (error) {
    console.log(
      "🚀 ~ file: UserRepository.js ~ line 72 ~ getSearchUser ~ error",
      error
    );
  }
};

const updateUser = async (userId, payLoad) => {
  console.log(
    "🚀 ~ file: UserRepository.js:83 ~ updateUser ~ payLoad",
    payLoad
  );
  try {
    const update = UserModel.findByIdAndUpdate(userId, payLoad);
    return update;
  } catch (error) {
    console.log("🚀 ~ file: UserRepository.js:87 ~ updateUser ~ error", error);
  }
};

const handleGetUserMonthly = async (startDay, endDay) => {
  try {
    const user = await UserModel.find({
      createdAt: {
        $gte: startDay,
        $lte: endDay,
      },
    });
    return user;
  } catch (error) {}
};
module.exports = {
  FindDetailUser,
  FindAllUser,
  pushFollowUser,
  pullFollowUser,
  getUserFollowing,
  getSearchUser,
  updateUser,
  handleGetUserMonthly,
};
