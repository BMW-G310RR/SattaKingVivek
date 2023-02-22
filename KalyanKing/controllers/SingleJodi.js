const SingleJodi = require('../models/SingleJodiModel');

exports.getSingleJodi = async(req, res)=>{
    const response = await SingleJodi.find({});
    res.status(200).send({
        SingleJodi:response
    })
}

exports.setSingleJodi=(req, res)=>{
    const daily = new SingleJodi({
        newsName:"SRIDEVI MORNING",
        color:"#000",
        backgroundColor:'#FFF',
        number:87
    });
    daily.save();
    res.send("About this wiki1");
}