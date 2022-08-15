require("dotenv").config();
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    console.log("Okeii day");
  } catch (error) {
    console.log(
      "🚀 ~ file: connect.js ~ line 9 ~ connectDatabase ~ error",
      error
    );
  }
};

const disconnect = async () => {
  try {
    await mongoose.connecttion.close();
    console.log("monogose is disconnected");
  } catch (error) {
    console.log("🚀 ~ file: connect.js ~ line 24 ~ disconnect ~ error", error);
  }
};

module.exports = {
  connect,
};
