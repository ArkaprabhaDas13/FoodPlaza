const mongoose = require('mongoose')
const {Schema} = mongoose

const foodSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    categoryName:{
        type:String,
        required:true
    },
    imgPath:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Food',foodSchema)