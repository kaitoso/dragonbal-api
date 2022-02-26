const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const {serverStart} = require("./util/serverStart")

app.use(bodyParser.json());
serverStart(3000,app);
