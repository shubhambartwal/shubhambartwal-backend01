const mongoose = require('mongoose')
const AdminSchema= mongoose.Schema({
username:String,
password:String
})
const Admin=mongoose.model('Admin',AdminSchema)
module.exports= Admin