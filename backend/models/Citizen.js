const mongoose = require('mongoose');
const citizenSchema = new mongoose.Schema({
    citizenNumber: {
        type:String,
        unique:true,
        uppercase:true,
        required:true,
    },
    key: {
        type:String,
        uppercase:true,
        required:true,
    }
});

const Citizen = mongoose.model('citizen',citizenSchema);
module.exports = Citizen;