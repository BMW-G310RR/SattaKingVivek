const MonthlyChart = require('../models/MonthlyChartModel');

exports.getLuckyNumber = async(req, res)=>{
    const response = await MonthlyChart.find({});
    res.status(200).send({
        LuckyNumber:response
    })
}

exports.setLuckyNumber=(req, res)=>{
    const daily = new MonthlyChart({
        "date": Date.now(),
        "game1": "ONe",
        "game2": false,
        "game3": "https://play.google.com/store/apps/details?id=com.blackpirates.sattaking",
        "game4": "रेटिंग करे"
    });
    daily.save();
    res.send("About this wiki1");
}