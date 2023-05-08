const express = require("express")
const router = express.Router()
const {register , login ,userdata ,changepassword} = require("../controllers/loginController")



router.post('/register',register)
router.post('/login',login)

router.put('/chngepassword/:tidcard',changepassword)
router.post('/userdata',userdata)
module.exports=router