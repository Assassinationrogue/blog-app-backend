const express = require("express");
const app = express();
const port = 8080;
const blogApp = require("./src/app");
const mongoose = require("mongoose");
const config = require("./config/database");
const path = require("path");

app.use(express.static(__dirname + "/dist/frontend"));
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/dist/frontend/index.html"));
});

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log("Could not connect to database");
  } else {
    console.log("Connected to blog database successfully!");
  }
});

app.use(blogApp);

app.listen(port, () => {
  console.log("Listening on" + ` http://localhost:${port}`);
});
