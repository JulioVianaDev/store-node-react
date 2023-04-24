const User = require("../models/User")

module.exports = class AuthRegisterUserController {
  static async init(req,res){
    res.send({message:"Bem vindo a nossa api"});
  }

  static async RegisterUser(req,res){
    const {
      name,
      email,
      age,
      password,
      confirmPassword,
    } = req.body 

    let image = "";
    if(req.file){
      image = req.file.filename 
    }
    if(!name){
      return res.status(422).json({message: "O nome é obrigatório"})
    }
    if(!email){
      return res.status(422).json({message: "O email é obrigatório"})
    }
    if(!age){
      return res.status(422).json({message: "A idade é obrigatória"})
    }
    if(!password){
      return res.status(422).json({message: "A senha é obrigatória"})
    }
    if(password != confirmPassword){
      return res.status(422).json({message: "As senhas não são iguais"})
    }

    const userExist = await User.findOne({email: email})

    if (userExist){
      return res.status(422).json({message: "Já tem um usuario com este email"})
    }
  }
}