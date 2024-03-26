const express= require('express')
const app=express();
function isOldEnough(age){
    age>=14?true:false
    }
app.get('/ride1',function(req,res){
    if(isOldEnough(req.query.age)){
   console.log("ride 1 is working fine")
    res.json({msg:"you have successfull riden the ride 1"})
    }
    else{
       res.send(411).json({msg:'sorry you cant ride'}) 
    }
})
app.listen(3000,()=>{console.log('working fine')}) 