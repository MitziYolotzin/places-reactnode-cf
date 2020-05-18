const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//first schema and then model
//schema-info of objects to save in db, validations, virtuals...

let placeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    acceptsCreditCard: {
        type: Boolean,
        default: false
    },
    coverImage: String,
    avatarImage: String,
    openHour: Number,
    closeHour: Number
});

placeSchema.plugin(mongoosePaginate);

let Place = mongoose.model('Place', placeSchema);

module.exports = Place;