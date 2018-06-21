var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Network V2.0' });
});

/* GET home page. */
router.get('/black', function(req, res, next) {
  res.render('black', { title: 'Network V2.0' });
});


module.exports = router;
