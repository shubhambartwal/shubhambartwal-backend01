const jwt = require('jsonwebtoken')

//generate -step 1
const value ={
    name:"Shubham",
    accountNumber:112312312
}

//jwt 
const token=jwt.sign(value,"secret");
//this token has been generated using the secret and hec=nce this token 
// can only be verified using this secret

console.log(token)