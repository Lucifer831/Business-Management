const router = require('express').Router();
const jwt = require('../Middleware/AuthToken.js')

const {Home,signup,login,product} = require('../Controller/UserController.js')

router.route('/home').get(Home);
router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/product').get(jwt,product)



module.exports = router;