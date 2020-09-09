//require('./model/mongodb');
const express = require('express');
const application = express();
const path = require('path');
const exphb = require('express-handlebars');
const bodyParser = require('body-parser');
const shopController = require('./controller/shopcontroller')
const mongoose = require('mongoose');
//Link
//const Shop = mongoose.model('Shop');

application.use(bodyParser.urlencoded({
    extended : true
}));
application.use(bodyParser.json());

application.listen("3002",() => {
    console.log("Server Started");
})

application.use('/Shop',shopController)


var mongoclient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/shopinfo";
mongoclient.connect(url,function(err,db){
    if(err) throw err
    console.log("Database Created");
    db.close();
})

application.get("/",(req,res) => {
    res.send("hello");
});

application.get('/getAllShop',(req,res) => {
    Shop.find((err,docs) => {
        if(!err)
            console.log(docs)
        else
            console.log("error")
    })
})

application.post("/addShop",(req,res) => {
    var shop = new Shop();
    shop.shopId = 1;
    shop.productName = req.body.productName;
    shop.shopName = req.body.shopName;
    shop.status = req.body.status;

    shop.save((err,doc) => {
        if(!err)
            console.log("Added Successful")
        else    
            console.log("Error")
    })
})

// application.get("/getDummy",async (req,res) => {
//     const productSchema = await product.find();
//     res.send(productSchema);
// })

// application.post("/addProduct",(req,res) => {
//     res.send()
// })