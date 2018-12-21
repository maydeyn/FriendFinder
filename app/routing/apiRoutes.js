const path = require("path");

const express = require("express");
const app = express();

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
    database: "friends_db"
  });
}

app.get("/api/friends", function(req, res) {
  connection.query(
    "SELECT * FROM quotes where id = ?",
    [req.params.id],
    function(err, data) {
      if (err) {
        return res.status(500).end();
      }

      console.log(data);
      res.render("single-quote", data[0]);
    }
  );
});

app.post("/api/friends", function(req, res) {
  connection.query(
    "INSERT INTO quotes (author, quote) VALUES (?, ?)",
    [req.body.author, req.body.quote],
    function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }

      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

function loadProfiles() {
  // Selects all of the data from the MySQL profiles table
  connection.query("SELECT * FROM profiles", function(err, res) {
    if (err) throw err;
    //a fun trick for converting mysql's returned 'rowPacketData' obj into more usable JSON
    var data = JSON.stringify(res);
    data = JSON.parse(data);
    // loop over your data converting the string of numbers into an array (using split??)
    friends = data;
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    //once successfully connected, you may want to query your database for the info you'll need later!
  }
});
