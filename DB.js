const mongoose = require('mongoose');
require('dotenv').config()

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB)
  .then(() => console.log('Connected!'));