const User = require('../model/userSchema')
const express = require('express')
const userRouter = express.Router()
const {body, validationResult} = require('express-validator')


// declaring the Express Validator function to validate the Email and Password
// Or, can be written as a separate middleware function using (req, res, next)
// For VALIDATION reference : "https://codingjindo.medium.com/validating-email-password-with-express-validator-96cbe6984bd1"


userRouter.get('/getAllUsers',async (req,res)=>{
    const users = await User.find({})
    res.status(200).json(users)
})

userRouter.post('/createUser', body('email').isEmail(), body('password').isLength({min:6}), async(req, res, next)=>{
    const errors = validationResult(req)
    console.log(errors)

        // This is the normal User.create() section... The validation is occuring before inserting into DB
        if (!errors.isEmpty()) {
            return res.status(400).json({'message':"Enter valid credentials"});
        }
        try{
            const {name, email, password, location, date} = req.body
            const user = await User.create({name, email, password, location, date})
            return res.status(200).json(user)
        }catch(error){          
            console.log("Error in Creating new User!!!")
            console.error(error)
        }
})

userRouter.post('/loginUser', body('email').isEmail(), body('password').isLength({min:6}), async (req, res, next)=>{
    const errors = validationResult(req)
    console.log(errors)

    if(!errors.isEmpty())
    {
        return res.status(400).json({'message':"Enter valid creadentials"})
    }
    try{

        const {email, password} = req.body
        const user = await(User.findOne({email, password}))
        console.log(user)
        if(user)
        {
            console.log("LOGIN SuccessfuL!!")
            res.status(200).json({message:"Login Successful", user})
        }
        else{
            console.log("LOGIN UNSUCCESSFUL!")
            res.status(200).json({message:"User not found !!"})
        }
    }catch(error){
        console.error(error)
    }
})

module.exports = userRouter