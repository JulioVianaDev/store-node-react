const express = require("express");
const cors = require("cors");
require('dotenv').config()
var app = express();

app.use(cors())
app.use(express.json());
const AuthRegisterUserRoutes = require('./routes/AuthRegisterUserRoutes')
const LoginUserRoutes = require('./routes/LoginRoutes')

const port  = process.env.PORT  || 3000

app.use(AuthRegisterUserRoutes)
app.use(LoginUserRoutes)
app.listen(port,()=>{
  console.log(`Servidor rodando na porta: ${port}`)
})

require("./database/connection")