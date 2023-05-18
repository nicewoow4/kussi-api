const mongoose = require("mongoose")
const provinceSchema = mongoose.Schema({


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
    geography_id: {
        type: Number,
        require: true,

    }

},


);

module.exports = mongoose.model("province", provinceSchema)