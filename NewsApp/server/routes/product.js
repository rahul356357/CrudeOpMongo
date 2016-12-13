var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
console.log("rahul in product")
res.send("hello product")
});

router.post('/', function(req, res, next) {
  res.send(req.app.get('env'));
//  res.render('index', { title: 'Express' });
res.send(req.body.name);
res.send("hello product");
});

module.exports = router;
