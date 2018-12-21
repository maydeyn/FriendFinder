const path = require("path");

const express = require("express");
const router = express.Router();

router.use(express.static("public"));
const PORT = process.env.PORT || 3000;

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
  if (err) {
    return res.status(500).end();
  }
  res.render("home", { quotes: data });
});

router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
  if (err) {
    return res.status(500).end();
  }

  res.render("survey", { profiles: data });
});

module.exports = router;
