const express = require('express');

//models
const Place = require('../models/Place');

let router = express.Router();

const placesController = require('../controllers/PlacesController');

router.route('/')
    .get(placesController.index)
    .post(placesController.create)

router.route('/:id')
    .get(placesController.show)
    .put(placesController.update)
    .delete(placesController.destroy)

module.exports = router;