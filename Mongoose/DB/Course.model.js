const mongoose = require('mongoose')
const CourseSchema= mongoose.Schema({
title:String,
description:String,
imageLink:String,
price:Number
})
const Course=mongoose.model('Course',CourseSchema)
module.exports= Course