const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    alimentoComprado: {
        type: String,
        required: true,
    },
    
    phone: {
        type : Number,
        required: true,
    }
});
const Cliente = mongoose.model('Cliente', storeSchema);

module.exports = {Cliente}