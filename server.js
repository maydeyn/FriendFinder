const express = require("express");
const app = express();

// const path = require("path");

app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

const mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "pokemons_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err);
  }
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
