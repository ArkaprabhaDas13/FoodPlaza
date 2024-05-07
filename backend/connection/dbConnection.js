const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:"./config.env"})
const URI = process.env.MONGO_URI

const connectFunction = async ()=>{
    await mongoose.connect(URI).then(()=>{
        console.log("CONNECTED to MONGO DB!")
    }).catch((err)=>{
        console.log("Couldnt connect to MONGO DB !!!!")
        console.error(err)
    })
}

module.exports = connectFunction