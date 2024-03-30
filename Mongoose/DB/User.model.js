const mongoose = require('mongoose')
const UserSchema= mongoose.Schema({
username:String,
password:String,
purchasedCourses:[{type:mongoose.Schema.Types.ObjectId ,ref:'Course'}]
})
const User=mongoose.model('User',UserSchema)
module.exports= User