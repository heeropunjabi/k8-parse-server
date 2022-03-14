require("dotenv").config();
module.exports = {
  MONGO_USER_NAME: process.env.MONGO_USER_NAME || "",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "",
  MONGO_URI: process.env.MONGO_URI || "",
};
