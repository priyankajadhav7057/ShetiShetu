// design a schema'

const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']

    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
});

const usermodel =mongoose.model('users',userSchema);
module.exports =usermodel;