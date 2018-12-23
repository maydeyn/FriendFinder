const path = require("path");

const pokemons = require("../db/data.js");

module.exports = function(app) {
  app.get("/api/pokemons", function(req, res) {
    res.json(pokemons);
  });

  app.post("/api/pokemons", function(req, res) {
    const userInput = req.body;
    console.log("user input = " + JSON.stringify(userInput));
    const userScore = userInput.scores;
    console.log("user score =" + userScore);

    var matchName = "";
    var matchImage = "";
    var totalCount = -1;

    for (var i = 0; i < pokemons.length; i++) {
      var counter = 0;
      for (var a = 0; a < userScore.length; a++) {
        if (pokemons[i].scores[a] === userScore[a]) {
          counter = counter + 1;
        }
      }
      if (counter > totalCount) {
        totalcounter = counter;
        matchName = pokemons[i].name;
        matchImage = pokemons[i].photo;
      }
    }
    pokemons.push(userInput);
    console.log(
      res.json({ status: "ok", matchName: matchName, matchImage: matchImage })
    );
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
