import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const Schema = mongoose.Schema

const UserSchema = new Schema({
email:{type:String, unique:true,required:true,lowercase:true},
nombre:{type:String},
apellido:{type:String},
password:{type:String,required:true}
})

UserSchema.pre('save', function(next){

    const user = this
  
    if(!user.isModified('password')) return next()
    
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err)

        bcrypt.hash(user.password,salt,null,(err,hash)=>{
            if(err) return next(err)

            user.password = hash
            next()
        })
    })
})

module.exports = mongoose.model('User',UserSchema)