const express=require('express')
const app=express()
app.use(express.json())

app.use('/', require("./router/userRoute"))

app.listen(9000,()=>{console.log("server is running........")})