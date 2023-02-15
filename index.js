const express = require('express')
require('dotenv').config()
const app = express()
const router = require('./SattaKing/routes');
require('./DB');
app.use(router);
app.listen(process.env.PORT || 3000)