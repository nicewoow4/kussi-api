const express = require("express")
const router = express.Router()
const {province ,provinceid ,amphure ,tambon} = require("../controllers/thailandController")

router.get('/province',province)
router.get('/province/:id',provinceid)
router.get('/province/:id/amphure',amphure)
router.get('/province/amphure/:id',tambon)



module.exports=router