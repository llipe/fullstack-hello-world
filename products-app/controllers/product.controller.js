var Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function(err, product) {
        if(err) { 
            console.log(err);
            return next(err); }
        res.send(product);
    });
};

exports.product_create = function (req, res) {
    var product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            sku: req.body.sku
        }
    );

    product.save(function(err, resp) {
        if (err) {
          console.log(err);
          res.send({
            message: 'Product couldn\'t be saved'
          });
        } else {
          res.send({
            message: 'Product saved'
          });
        }
    });
};

exports.product_update = function(req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, product) {
        if(err) { return next(err); }
        res.send({
            message: 'Product updated'
        });
    });
};

exports.product_delete = function(req, res) {
    Product.deleteOne({ _id: req.params.id }, function(err) {
        if(err) { return next(err); }
        res.send({
            message: 'Product deleted'
        })
    });
};

exports.product_list = function(req, res) {
    Product.find({}, function(err, products) {
        if(err) { return next(err); }
        res.json(products);
    });
};