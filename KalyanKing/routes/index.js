const express = require("express");
const router = express.Router();
const {getDailyResult, setDailyResult} = require('../controllers/DailyResult');
const {getLuckyNumber, setLuckyNumber} = require('../controllers/LuckyNumber');
const {getSingleJodi, setSingleJodi} = require('../controllers/SingleJodi');


// Home page route.
router.get("/KalyanKing/getDailyResult", getDailyResult);
router.get("/KalyanKing/setDailyResult", setDailyResult);

router.get("/KalyanKing/getLuckyNumber", getLuckyNumber);
router.get("/KalyanKing/setLuckyNumber", setLuckyNumber);

router.get("/KalyanKing/getSingleJodi", getSingleJodi);
router.get("/KalyanKing/setSingleJodi", setSingleJodi);

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;