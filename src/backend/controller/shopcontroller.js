const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//creating a router
//const Shop = mongoose.model('Shop',)

router.get('/',(req,res) => {
    console.log("hello")
    //res.render("hello")
});

module.exports = router;