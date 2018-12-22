const path = require("path");

const pokemons = require("../db/data.js");

module.exports = function(app) {
  app.get("/api/pokemons", function(req, res) {
    res.json(pokemons);
  });
};
