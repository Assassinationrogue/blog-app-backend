const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const types = mongoose.Types;

let userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  username: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
