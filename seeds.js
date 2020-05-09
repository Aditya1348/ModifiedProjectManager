var mongoose = require("mongoose"),
    codecreate = require("./models/codecreate"),
    work = require("./models/work");

var data = [{
        createcode: "xxxx",
        username: "aditya",
        title: "concrete work",
        describe: "bLAH blah blah blah blah "
    },
    {
        createcode: "yyyy",
        username: "raj",
        title: "concrete work",
        describe: "bLAH blah blah blah blah "
    }

]

function seedDB() {
    //remove campground
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("all data has been removed");
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("data has been added");
                        Comment.create({
                            text: "this place is fuck i want to run away from this ",
                            author: "aditya raj"
                        }, function(err, comment) {
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("created new comment")
                            }

                        })
                    }
                })
            })
        }
    });
    //add few campground

    //add few comment
}

module.exports = seedDB;