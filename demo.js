const axios = require("axios").default;
module.exports = () => {
  return axios({
    url: "https://api.github.com/users/github",
    method: "GET",
  });
};
