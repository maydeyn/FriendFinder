const pokemons = require("../db/data.js");

module.exports = function(app) {
  app.get("/api/pokemons", function(req, res) {
    res.json(pokemons);
  });

  app.post("/api/pokemons", function(req, res) {
    var userData = req.body;
    console.log(userData);
  });
};

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
