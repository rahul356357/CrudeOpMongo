var express = require('express');
var router = express.Router();
var news = require('../models/headlines.js');
var mongoose = require('mongoose');


router.post('/', function(req, res, next) {
    console.log("in save users");
    //console.log(lname);
    var userProfile = new news({
        headline: req.body.headline,
        comment: req.body.comment,
        data: req.body.data,
    });
    userProfile.save(function(err) {
            if (err) throw err;
            else {
                console.log("updated succesfully");
            }
        })
        //  res.send('respond with a resource');
});

var searchall = router.route("/searchall")
searchall.get(function(req, res) {
    //  console.log("inside a route")
    news.find(function(err, articles) {
        if (err) {
            console.log("error");
        }
        console.log(articles);
        res.send(articles)
    })
});

var searchone = router.route("/searchone")
searchone.post(function(req, res) {
    var name = req.body.id;
    console.log(name)
    news.findById(name, function(err, articles) {
        if (err) {
            console.log("error");
        }
        console.log(articles);
        res.send(articles)
    })
});

var update = router.route("/update")
update.post(function(req, res) {
    console.log("inside a update")
    news.findOne({
        headline: req.body.head
    }, function(err, article) {
        if (err) throw err;
        console.log("mammaamma");
        article.data = req.body.head,
            article.comment = req.body.comment

        article.save(
            function(err) {
                console.log("update succesfully")
            }
        );

        //console.log(user+"succesfully updated");
    })
});
var del = router.route("/del")
del.post(function(req, res) {
    var head = req.body.headline;
    //var pass = req.body.password;
    //console.log(name);
     console.log(head);

    news.findOne({headline: head
        }, function(err, articles) {
            articles.remove(function(err) {
                if (err) throw err;
                console.log("data deleted");
            })
        })

    });







module.exports = router;
