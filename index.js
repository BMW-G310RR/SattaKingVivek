const express = require('express')
// const https = require('https');
// var PaytmChecksum = require("./PaytmChecksum");
require('dotenv').config()
const app = express()
const SattaRouter = require('./SattaKing/routes');
const KalyanRouter = require('./KalyanKing/routes');
require('./DB');
// var paytmParams = {};
// paytmParams["subwalletGuid"]      = "28054249-XXXX-XXXX-af8f-fa163e429e83";
// paytmParams["orderId"]            = "ORDERID_98765";
// paytmParams["beneficiaryPhoneNo"] = "5555566666";
// paytmParams["amount"]             = "1.00";
// var post_data = JSON.stringify(paytmParams);
// PaytmChecksum.generateSignature(post_data, "tVZWf_jxj8@T2Ux&").then(function(checksum){

//     var x_mid      = "FaBcBE98772238680128";
//     var x_checksum = checksum;

//     var options = {

//         /* for Staging */
//         hostname: 'staging-dashboard.paytm.com',

//         /* for Production */
//         // hostname: 'dashboard.paytm.com',

//         /* Solutions offered are: food, gift, gratification, loyalty, allowance, communication */
//         path: '/bpay/api/v1/disburse/order/wallet/gift',
//         port: 443,
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'x-mid': x_mid,
//             'x-checksum': x_checksum,
//             'Content-Length': post_data.length
//         }
//     };

//     var response = "";
//     var post_req = https.request(options, function(post_res) {
//         post_res.on('data', function (chunk) {
//             response += chunk;
//         });

//         post_res.on('end', function(){
//             console.log('Response: ', response);
//         });
//     });

//     post_req.write(post_data);
//     post_req.end();
// });
app.use(SattaRouter);
app.use(KalyanRouter);
app.listen(process.env.PORT || 3000)