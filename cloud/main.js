Parse.Cloud.define("hello", async (request) => {
  console.log(request.params);
  const demo = require("../demo");
  const response = await demo();
  console.log("response", response.data);
  return response.data;
});
