const User = require("../database/model/userModel");
const UserModel = require("../database/model/userModel");

const FindDetailUser = async (authorId) => {
  try {
    const getDetailUser = await UserModel.find({ _id: authorId });
    return getDetailUser;
  } catch (error) {}
};

const FindAllUser = async () => {
  try {
    const getUser = await UserModel.find({});
    return getUser;
  } catch (error) {}
};

const pushFollowUser = async (id, following) => {
  try {
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
    console.log(
      "🚀 ~ file: UserRepository.js ~ line 60 ~ getUserFollowing ~ findUser",
      findUser
    );
    return findUser;
  } catch (error) {
    console.log(
      "🚀 ~ file: UserRepository.js ~ line 62 ~ getUserFollowing ~ error",
      error
    );
  }
};

module.exports = {
  FindDetailUser,
  FindAllUser,
  pushFollowUser,
  pullFollowUser,
  getUserFollowing,
};
