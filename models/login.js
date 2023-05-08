const mongoose = require("mongoose")
const loginSchema = mongoose.Schema({


    tidcard: {
        type: Number,
        require: true,

    }
    ,
    username: {
        type: String,
        require: true,

    }
    ,
    password: {
        type: String,
        require: true,

    }
    ,
    nametitle: {
        type: String,
        require: true,

    }
    ,
    t_fname: {
        type: String,
        require: true,

    }
    ,
    t_lname: {
        type: String,
        require: true,

    }
    ,
    schoolid: {
        type: Number,
        require: true,

    }
    ,
    schoolname: {
        type: String,
        require: true,

    }
    ,
    role: {
        type: String,
        require: true,

    }
    ,
},


);

module.exports = mongoose.model("login", loginSchema)