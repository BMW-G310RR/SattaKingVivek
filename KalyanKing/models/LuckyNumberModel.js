const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const luckyNumber = new Schema({
    name: {
      type: String,
    },
    mainColor: {
      type: String,
    },
    isButton:{
      type:Boolean
    },
    buttonText:{
      type:String
    },
    buttonLink:{
      type:String
    },
    color:{
      type:String
    },
    bodyText:{
      type:String
    }
});

const KalyanKing = mongoose.connection.useDb('KalyanKing');
const LuckyNumber = KalyanKing.model("LuckyNumber", luckyNumber)

module.exports = LuckyNumber;
