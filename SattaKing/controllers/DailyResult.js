const DailyResult = require('../models/DailyResultModel');

exports.getDailyResult = async(req, res)=>{
    const response = await DailyResult.findOne({});
    res.status(200).send({
        DailyResult:response
    })
}

exports.setDailyResult=(req, res)=>{
    const daily = new DailyResult({
        kabharName:"harjinder",
        khabarTop:1,
        openTime:'10:00 PM',
        closeTime:'11:00 AM',
        todayKhabar:'124-54-244'
    });
    daily.save();
    res.send("About this wiki1");
}