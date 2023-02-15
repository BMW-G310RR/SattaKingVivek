const express = require("express");
const router = express.Router();
const {getDailyResult, setDailyResult} = require('../controllers/DailyResult');

// Home page route.
router.get("/SattaKing/getDailyResult", getDailyResult);

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;