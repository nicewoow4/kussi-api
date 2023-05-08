//ติดต่อDB ดำเนินการกับdb


const studentmodel = require("../models/studentdata")

exports.submitContact = (req, res) => {
    const { stdidcard, studentdata, sex, f_name, l_name, birthday, ethnicity, nationality, religion, parent, relevant, stdid, term, grade, room, no, school_data, schoolid, thainame, engname, address, province, amphure, district, zipcode, geography } = req.body

    switch (true) {
        case !stdidcard:
            return res.status(400).json({ error: "กรุณากรอกเลขบัตรประชาชน" })
            break
    }


    //บันทึกข้อมูล 
    studentmodel.create({ stdidcard, studentdata, sex, f_name, l_name, birthday, ethnicity, nationality, religion, parent, relevant, stdid, term, grade, room, no, school_data, schoolid, thainame, engname, address, province, amphure, district, zipcode, geography }, (err, student) => {
        if (err) {
            res.status(400).json({ error: err })
        }
        res.json(student)
    })
}

/////////////////////////
//ดึงข้อมูลรายชื่อนักเรียนทั้งหมดทั้งหมด โดยอาศัยmodel studentmodel
exports.getAllcontact = (req, res) => {
    const { schoolid } = req.params
    studentmodel.find({ schoolid: schoolid }).exec((err, students) => {
        res.json(students)
    })
}

/*
exports.getAllcontact = (req, res) => {
    studentmodel.aggregate([{$lookup:{from:"form_adhds",localField:"stdidcard",foreignField:"stdidcard",as:"result"}}]).exec((err, students) => {
        res.json(students)
    })
}
*/
//ดึงข้อมูลรายชื่อนักเรียนมาแสดงรายการเดียว


exports.studentdata = (req, res) => {
    const { idcard } = req.params
    studentmodel.findOne({ stdidcard: idcard }).exec((err, student) => {
        res.json(student)
    })
}

//screenning
const screenningmodel = require("../models/screenning")

exports.submitScreenning = (req, res) => {
    const { idcard, risk } = req.body

    switch (true) {
        case !idcard:
            return res.status(400).json({ error: "กรุณากรอกรหัสบัตรประชาชน" })
            break;
        case !risk:
            return res.status(400).json({ error: "กรุณาตอบแบบสังเกตอาการเบื้องต้น" })
            break;
    }


    //บันทึกข้อมูล 
    screenningmodel.create({ idcard, risk }, (err, screenning) => {
        if (err) {
            res.status(400).json({ error: "คุณได้ตอบแบบทดสอบสังเกตอาการเบื้องต้นไปแล้ว" })
        }
        res.json(screenning)

    })
}

//kussi
const kussiinfomodel = require("../models/ksuui_infomation")

exports.submitInfokussi = (req, res) => {
    const { section1, tname, subject, tname2, subject2, school, district, province, date_now, schoolyear, term, section2, stdidcard, riskhistory, section3, stdage, date_now2 } = req.body

    switch (true) {
        case !section2.riskhistory:
            return res.status(400).json({ error: "กรุณาเลือกว่านักเรียนเคยได้รับการวินิจฉัยจากแพทย์ว่ามีภาวะผิดปกติหรือไม่" })
            break;
    }


    //บันทึกข้อมูล 
    kussiinfomodel.create({ section1, tname, subject, tname2, subject2, school, district, province, date_now, schoolyear, term, section2, stdidcard, riskhistory, section3, stdage, date_now2 }, (err, kussiinfomation) => {
        if (err) {
            res.status(400).json({ error: "ผิดพลาด" })
        }
        res.json(kussiinfomation)

    })
}


//kussi-form

const Forms = require("../models/forms")
//create บันทึกข้อมูล
exports.create = (req, res) => {
    const { grade, room, schoolyear, schoolid, term, adhd1_dscore, adhd1_tscore, adhd1_group, stdidcard, adhd2_dscore, adhd2_tscore, adhd2_group, sumadhd_dscore, sumadhd_tscore, sumadhd_group, ldr_dscore, ldr_tscore, ldr_group, ldw_dscore, ldw_tscore, ldw_group, ldm_dscore, ldm_tscore, ldm_group, autism_dscore, autism_tscore, autism_group, comment } = req.body
    //const {score ,adhd1,adhd2,sumadhd,ldr,ldm,ldw,autism,adhd1_dscore, adhd1_tscore, adhd1_group, stdidcard ,  adhd2_dscore ,adhd2_tscore ,adhd2_group , sumadhd_dscore ,sumadhd_tscore ,sumadhd_group,ldr_dscore,ldr_tscore,ldr_group,ldw_dscore,ldw_tscore,ldw_group,ldm_dscore,ldm_tscore,ldm_group,autism_dscore,autism_tscore,autism_group,comment} = req.body


    switch (true) {
        case !stdidcard:
            return res.status(400).json({ error: "เกิดข้อผิดพลาด" })
            break
    }
    //บันทึกข้อมูล 
    Forms.create({ grade, room, schoolyear, schoolid, term, adhd1_dscore, adhd1_tscore, adhd1_group, stdidcard, adhd2_dscore, adhd2_tscore, adhd2_group, sumadhd_dscore, sumadhd_tscore, sumadhd_group, ldr_dscore, ldr_tscore, ldr_group, ldw_dscore, ldw_tscore, ldw_group, ldm_dscore, ldm_tscore, ldm_group, autism_dscore, autism_tscore, autism_group, comment }, (err, form) => {
        if (err) {
            res.status(400).json({ error: err })
        }
        res.json(form)
    })
}





