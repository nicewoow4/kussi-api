
const mongoose = require("mongoose")
const screenningSchema = mongoose.Schema({


    idcard: {
        type: Number,
        require: true,
        
    }
    ,
    risk: {
        type: String,
        require: true,

    }
   ,
}, 
/*
{   //ใช้ปิด __V
    collection: 'students',
    versionKey: false //here
}
*/

);

module.exports = mongoose.model("screenning", screenningSchema)