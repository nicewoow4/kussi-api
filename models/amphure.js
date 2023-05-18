const mongoose = require("mongoose")
const amphureSchema = mongoose.Schema({


    id: {
        type: Number,
        require: true,

    }
    ,
    name_th: {
        type: String,
        require: true,

    }
    ,
    name_en: {
        type: String,
        require: true,

    }
    ,
    name_en: {
        type: String,
        require: true,

    }
    ,
    province_id: {
        type: Number,
        require: true,

    }

},


);

module.exports = mongoose.model("amphure", amphureSchema)