const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const monthlyChart = new Schema({
    date: {
      type: Date,
    },
    game1: {
      type: String,
    },
    game2: {
      type: String,
    },
    game3: {
      type: String,
    },
    game4: {
      type: String,
    }
});

const SattaKing = mongoose.connection.useDb('SattaKing');
const MonthlyChart = SattaKing.model("MonthlyChart", monthlyChart)

module.exports = MonthlyChart;
