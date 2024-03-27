const express= require('express')
const app=express();
function isOldEnough(age){
   return age>=14?true:false
    }
    function isOldEnoughMiddleware(req,res,next){
        const age= req.query.age
        if(age>14){next()}
        else res.json({msg:"You are underage"})
    }
app.get('/ride1',function(req,res)
{
     if(isOldEnough(req.query.age)){
    console.log("ride 1 is working fine")
    res.json({msg:"you have successfull riden the ride 1"})
    }
    else{
       res.json({msg:'sorry you cant ride'}) 
    
    }
}
)
app.get('/ride2',function(req,res)
{
     if(isOldEnough(req.query.age)){
    console.log("ride 1 is working fine")
    res.json({msg:"you have successfull riden the ride 2"})
    }
    else{
       res.status(411).json({msg:'sorry you cant ride2'}) 
    
    }
})

//middleware function 
app.get('/ride3',isOldEnoughMiddleware,function(req,res)
{res.json({msg:"you have successfull riden the ride 3"})
    
})
app.listen(3000,()=>{console.log('working fine')}) 