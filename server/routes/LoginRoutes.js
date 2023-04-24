const router = require('express').Router();

const LoginController = require("../controllers/LoginController")

router.get('/api/login',LoginController.login)
router.get('/download/image',LoginController.downloadImage)
module.exports = router;