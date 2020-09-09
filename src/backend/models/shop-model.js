const mongoose = require('mongoose');

var shopSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    shopName : {
        type : String,
        required : true
    },

    status : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
})

module.exports = mongoose.model('shop',shopSchema);