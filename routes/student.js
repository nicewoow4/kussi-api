const express = require("express")
const router = express.Router()
const {submitContact , getAllcontact , studentdata ,submitScreenning , submitInfokussi , create , singleinfomation ,studentcount, updatescore ,singleadha , excelsubmit ,studentupdate ,deletestudent ,searchFilters ,searchstd ,searchgrade ,result ,alldatascore,singleschoolyear ,sigledatascore ,singleadha2 , roomscore ,allscoreterm ,siglescore ,schoolyear} = require("../controllers/studentController")

//middleware
const { auth,adminCheck } = require("../middleware/auth");
//const {requireLogin} =require("../controllers/auth")

//login route
const {currentUser  } = require('../controllers/loginController')


router.post('/submitcontact',auth,submitContact)
router.get('/studentcontact/:schoolid',auth,getAllcontact)
//router.get('/studentcontact/:idcard',singlestudentcontact)
router.get('/studentdata/:idcard',auth,studentdata)

//screenning
router.post('/screenning/:idcard',auth,submitScreenning)

//kussi-1
router.post('/kussi/:idcard',auth,submitInfokussi)

router.post('/kussi-AAHD/:idcard',auth,create)
router.get('/kussi/:idcard',auth,singleinfomation)
router.get('/kussi/:idcard/:schoolyear/:term',auth,singleschoolyear)

//เงื่อนอัปเดทคะแนน
router.put('/kussi-AAHD/:idcard/:schoolyear/:term',auth,updatescore)
router.get('/kussi-AAHD/:idcard/:schoolyear/:term',auth,singleadha)
router.get('/kussi-AAHD/:idcard/',auth,singleadha2)

//เรียกดูข้อมูลคะแนนการบันทึกทั้งหมด
router.get('/kussi-Alldata/:schoolid',auth,alldatascore)
router.get('/kussi-score/:idcard',auth,sigledatascore)
router.get('/kussi-score/:idcard/:schoolyear/:term',auth,siglescore)

//เรียกดูข้อมูลโรงเรียนรายเทอม
router.get('/kussi-schoolyear/:schoolyear/:term/:schoolid',auth,schoolyear)


//เรียกดูคะแนนเฉพาะห้อง / ระดับชั้น / โรงเรียน
router.get('/kussi-score/:grade/:room',auth,roomscore)
//เรียกดูจำนวนนักเรียนเฉพาะห้อง
router.get('/kussi-students/:grade/:room/:schoolid',auth,studentcount)
//search all yearscore
router.get('/kussi-score/:grade/:room/:schoolyear/:term/:schoolid',auth,allscoreterm)


//import student
router.post('/excelsubmit',auth,excelsubmit)
router.put('/updatestudent/:idcard',auth,studentupdate)
router.delete('/deletedata/:idcard',auth,deletestudent)

//search
router.post('/search/filters',auth,searchFilters)
router.get('/search/:grade/:room/:schoolid',auth, searchstd)
router.get('/search/:grade/:schoolid',auth,searchgrade)

//score
router.get('/result',auth,result)


//login check token
router.post('/current-user',auth,currentUser)
router.post("/current-admin", auth,adminCheck, currentUser)
//router.get('/userdata',userdata)

module.exports=router