const express = require('express')
require('dotenv').config()
const app = express()
const SattaRouter = require('./SattaKing/routes');
const KalyanRouter = require('./KalyanKing/routes');
require('./DB');
app.use(SattaRouter);
app.use(KalyanRouter);
app.listen(process.env.PORT || 3000)