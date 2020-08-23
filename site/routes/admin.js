var express = require('express');
var router = express.Router();

var controller = require("../controllers/adminController")

router.get('/', controller.mostrarForm);
router.get('/newProduct', controller.mostrarForm);
router.post('/newProduct', controller.publicar)

module.exports = router;