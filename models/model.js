const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    breed: {
        type: String,
        required: true,
    },
    packaging: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
const Alimento = mongoose.model('Alimento', storeSchema);

module.exports = {Alimento}