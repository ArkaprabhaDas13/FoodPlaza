const mongoose = require('mongoose')
const Food = require('../model/foodSchema')
const Category = require('../model/categorySchema')
const express = require('express')
const router = express.Router()

// GET route to get all the data
// GET req of CATEGORY food is also going to be inside the Function

router.get('/getAllFood', async(req, res)=>{
    global.foodItems = await Food.find({})
    global.categoryItems = await Category.find({})
    console.log(foodItems)
    console.log(categoryItems)
    try{
        res.send([global.foodItems, global.categoryItems])
    }catch(error){
        console.log(error.message)
        res.send("SERVER Error !")
    }

    // return res.status(200).json({foodItems:global.foodItems, categoryItems:global.categoryItems})
})


// POST route to create a new FOOD item

router.post('/createFood', async(req, res)=>{
    const {name, categoryName, imgPath, description, price} = req.body
    try{
        // Inserting Data into DATABASE
        const food = await Food.create({name, categoryName, imgPath, description, price})
        return res.status(200).json(food)
    }catch(error){
        console.error("Error in POST request !!!",error)
    }
})


// POST Route to enter Category DATA

router.post('/createCategory', async (req, res)=>{
    const {categoryName} = req.body
    try{
        const category = await Category.create({categoryName})
        console.log("Successfully POSTED Category!",category)
        res.status(200).json(category)
    }catch(error){
        console.error(error)
    }
})

module.exports = router