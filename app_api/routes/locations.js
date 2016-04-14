var express = require('express');
var jwt = require('express-jwt');

var auth = jwt({
    secret: "mysecret",
    userProperty: 'payload'
});

var router = express.Router();
var ctrlFertilizers = require('../controllers/fertilizers');
var ctrlAuth = require('../controllers/authentication');

//locations
router.post('/add', ctrlFertilizers.fertilizerCreate);
router.get('/getFert/:fertName', ctrlFertilizers.fertilizerReadOne);

/*router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);*/

/*//reviews
router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);*/

//login register
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;

