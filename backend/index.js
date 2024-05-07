const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const foodRoutes = require('./router/foodRoutes')
const userRouter = require('./router/userRoutes')
const connectFunction = require('./connection/dbConnection')


dotenv.config({ path: "./config.env" })
const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())

app.use('/',foodRoutes)
app.use('/',userRouter)

connectFunction();

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})