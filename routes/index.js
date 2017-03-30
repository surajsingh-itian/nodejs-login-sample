var express = require('express');
var router = express.Router();

const DUMMY_USERNAME = 'admin';
const DUMMY_PASSWORD = 'password';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * curl -H "Content-Type: application/json" -X POST -d '{"username":"admin", "password":"password"}' http://localhost:3000/login
 */
router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  if (username === DUMMY_USERNAME && password === DUMMY_PASSWORD) {
    res.json({status: true, display_name: 'My Helper'});
    return;
  }

  res.json({status: false});
});

module.exports = router;
