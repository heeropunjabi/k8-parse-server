var express = require("express");
var ParseServer = require("parse-server").ParseServer;
var ParseDashboard = require("parse-dashboard");
const config = require("./config");
console.log("config--->", config);

var app = express();

var api = new ParseServer({
  //databaseURI: `mongodb://${config.MONGO_USER_NAME}:${config.MONGO_PASSWORD}@${config.MONGO_URI}:27017/parse?authSource=admin`,
  //databaseURI: `mongodb://localhost:27017/parse`,
  databaseURI: "postgres://admin:admin@0.0.0.0:5432/parse",
  cloud: "./cloud/main.js", // Path to your Cloud Code
  appId: "myAppId",
  masterKey: "myMasterKey", // Keep this key secret!
  appName: "MyAppName",
  fileKey: "optionalFileKey",
  serverURL: "http://localhost:1337/parse", // Don't forget to change to https if needed
  liveQuery: {
    classNames: ["Demo2"],
  },
});
var options = { allowInsecureHTTP: true };
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
    users: [
      {
        user: "admin",
        pass: "pass",
        apps: [{ appId: "myAppId" }],
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
const httpServer = require("http").createServer(app);

httpServer.listen(port, () => {
  console.log("parse-server-example running on port " + port + ".");
});
ParseServer.createLiveQueryServer(httpServer);

// let httpServer = require("http").createServer(app);
// httpServer.listen(2000);
