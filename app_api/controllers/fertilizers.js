var mongoose = require('mongoose');
var Fert = mongoose.model('Fertilizer');
var express = require('express');
var router = express.Router();
var qr = require('qr-image');
var fs = require('fs');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.locationsListByDistance = function(req,res){
    sendJsonResponse(res, 200, {"status" : "success"});
};



module.exports.fertilizerReadOne = function(req,res){
    if(req.params && req.params.fertName){
        console.log(req.params.fertName);
        Fert.findOne({ "name": req.params.fertName },function(err,fertDetails){
            if (err) {
                sendJsonResponse(res,404,{"message":"An error occured"});
                return;
            }

            sendJsonResponse(res,200,{
                /*"fertName":fertDetails.name,*/
                "marketPrice":fertDetails.marketPrice,
                "subsidyPric":fertDetails.subsidyPrice,
                "manufacturer":fertDetails.manufacturer,
                "expiryDate":fertDetails.expiryDate
            });

        });
    }
    else{
        sendJsonResponse(res, 404, {"message": "No locationid in request"});
    }
};

module.exports.locationsUpdateOne = function(req,res){
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.fertilizerCreate = function(req,res){
    if(req.body.manufacturer || req.body.fertName || req.body.fertType){
        console.log(req.body.fertName);
        var fert = new Fert();
        fert.name = req.body.fertName;
        fert.manufacturer = req.body.manufacturer;
        fert.fertType = req.body.fertType;
        fert.marketPrice = req.body.marketPrice;
        fert.subsidyPrice = req.body.subsidyPrice;
        fert.expiryDate = req.body.expiryDate;

        sendJsonResponse(res, 200, fert);

        /*fert.save(function (err){
            if (err){
                sendJsonResponse(res, 200, {"status" : "success"});
            }
            else{
                var file_name = Date.now();
                var output = fs.createWriteStream("/images/"+file_name + '.png');
                var code = qr.image(req.body.fertName, {type: 'png' });
                code.pipe(output);

                res.render('success',{title:'FertSure',fileName:file_name+".png"});
            }
        });*/
    }
    else{
        sendJsonResponse(res, 400, {"status" : "No data"});
    }
};

