var express = require('express');
var router = express.Router();
var user = require('../models/database.js');

var mongoose = require('mongoose');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

var search = router.route("/search")
search.post(function(req, res) {
    console.log("inside a route")

    var name = req.body.username;
    console.log(name);

    var password = req.body.password;
    console.log(password);
    user.findOne({
        username: name
    }, function(err, user) {
        if (user.password == password) {
            console.log(" valid user");
            res.send("valid user")
        }
        if ((!(user.password == password)) || (user.password == " ")) {
            console.log("incorrect password");
        } else {
            res.send("wrong password enter again")
        }
        if (err) {
            res.send("not a user in database");
            console.log("not a match in user databse");
        }
    })
});
var update = router.route("/update")
update.post(function(req, res) {
    console.log("inside a update")
    var name = req.body.username;
    //console.log(name);
    var pass = req.body.pass;
    //  console.log(pass);
    user.findOne({
        username: name
    }, function(err, user) {
        if (err) throw err;
        
        user.password = pass;
        user.save(function(err) {
                console.log("updated succesfully");
            })
            //console.log(user+"succesfully updated");
    })
});




var del = router.route("/del")
del.post(function(req, res) {
    var name = req.body.username;
    var pass = req.body.password;
    //console.log(name);
  //  console.log(pass);

    user.findOne({
        username: name
    }, function(err, user) {
        if (user.password == pass) {
            user.remove(function(err) {
                if (err) {
                    throw err;
                } else {
                    console.log("succesfully delete");
                }
            })
        }
        if (pass == "" || (!(user.password == pass))) {
            console.log("wrong password ");
        }

    })
});




router.post('/', function(req, res, next) {
    console.log("in save users");
    //console.log(lname);
    var userProfile = new user({
        username: req.body.username,
        password: req.body.password
    });
    userProfile.save(function(err) {
            if (err) throw err;
            else {
                console.log("updated succesfully");
            }
        })
        //  res.send('respond with a resource');
});




module.exports = router;
