const path = require("path");

const pokemons = require("../db/data");

module.exports = function(app) {
  app.get("/api/survey", function(req, res) {
    res.json(pokemons);
  });
};
