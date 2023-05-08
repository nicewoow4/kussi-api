
const mongoose = require("mongoose")
const kussiinfoSchema = mongoose.Schema({

    section1: {
        tname: {
            type: String,
            require: true,
        }
        ,
        subject: {
            type: String,
            require: true,

        }
        ,
        tname2: {
            type: String,
            require: true,
        }
        ,
        subject2: {
            type: String,
            require: true,

        }
        ,
        school: {
            type: String,
            require: true,

        },
        schoolid: {
            type: Number,
            require: true,

        },
        district: {
            type: String,
            require: true,

        },
        province: {
            type: String,
            require: true,

        },
        date_now: {
            type: Date,
            require: true,

        },
        schoolyear: {
            type: Number,
            require: true,

        },
        term: {
            type: Number,
            require: true,

        },
    },
    section2: {
        stdidcard : {
            type: Number,
            require: true,
        },
        riskhistory: {
            type: String,
            require: true,
        }

    },
    section3: {
        stdage: {
            type: Number,
            require: true,
        },
        date_now2: {
            type: Date,
            require: true,

        },
    }


},
    /*
    {   //ใช้ปิด __V
        collection: 'students',
        versionKey: false //here
    }
    */

);

module.exports = mongoose.model("kussi_infomation", kussiinfoSchema)