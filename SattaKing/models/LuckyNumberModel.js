const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const luckyNumber = new Schema({
    luckyTitle: {
      type: String,
    },
    luckyBody: {
      type: String,
    },
    isLinkButton: {
      type: Boolean,
    },
    buttonLink: {
      type: String,
    },
    buttonTxt: {
      type: String,
    }
});

const SattaKing = mongoose.connection.useDb('SattaKing');
const LuckyNumber = SattaKing.model("LuckyNumber", luckyNumber)

module.exports = LuckyNumber;
