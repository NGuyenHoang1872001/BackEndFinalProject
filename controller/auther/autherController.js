const UserModel = require("../../database/model/userModel");
const bcrypt = require("../../helper/bcrypt");
const jwt = require("jsonwebtoken");
const { hash, comparePassword } = require("../../helper/bcrypt");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const role = "user";
    if (!email || !password || !firstName || !lastName || !role)
      return res.status(400).send("missing param");
    const findEmail = await UserModel.findOne({ email });
    if (findEmail) return res.status(400).send("Email Existed");
    const hashPasword = await bcrypt.hash(password);
    const user = await UserModel.create({
      email,
      password: hashPasword,
      firstName,
      lastName,
      role,
    });

    if (!user) return res.sendStatus(500);
    return res.status(200).send(user);
  } catch (error) {
    console.log(
      "🚀 ~ file: autherController.js ~ line 24 ~ register ~ error",
      error
    );
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // if (!email || !pasword)
    //   return res.status(400).send("email and password please");
    const data = { email, password };
    console.log("🚀 ~ file: AutherController.js:39 ~ login ~ data", data);
    const user = await UserModel.findOne({ email });
    if (!user) return res.sendStatus(404);
    const invalidPassword = await comparePassword(password, user.password);
    console.log(
      "🚀 ~ file: AutherController.js:42 ~ login ~ invalidPassword",
      invalidPassword
    );
    if (!invalidPassword) return res.status(400).send("Something wrong");

    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWR_SECRET_KEY);
    return res.status(200).send({ token, payload });
  } catch (error) {
    console.log(
      "🚀 ~ file: AuthController.js ~ line 36 ~ login ~ error",
      error
    );
  }
};

module.exports = {
  register,
  login,
};
