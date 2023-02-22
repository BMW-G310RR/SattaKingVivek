const DailyResult = require('../models/DailyResultModel');

exports.getDailyResult = async(req, res)=>{
    const response = await DailyResult.find({});
    res.status(200).send({
        DailyResult:response
    })
}

exports.setDailyResult=(req, res)=>{
    const daily = new DailyResult({
        kabharName:"SRIDEVI MORNING",
        khabarTop:0,
        openTime:'09:30 AM',
        closeTime:'10:30 AM',
        todayKhabar:'119-13-490'
    });
    daily.save();
    res.send("About this wiki1");
}