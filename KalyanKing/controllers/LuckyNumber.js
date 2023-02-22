const LuckyNumber = require('../models/LuckyNumberModel');

exports.getLuckyNumber = async(req, res)=>{
    const response = await LuckyNumber.find({});
    res.status(200).send({
        LuckyNumber:response
    })
}

exports.setLuckyNumber=(req, res)=>{
    const daily = new LuckyNumber({
        name:"Milan MORNING",
        mainColor:'#000',
        isButton:true,
        buttonText:'Click Me',
        buttonLink:'https://www.google.com/',
        color:'#FFF',
        bodyText:'453-34-293'
    });
    daily.save();
    res.send("About this wiki1");
}