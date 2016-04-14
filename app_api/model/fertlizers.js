var mongoose = require('mongoose');

/*var openingTimeSchema = new mongoose.Schema({
    days: {type: String, required: true},
    opening: String,
    closing: String,
    closed: {type: Boolean, required: true}
});

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number, required: true, min: 0, max: 5},
    reviewText: String,
    createdOn: {type: Date, "default": Date.now}
});*/

var fertilizerSchema = new mongoose.Schema({
    name: {type:String,required: true,unique: true},
    manufacturer: String,
    fertType: String,
    marketPrice: Number,
    subsidyPrice: Number,
    expiryDate: Date
});

module.exports = mongoose.model('Fertilizer', fertilizerSchema);