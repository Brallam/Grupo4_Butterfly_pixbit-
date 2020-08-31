var express = require('express');
var router = express.Router();

let controller = require('../controllers/usersController')
/* GET users listing. */
router.get('/', function(req, res, next) {
 res.send('respond with a resource');
});
router.get('/register', function(req, res, next) {
    res.render("register");
  });

  router.get('/login', function(req, res, next) {
    res.render("login");
  });
  router.post('/register',controller.guardar)


module.exports = router;
