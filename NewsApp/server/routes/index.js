var express = require('express');
var router = express.Router();


var body=require('body-parser');

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'RAHUL' });
   });

router.post('/',function(req,res){

  console.log("rahul");

})


module.exports = router;
