//ดึงข้อมูลรายชื่อนักเรียนทั้งหมดทั้งหมด โดยอาศัยmodel studentmodel
const provincemodel = require("../models/province")
const amphuremodel = require("../models/amphure")
const tambonmodel = require("../models/tambon")

exports.province = (req, res) => {
    provincemodel.find({}).exec((err, province) => {
        res.json(province)
    })
}

exports.provinceid = (req, res) => {
    const { id } = req.params
    provincemodel.find({id:id}).exec((err, provinceid) => {
        res.json(provinceid)
    })
}

exports.amphure = (req, res) => {
    const { id } = req.params
    amphuremodel.find({province_id:id}).exec((err, amphure) => {
        res.json(amphure)
    })
}

exports.tambon = (req, res) => {
    const { id } = req.params
    tambonmodel.find({amphure_id:id}).exec((err, tambon) => {
        res.json(tambon)
    })
}