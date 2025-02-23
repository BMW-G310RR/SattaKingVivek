const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const dailyResult = new Schema({
    kabharName: {
      type: String,
    },
    khabarTop: {
      type: Boolean,
    },
    khabarTime:{
      type:String
    },
    lastKhabar:{
      type:String
    },
    todayKhabar:{
      type:String
    },
    detail:{
      type:String
    }
});

const SattaKing = mongoose.connection.useDb('SattaKing');
const DailyResult = SattaKing.model("DailyResult", dailyResult)

module.exports = DailyResult;
