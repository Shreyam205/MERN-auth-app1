const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')


const userSchema = new mongoose.Schema({
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
})

userSchema.methods.generateAuthToken = function (){
    const token = jet.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresln: "5e"
    })
    return token
}

const User = mongoose.model("user", userSchema)

const validate = (data) =>{
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lasttName: Joi.string().required().label("Lats Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
    })
    return schema.validate(data)
}

module.exports = {User, validate}