const mongoose = require('mongoose');

const Representative = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        
    },
    lastName:{
        type:String,
        required:true,  
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:String,
        unique:true,
    },
    address1:{
        type:String,
        required:true,
    },
    address2:{
        type:String,
        required:true,
    },
},
{timestamps: true}
)

module.exports = mongoose.model("Representative" , Representative)