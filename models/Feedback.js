const mongoose = require('mongoose');

const Feedback = new mongoose.Schema({
    name:{
        type:String,
        required:true,   
    },
    email:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    area:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,  
    },
    workerid:{
        type:String,
        required:true,  
    },
    feedback:{
        type:String,
        required:true,  
    },
},
{timestamps: true}
)

module.exports = mongoose.model("Feedback" , Feedback)