var express = require("express");
var ParseServer = require("parse-server").ParseServer;
var ParseDashboard = require("parse-dashboard");
const config = require("./config");

var app = express();
var api = new ParseServer({
  databaseURI: config.MONGO_URI, // Connection string for your MongoDB database
  cloud: "./cloud/main.js", // Path to your Cloud Code
  appId: "myAppId",
  masterKey: "myMasterKey", // Keep this key secret!
  appName: "MyAppName",
  fileKey: "optionalFileKey",
  serverURL: "http://localhost:1337/parse", // Don't forget to change to https if needed
});
var options = { allowInsecureHTTP: false };
var dashboard = new ParseDashboard(
  {
    apps: [
      {
        serverURL: "http://localhost:1337/parse",
        appId: "myAppId",
        masterKey: "myMasterKey",
        appName: "myAppName",
        host: "localhost",
      },
    ],
  },
  options
);

app.use("/dashboard", dashboard);

// Serve the Parse API at /parse URL prefix
app.use("/parse", api);

app.get("/express", async (req, res) => {
  res.send("hi bro");
});

var port = 1337;
app.listen(port, function() {
  console.log("parse-server-example running on port " + port + ".");
});
