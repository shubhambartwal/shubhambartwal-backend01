const mongoose= require('mongoose')
function DbConnection(){
mongoose.connect("mongodb+srv://test:test@cluster0.k4a1v8n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
function(){
    console.log('connected')
})
}
module.exports=DbConnection