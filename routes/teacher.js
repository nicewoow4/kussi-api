const express = require("express")
const router = express.Router()
const {loginUser} = require("../controllers/teacherController")


router.get('/teacheruser/:username',loginUser)



module.exports=router
