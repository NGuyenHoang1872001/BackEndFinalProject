const bcrypt = require("bcrypt");

const hash = async (data) => {
  try {
    const hashPasword = await bcrypt.hash(data, 10);
    return hashPasword;
  } catch (error) {
    console.log("🚀 ~ file: bcrypt.js ~ line 8 ~ hash ~ error", error);
  }
};

const comparePassword = async (plainPassword, hash) => {
  try {
    const invalidPasword = await bcrypt.compare(plainPassword, hash);
    return invalidPasword;
  } catch (error) {}
};

module.exports = {
  hash,
  comparePassword,
};
