var mongoose = require("mongoose");

var joinScheme = new mongoose.Schema({
    user: String,
    id: String,
    code: String,
    creator: String,
    title: String,
    describe: String
});

module.exports = mongoose.model("join", joinScheme);