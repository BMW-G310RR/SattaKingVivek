const DailyResult = require('../models/DailyResultModel');

exports.getDailyResult = async(req, res)=>{
    const response = await DailyResult.find({});
    res.status(200).send({
        DailyResult:response
    })
}

exports.setDailyResult=(req, res)=>{
    const daily = new DailyResult({
        kabharName:"Gali",
        khabarTop:0,
        khabarTime:'11:15 PM',
        lastKhabar:'49',
        todayKhabar:'--'
    });
    daily.save();
    res.send("About this wiki1");
}