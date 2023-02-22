const SingleJodi = require('../models/SingleJodiModel');

exports.getDailyResult = async(req, res)=>{
    const response = await SingleJodi.find({});
    res.status(200).send({
        DailyResult:response
    })
}

exports.setDailyResult=(req, res)=>{
    const daily = new SingleJodi({
        kabharName:"SRIDEVI MORNING",
        khabarTop:0,
        openTime:'09:30 AM',
        closeTime:'10:30 AM',
        todayKhabar:'119-13-490'
    });
    daily.save();
    res.send("About this wiki1");
}