//ดึงข้อมูลรายชื่อนักเรียนมาแสดงรายการเดียว
exports.singleinfomation = (req, res) => {
    const { idcard } = req.params
    kussiinfomodel.findOne({ 'section2.stdidcard': idcard }).exec((err, infomation) => {
        res.json(infomation)
    })
}

exports.singleschoolyear = (req, res) => {
    const { idcard } = req.params
    const { schoolyear } = req.params
    const { term } = req.params
    kussiinfomodel.findOne({ $and: [{ 'section2.stdidcard': idcard }, { 'section1.schoolyear': schoolyear }, { 'section1.term': term }] }).exec((err, infomation) => {
        res.json(infomation)
    })
}

exports.updatescore = (req, res) => {
    const { idcard } = req.params
    const { schoolyear } = req.params
    const { term } = req.params
    const { adhd2_dscore, adhd2_tscore, adhd2_group, sumadhd_dscore, sumadhd_tscore, sumadhd_group, ldr_dscore, ldr_tscore, ldr_group, ldw_dscore, ldw_tscore, ldw_group, ldm_dscore, ldm_tscore, ldm_group, autism_dscore, autism_tscore, autism_group, comment } = req.body
    Forms.findOneAndUpdate({ $and: [{ stdidcard: idcard }, { schoolyear: schoolyear }, { term: term }] }, { adhd2_dscore, adhd2_tscore, adhd2_group, sumadhd_dscore, sumadhd_tscore, sumadhd_group, ldr_dscore, ldr_tscore, ldr_group, ldw_dscore, ldw_tscore, ldw_group, ldm_dscore, ldm_tscore, ldm_group, autism_dscore, autism_tscore, autism_group, comment }).exec((err, formupdate) => {
        if (err) {
            console.log("เกิดข้อผิดพลาด")
        }
        res.json(formupdate)
        console.log(idcard, "+", schoolyear, "+", term)
    })
}


exports.singleadha = (req, res) => {
    const { idcard } = req.params
    const { schoolyear } = req.params
    const { term } = req.params
    Forms.findOne({ $and: [{ stdidcard: idcard }, { schoolyear: schoolyear }, { term: term }] }).exec((err, ADHA) => {
        res.json(ADHA)
    })
}

exports.singleadha2 = (req, res) => {
    const { idcard } = req.params
    Forms.findOne({ stdidcard: idcard }).sort({ schoolyear: -1, term: -1 }).exec((err, ADHA) => {
        res.json(ADHA)
    })
}

//ดึงข้อมูลคะแนนทั้งหมด
exports.alldatascore = (req, res) => {
    const {schoolid} = req.params
    Forms.find({schoolid:schoolid}).exec((err, alldatascore) => {
        res.json(alldatascore)
    })
}

//ดึงข้อมูลโรงเรียน รายปี / เทอม
exports.schoolyear = (req, res) => {
    const { schoolyear, term, schoolid } = req.params
    Forms.find({ $and: [{ schoolyear: schoolyear }, { term: term }, { schoolid: schoolid }] }).exec((err, schoolyear) => {
        res.json(schoolyear)
    })
}


//ดึงข้อมูลคะแนนนักเรียนคนเดียว
exports.sigledatascore = (req, res) => {
    const { idcard } = req.params
    Forms.find({ stdidcard: idcard }).exec((err, sigledatascore) => {
        res.json(sigledatascore)
    })
}


exports.siglescore = (req, res) => {
    const { idcard, schoolyear, term } = req.params
    Forms.findOne({ $and: [{ stdidcard: idcard }, { schoolyear: schoolyear }, { term: term }] }).exec((err, siglescore) => {
        res.json(siglescore)
    })
}
/*
////////
const excelSchema = require("../models/excelform")
exports.excelsubmit = (req, res) => {
   // const [{ idcard, f_name, l_name, sex }] = req.body
   
    //บันทึกข้อมูล 
    excelSchema.insertMany((req.body), (err, exceldata) => {
        if (err) {
            res.status(400).json({ error: err })
            console.log("เกิดข้อผิดพลาด")
        }
        res.json(exceldata)
    })
}
*/
//////// 
const studentdataSchema = require("../models/studentdata")
exports.excelsubmit = (req, res) => {
    // const [{ idcard, f_name, l_name, sex }] = req.body

    //บันทึกข้อมูล 
    studentdataSchema.insertMany((req.body), (err, exceldata) => {
        if (err) {
            res.status(400).json({ error: err })
            console.log("เกิดข้อผิดพลาด")
        }
        res.json(exceldata)
    })
}


