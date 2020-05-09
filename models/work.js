var mongoose = require("mongoose");


var workSchema = new mongoose.Schema({
    id: String,
    username: String,
    comment: String
});

module.exports = mongoose.model("work", workSchema);