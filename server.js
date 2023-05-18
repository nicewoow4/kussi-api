const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const studentRoute = require("./routes/student")
const loginRoute = require("./routes/login")
const teacher =require("./routes/teacher")
const thailand=require("./routes/thailand")
//mongoose.set('strictQuery', false)
const app = express()


//connect cloud database

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: false
})
    .then(() => console.log("เชื่อมต่อเรียบร้อย"))
    .catch((err) => console.log(err))



//middleware คือส่วนที่ทำงานกับ express คือการใช้งานคำสั่งuse 
app.use(express.json()) //กำหนดให้ server ให้บริการเกี่ยวกับ rest api 
app.use(cors())
app.use(morgan("dev"))

//route

app.use('/api', studentRoute)
app.use('/api',loginRoute)
app.use('/api',teacher)
app.use('/api',thailand)
{/*
app.get("*",(req,res)=>{
    res.jason({
        data:"Hello world"
    })
})
*/}

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`start server in port ${port}`))




//สร้าง apiจังหวัด
/*
app.get('/province', (req, res) => {
    res.status(200).json(province)
})


app.get('/province/:id', (req, res) => {
    const { id } = req.params
    const id1 = (Number(id))
    const dataProvince = province.filter(e => e.id === id1);
    res.status(200).json(dataProvince)
})

  */
/*
app.get('/province/:id/amphure', (req, res) => {
    const { id } = req.params
    const id2 = (Number(id))
    const dataAmphure = amphure.filter(e => e.province_id === id2);
    res.status(200).json(dataAmphure)

})
*/
/*
app.get('/province/amphure/:id', (req, res) => {
    const { id } = req.params
    const id2 = (Number(id))
    const dataDistrict = district.filter(e => e.amphure_id === id2);
    res.status(200).json(dataDistrict)

})
*/
