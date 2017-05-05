var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');



router.route('/v1/users')
.get(userController.getUsers2)

router.route('/v1/users/:id')
.get(userController.getUsers);

//router.route('/v1/users')
//.post(userController.postUsers)

//router.route('/v1/users/update/:id')
//	.put(userController.updateUsers)
//	.delete(userController.deleteUsers)

module.exports = router;

