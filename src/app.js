const express = require("express");
const app = express();
const privateRoute = require("./router/private.router");

app.use('/authentication',privateRoute);

module.exports = app;
