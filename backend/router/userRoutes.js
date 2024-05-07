const User = require('../model/userSchema')
const express = require('express')
const userRouter = express.Router()

userRouter.get('/getAllUsers',async (req,res)=>{
    const users = await User.find({})
    res.status(200).json(users)
})

userRouter.post('/createUser', async(req, res)=>{
    const {name, email, password, location, date} = req.body
    
    try{
        const user = await User.create({name, email, password, location, date})
        return res.status(200).json(user)
    }catch(error){
        console.log("Error in Creating new User!!!")
        console.error(error)
    }
})

module.exports = userRouter