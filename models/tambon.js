const mongoose = require("mongoose")
const tambonSchema = mongoose.Schema({


    id: {
        type: Number,
        require: true,

    }
    ,
    zip_code: {
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

    amphure_id: {
        type: Number,
        require: true,

    }

},


);

module.exports = mongoose.model("tambon", tambonSchema)