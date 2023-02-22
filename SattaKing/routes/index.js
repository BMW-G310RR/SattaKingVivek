const express = require("express");
const router = express.Router();
const {getDailyResult, setDailyResult} = require('../controllers/DailyResult');
const {getSingleJodi, setSingleJodi} = require('../controllers/SingleJodi');
const {getLuckyNumber, setLuckyNumber} = require('../controllers/LuckyNumber');

// Home page route.
router.get("/SattaKing/getDailyResult", getDailyResult);
router.get("/SattaKing/setDailyResult", setDailyResult);
router.get("/SattaKing/setSingleJodi", setSingleJodi);
router.get("/SattaKing/getSingleJodi", getSingleJodi);
router.get("/SattaKing/getLuckyNumber", getLuckyNumber);
router.get("/SattaKing/setLuckyNumber", setLuckyNumber);

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;