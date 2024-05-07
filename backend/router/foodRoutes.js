const mongoose = require('mongoose')
const Food = require('../model/foodSchema')
const express = require('express')
const router = express.Router()

router.get('/', async(req, res)=>{
    const items = await Food.find({})
    return res.status(200).json({'your food items':items})
})

router.post('/', async(req, res)=>{
    const {name, categoryName, imgPath, description, price} = req.body
    try{
        const food = await Food.create({name, categoryName, imgPath, description, price})
        return res.status(200).json(food)
    }catch(error){
        console.error("Error in POST request !!!",error)
    }
})

module.exports = router