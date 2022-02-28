const crypto = require("crypto");

crypto.randomBytes(256).toString("hex");

module.exports = {
  uri: "mongodb://127.0.0.1:27017/blog" ,
  secret: crypto,
  db: "blog",
};

