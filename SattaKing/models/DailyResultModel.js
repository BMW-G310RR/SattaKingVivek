const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const dailyResult = new Schema({
    kabharName: {
      type: String,
    },
    khabarTop: {
      type: Boolean,
    },
    openTime:{
      type:String
    },
    closeTime:{
      type:String
    },
    todayKhabar:{
      type:String
    }
});

const DailyResult = mongoose.model("DailyResult", dailyResult)

module.exports = DailyResult;
