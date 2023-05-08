const mongoose = require("mongoose")

const excelSchema = mongoose.Schema({

    idcard: {
        type: Number,
        require: true,
      
    },
    f_name: {
        type: String,
        require: true,

    },
    l_name: {
        type: String,
        require: true,

    },
    sex: {
        type: String,
        require: true,
    }

},
);

module.exports = mongoose.model("studentdata", excelSchema)