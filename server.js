const express = require("express");
const app = express();

const path = require("path");

app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./app/routing/htmlRoutes.js");

app.listen(PORT, function() {
  console.log("Server is listening on http://localhost" + PORT);
});
