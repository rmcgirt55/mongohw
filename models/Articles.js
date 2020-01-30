var monfoose = require("mongoose");
var Schema = mongoose.Schema;
var aSchema = new Schema ({
    title:{
        type: String,
        require: true
    },
    link:{
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    saved: {
        type: Boolean,
        default: false,
    }
})

var TheArticles = mongoose.model("Articles", aSchema)
module.exports = TheArticles