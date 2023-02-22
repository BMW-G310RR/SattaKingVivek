const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const singleJodi = new Schema({
    khabarName: {
      type: String,
    },
    singleJodi: {
      type: Number,
    },
    id:{
      type:Number
    }
});

const SattaKing = mongoose.connection.useDb('SattaKing');
const SingleJodi = SattaKing.model("SingleJodi", singleJodi)

module.exports = SingleJodi;
