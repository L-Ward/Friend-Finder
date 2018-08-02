// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express setup
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());