const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const singleJodi = new Schema({
    newsName: {
      type: String,
    },
    color: {
      type: String,
    },
    backgroundColor:{
      type:String
    },
    number:{
      type:Number
    }
});

const KalyanKing = mongoose.connection.useDb('KalyanKing');
const SingleJodi = KalyanKing.model("SingleJodi", singleJodi)

module.exports = SingleJodi;
