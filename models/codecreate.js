var mongoose = require("mongoose");

var codeSchema = new mongoose.Schema({
    createcode: String,
    username: String,
    title: String,
    describe: String,
    works: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "work"
    }]

})


module.exports = mongoose.model("codecreate", codeSchema);