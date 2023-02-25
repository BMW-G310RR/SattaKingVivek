const MonthlyChart = require('../models/MonthlyChartModel');

exports.getMonthlyChart = async(req, res)=>{
    const response = await MonthlyChart.find({});
    res.status(200).send({
        LuckyNumber:response
    })
}

exports.setMonthlyChart=(req, res)=>{
    // const daily = new MonthlyChart({
    //     "date": Date.now(),
    //     "game1": "Deshawar",
    //     "game2": "Gali",
    //     "game3": "Gaziabad",
    //     "game4": "Faridabad"
    // });
    const daily = new MonthlyChart({
        "date": Date.now(),
        "game1": "56",
        "game2": "49",
        "game3": "29",
        "game4": "48"
    });
    daily.save();
    res.send("About this wiki1");
}