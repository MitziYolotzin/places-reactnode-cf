const Place = require('../models/Place');

//middleware
function find(req, res, next) {
    Place.findById(req.params.id)
        .then(place => {
            req.place = place;
            next();
        })
        .catch(err => {
            next(err);
        });
}

function index(req, res) {
    //all places
    //if req query params return false, then pass to next
    //if req query params return true, then send key to page
    Place.paginate({}, { page: req.query.page || 1, limit: 8, sort: { '_id': -1 } })
        .then(docs => {
            res.json(docs);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })

}

function create(req, res) {
    //create new places
    Place.create({
            title: req.body.title,
            description: req.body.description,
            acceptsCreditCard: req.body.acceptsCreditCard,
            openHour: req.body.openHour,
            closeHour: req.body.closeHour
        })
        .then(doc => {
            res.json(doc)
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
}

function show(req, res) {
    //individual search
    res.json(req.place);

}

function update(req, res) {
    //update new resource

    let attributes = ['title', 'description', 'acceptsCreditCard', 'openHour', 'closeHour'];
    let placeParams = {};
    attributes.forEach(attr => {
        if (Object.prototype.hasOwnProperty.call(req.body, attr))
            placeParams[attr] = req.body[attr];
    });
    //properties of placeparamas, and copy to obj req.place
    req.place = Object.assign(req.place, placeParams);


    req.place.save().then(doc => {
            res.json(doc);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
}

function destroy(req, res) {
    //delete resources
    req.place.remove()
        .then(doc => {
            res.json({})
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })

}

module.exports = { index, show, create, destroy, update, find };