const jwt = require('jsonwebtoken')
const User = require('../models/user')
const mongoose = require('mongoose')
const validator = require('validator')

// const userSchema = new mongoose.Schema({
//     token:{
//         type: String,
//         trim: true
//     }
// })



const auth = async (req, res, next)=>{
    try{
        
        const token = req.header('Authorization').replace('Bearer','')
        
        console.log(token)
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findOne({_id:decoded._id,'tokens.token':token})
        
        if(!user){
            throw new Error()
        }

        req.token= token
        req.user = user
        
        next()
    }catch(e){
        res.status(401).send({error:'please authenticate'})
        //console.log(e)
    }
}

module.exports = auth