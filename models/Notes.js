var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Schema = mongoose.Schema;
var noteSchema = new Schema({
    userComments:{
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    articlesId: {
        type: Schema.Types.ObjectId,
        ref: "Articles"
    }
})
var Notes = mongoose.model("Notes", noteSchema)

module.exports = Notes;