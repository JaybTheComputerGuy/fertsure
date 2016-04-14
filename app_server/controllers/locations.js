var express = require('express');
var router = express.Router();
var qr = require('qr-image');
var fs = require('fs');



module.exports.homelist = function(req,res){
    var file_name = Date.now();
    var output = fs.createWriteStream("public/images/"+file_name + '.png');
    var code = qr.image("Amonium phosphate", { type: 'png' });
    code.pipe(output);
    fs.chmodSync("public/images/"+file_name+".png",0777);

    /*res.type('svg');
    code.pipe(res);*/

    res.render('index',{title:'FertSure',fileName:file_name+".png"});
};

module.exports.locationInfo = function(req,res){
    res.render('location-info',{
        title:'Location Info',
        pageHeader:{
            title: 'Starcups',
        },

        sidebar: {
            context: "is on Loc8r because it has accessible wifi and space to sit" +
            "down with your laptop and get some work done. : ",
            callToAction: "If you\'ve been and you like it - or if you don\'t" +
                          " please leave a review to help other people just like you."
        },

        location_details:{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {lat: 51.455041, lng: -0.9690884},
            panel_title:"Facilities",
            openingTimes:[
                {
                    day:"Monday to Friday",
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                },
                {
                    day:"Saturday",
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                },
                {
                    day:"Sunday ",
                    closed: true
                }

            ],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
             },
                {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'It was okay. Coffee wasn\'t great, but the wifi wasfast.'
                }]
        }
    });
};

module.exports.addReview = function(req,res){
    res.render('location-review-form',{
        title:'Add Review',
        pageHeader: {title: 'Review Starcups'}
    });
};