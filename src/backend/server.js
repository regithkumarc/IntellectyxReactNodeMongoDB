const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const application = express();
const port = process.env.PORT || 3002;

application.use(cors());
application.use(express.json());

//const url = "mongodb://localhost:27017/shopinfo/shop";
const uri = process.env.ATLAS_URI;
console.log(uri)
mongoose.connect(uri,{useNewUrlParser : true,useCreateIndex : true});

const connection = mongoose.connection;
connection.once('open',() => {
    console.log("mongo db connection established successfully");
})

const shopRouter = require('./routes/shop-routes');
application.use('/shop',shopRouter);


application.listen(port,() => {
    console.log("server started : " + port)
})
