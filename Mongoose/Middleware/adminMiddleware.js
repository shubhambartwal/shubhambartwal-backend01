const {Admin}=require('../DB/Admin.model')
const adminMiddleware=(req,res,next)=>{
Admin.findOne({
    username:req.header.username,
    password:req.header.password
}).then(function (value){
    if(value){
        next();
    }else{
        res.status(403).json({msg:"user doesn't exist"})
    }
})
}
module.exports=adminMiddleware;