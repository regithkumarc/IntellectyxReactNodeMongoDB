const router = require('express').Router();
let shop = require('../models/shop-model');

router.route('/getAll').get((req,res) => {
    shop.find().then(shop => {
        res.json(shop);
    })
    .catch(err => res.status(400).json('Error : ' + err))
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const shopName = req.body.shopName;
    const status = req.body.status;
    const date = Date.parse(req.body.date)
    const shopDetail = new shop({
        name,
        shopName,
        status,
        date
    });

    shopDetail.save().then(() => res.json('Added Successful'))
               .catch(err => res.status(400).json('Error : ' + err))
});

module.exports = router;