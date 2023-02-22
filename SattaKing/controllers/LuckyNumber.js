const LuckyNumber = require('../models/LuckyNumberModel');

exports.getLuckyNumber = async(req, res)=>{
    const response = await LuckyNumber.find({});
    res.status(200).send({
        LuckyNumber:response
    })
}

exports.setLuckyNumber=(req, res)=>{
    const daily = new LuckyNumber({
        "luckyTitle": "सिंगल जोड़ी",
        "luckyBody": "29 - 19",
        "isLinkButton": false,
        "buttonLink": "https://play.google.com/store/apps/details?id=com.blackpirates.sattaking",
        "buttonTxt": "रेटिंग करे"
    });
    daily.save();
    res.send("About this wiki1");
}