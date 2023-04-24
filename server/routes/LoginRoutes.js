const router = require('express').Router();

const LoginController = require("../controllers/LoginController")

router.get('/api/login',LoginController.login)

module.exports = router;