//update student data
exports.studentupdate = (req, res) => {
    const { idcard } = req.params
    const { stdidcard, sex, f_name, l_name, birthday, ethnicity, nationality, religion, parent, relevant, stdid, term, grade, room, no, schoolid, thainame, engname, address, province, amphure, district, zipcode, geography } = req.body

    studentdataSchema.findOneAndUpdate({ stdidcard: idcard }, { stdidcard, sex, f_name, l_name, birthday, ethnicity, nationality, religion, parent, relevant, stdid, term, grade, room, no, schoolid, thainame, engname, address, province, amphure, district, zipcode, geography }).exec((err, studentupdate) => {

        if (err) {
            console.log("เกิดข้อผิดพลาด")
            console.log(err)
        }
        res.json(studentupdate)
    })
    // console.log(idcard)
    //console.log(req.body)
}


exports.deletestudent = (req, res) => {
    const { idcard } = req.params

    studentdataSchema.findOneAndRemove({ stdidcard: idcard }).exec((err, deletedata) => {
        if (err) {
            console.log("เกิดข้อผิดพลาด")
            console.log(err)
        }
        res.json({
            message: "ลบข้อมูลนักเรียนเรียบร้อย"
        })
    })
    // console.log(idcard)
    //console.log(req.body)
}


//search ยังไม่ได้ใช้

const handleSearch = async (req, res, f_name) => {
    // ****studentdataSchema.createIndex( { f_name: "text" } ) เอาไว้setค่าค้นหาเป็นtext ใน db****
    let studentdata = await studentdataSchema.find({ $text: { $search: f_name } })
    console.log(studentdata)
    res.send(studentdata)
}
const handleGrade = async (req, res, grade) => {
    let studentdata = await studentdataSchema.find({ grade })
    console.log(studentdata)
    res.send(studentdata)
}


exports.searchFilters = async (req, res) => {
    const { f_name, grade } = req.body
    if (f_name) {
        console.log("f_name", f_name)
        await handleSearch(req, res, f_name)
    }

    //ค้นหาด้วยระดับชั้น
    if (grade) {
        console.log("grade", grade)
        await handleGrade(req, res, grade)
    }
}

/*
exports.searchFilters = async (req, res) => {
    const { grade } = req.body
    studentdataSchema.find({ $text: { $search:grade} }).exec((err, studentdata2) => {
        if (err) {
            console.log("เกิดข้อผิดพลาด")
            console.log(err)
        }
       // console.log("grade", grade)
        res.json(studentdata2)
    })
}*/

//search by me 
exports.searchstd = (req, res) => {
    const { grade, room, schoolid } = req.params
    console.log(grade)
    console.log(room)
    studentdataSchema.find({ $and: [{ grade: grade }, { room: room }, { schoolid: schoolid }] }).exec((err, search) => {

        if (err) {
            console.log("เกิดข้อผิดพลาด")
            console.log(err)
        }
        // console.log("grade", grade)
        res.json(search)


    })
}

exports.searchgrade = (req, res) => {
    const { grade, schoolid } = req.params
    //console.log(grade)

    studentdataSchema.find({ $and: [{ grade: grade }, { schoolid: schoolid }] }).sort({ room: 1 }).exec((err, searchgrade) => {

        if (err) {
            console.log("เกิดข้อผิดพลาด")
            console.log(err)
        }
        // console.log("grade", grade)
        res.json(searchgrade)


    })
}

//show result score
const scoreSchema = require("../models/forms")
exports.result = (req, res) => {
    scoreSchema.find({}).exec((err, result) => {
        res.json(result)
    })
}

//show room score
exports.roomscore = (req, res) => {
    const { grade, room } = req.params

    scoreSchema.find({ $and: [{ grade: grade }, { room: room }] }).exec((err, roomscore) => {
        if (err) {
            console.log("เกิดข้อผิดพลาด")
            console.log(err)
        }
        // console.log("grade", grade)
        res.json(roomscore)
    })
}

// ค้นหานักเรียนในระดับชั้น
exports.studentcount = (req, res) => {
    const { grade, room, schoolid } = req.params

    studentmodel.find({ $and: [{ grade: grade }, { room: room }, { schoolid: schoolid }] }).exec((err, studentcount) => {
        if (err) {
            console.log("เกิดข้อผิดพลาด")
            console.log(err)
        }
        // console.log("grade", grade)
        res.json(studentcount)
    })
}
//all term siglestusent 
exports.allscoreterm = (req, res) => {
    const { grade, room, schoolyear, term, schoolid } = req.params

    scoreSchema.find({ $and: [{ grade: grade }, { room: room }, { schoolyear: schoolyear }, { term: term }, { schoolid: schoolid }] }).exec((err, roomscore) => {
        if (err) {
            console.log("เกิดข้อผิดพลาด")
            console.log(err)
        }
        // console.log("grade", grade)
        res.json(roomscore)
    })
}