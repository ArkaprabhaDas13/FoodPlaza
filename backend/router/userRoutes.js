const User = require('../model/userSchema')
const express = require('express')
const userRouter = express.Router()
const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const secret = "secret"


// declaring the Express Validator function to validate the Email and Password
// Or, can be written as a separate middleware function using (req, res, next)
// For VALIDATION reference : "https://codingjindo.medium.com/validating-email-password-with-express-validator-96cbe6984bd1"


userRouter.get('/getAllUsers', async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
})


// SINGUP
userRouter.post('/createUser', body('email').isEmail(), body('password').isLength({ min: 6 }), async (req, res, next) => {
    const errors = validationResult(req)
    console.log(errors)

    // This is the normal User.create() section... The validation is occuring before inserting into DB 

    if (!errors.isEmpty()) {
        return res.status(400).json({ 'message': "Enter valid credentials" });
    }

    const { name, email, password, location, date } = req.body

    // Generating SECURE HASHED password
    const salt = await bcrypt.genSalt(10)
    let securePassword = await bcrypt.hash(password, salt)


    //Pushing data into DATABASE
    try {
        const user = await User.create({ name, email, password: securePassword, location, date })
        return res.status(200).json(user)
    } catch (error) {
        console.log("Error in Creating new User!!!")
        console.error(error)
    }
})


// LOGIN
userRouter.post('/loginUser', body('email').isEmail(), body('password').isLength({ min: 6 }), async (req, res, next) => {
    const errors = validationResult(req)
    console.log(errors)

    if (!errors.isEmpty()) {
        return res.status(400).json({ 'message': "Enter valid creadentials" })
    }
    try {

        // extracting data from Post req.body
        const { email, password } = req.body


        // comparing the User with the database - MongoDB
        const user = await (User.findOne({ email }))
        console.log("USER = ",user)       // Printing the user 


        if (user){

            // Checking if the hashed password matches with the entered password
            // console.log("password = ", password)
            const result = await bcrypt.compare(password, user.password)
            console.log("BcryptJS RESULT = ",result)
             

            // Making a TOKEN from JWT
            const token = jwt.sign({data:user._id}, secret)
            console.log("Token = ", token)
            // Verifying the TOKEN
            const tokenData = jwt.verify(token, secret)
            console.log("Data = ", tokenData)


            // IF the User exists, then the TOKEN would be sent to the BROWSER/CLientSide for storing in Local Storage
            if(result)
            {
                console.log("LOGIN SuccessfuL!!")
                res.status(200).json({ message: "Login Successful", user , success:true, authToken:token})
            }
        }
        else {
            console.log("LOGIN UNSUCCESSFUL!")
            res.status(200).json({ message: "User not found !!" })
        }

    } catch (error) {
        console.error(error)
    }
})

module.exports = userRouter