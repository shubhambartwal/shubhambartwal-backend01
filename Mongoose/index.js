const express= require('express')
const AdminRoute =require('./Routes/AdminRoute')
const UserRoute= require('./Routes/UserRoute')
const app= express();
app.use('/admin',AdminRoute )
app.use('/user',UserRoute)
app.listen(3000,console.log(
    "App is listening port 3000"
))