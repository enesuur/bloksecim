const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type:String,
        unique:true,
        uppercase:true,
        required:true,
    },
    key: {
        type:String,
        uppercase:true,
        required:true,
        isExpired:false,
    }
});

const User = mongoose.model('user',userSchema);
module.exports = User;