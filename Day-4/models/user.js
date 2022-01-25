const mongoose=require("mongoose");
const joi = require("joi");
const User=mongoose.model("User",new mongoose.Schema({
    email:{
        type:String,
    unique:true
},
password:{
    type:String,
    minlength:8,
    maxlength:120,
    required:true
},
isAdmin: {
    type: Boolean,
    default: false
}
}))
const validateUser = (user) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(8).max(12).required()

    })
    return schema.validate(user)
}

module.exports = { User, validateUser }