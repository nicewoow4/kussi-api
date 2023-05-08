const mongoose = require("mongoose")
const studentdataSchema = mongoose.Schema({


    stdidcard: {
        type: Number,
        require: true,
        
    },

    sex: {
        type: String,
        require: true,
        
    },
    f_name: {
        type: String,
        require: true,
        

    },
    l_name: {
        type: String,
        require: true,
        

    },
    birthday: {
        type: Date,
        require: true,
    },
    ethnicity: {
        type: String,
        require: true,

    },
    nationality: {
        type: String,
        require: true,

    },
    religion: {
        type: String,
        require: true,

    },
    parent: {
        type: String,
        require: true,

    },
    relevant: {
        type: String,
        require: true,

    },
    stdid: {
        type: Number,
        require: true,

    },
    term: {
        type: Number,
        require: true,

    },
    grade: {
        type: String,
        require: true,
        

    },
    room: {
        type: Number,
        require: true,
        
    },
    no: {
        type: Number,
        require: true,
        
    },

    schoolid: {
        type: Number,
        require: true,

    },
    thainame: {
        type: String,
        require: true,
    
    },
    engname: {
        type: String,
        require: true,

    },
    address: {
        type: String,
        require: true,
        
    },
    province: {
        type: String,
        require: true,
        
    },
    amphure: {
        type: String,
        require: true,
        
    },
    district: {
        type: String,
        require: true,
        
    },
    zipcode: {
        type: Number,
        require: true,

    },
    geography: {
        type: String,
        require: true,

    },

},
    /*
    {   //ใช้ปิด __V
        collection: 'students',
        versionKey: false //here
    }
    */

);

module.exports = mongoose.model("studentdatas", studentdataSchema)