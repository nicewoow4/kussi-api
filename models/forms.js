
const mongoose = require("mongoose")
const formSchema = mongoose.Schema({


    stdidcard: {
        type: Number,
        require: true
    },
    grade: {
        type: String,
        require: true
    },
    room: {
        type: Number,
        require: true
    },
    schoolyear: {
        type: Number,
        require: true
    },
    term: {
        type: Number,
        require: true
    },
    schoolid: {
        type: Number,
        require: true
    },
    adhd1_dscore: {
        type: Number,
        require: true
    },
    adhd1_tscore: {
        type: Number,
        require: true
    },
    adhd1_group: {
        type: Number,
        require: true
    },
    adhd2_dscore: {
        type: Number,
        require: true
    },
    adhd2_tscore: {
        type: Number,
        require: true
    },
    adhd2_group: {
        type: Number,
        require: true
    },
    sumadhd_dscore: {
        type: Number,
        require: true
    },
    sumadhd_tscore: {
        type: Number,
        require: true
    },
    sumadhd_group: {
        type: Number,
        require: true
    },
    ldr_dscore: {
        type: Number,
        require: true
    },
    ldr_tscore: {
        type: Number,
        require: true
    },
    ldr_group: {
        type: Number,
        require: true
    },
    ldw_dscore: {
        type: Number,
        require: true
    },
    ldw_tscore: {
        type: Number,
        require: true
    },
    ldw_group: {
        type: Number,
        require: true
    },
    ldm_dscore: {
        type: Number,
        require: true
    },
    ldm_tscore: {
        type: Number,
        require: true
    },
    ldm_group: {
        type: Number,
        require: true
    },
    autism_dscore: {
        type: Number,
        require: true
    },
    autism_tscore: {
        type: Number,
        require: true
    },
    autism_group: {
        type: Number,
        require: true
    },
    comment: {
        type: String,
        require: true
    },


})

module.exports = mongoose.model("Form", formSchema)