const SingleJodi = require('../models/SingleJodiModel');

exports.getSingleJodi = async(req, res)=>{
    const response = await SingleJodi.find({});
    res.status(200).send({
        SigleJodi:response
    })
}

exports.setSingleJodi=(req, res)=>{
    const daily = new SingleJodi({
        khabarName:"Deshwar",
        singleJodi:45,
        id:1
    });
    daily.save();
    res.send("About this wiki1");
}