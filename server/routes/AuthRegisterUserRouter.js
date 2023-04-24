const router = require("express").Router()

router.get("/",AuthRegisterUserController.init)
router.post("/auth/register/user",AuthRegisterUserController.RegisterUser)