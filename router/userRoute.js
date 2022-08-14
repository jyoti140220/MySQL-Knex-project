const express=require('express')
const router=express.Router()
const {addUserData, getUserdata,selectUser}= require("../controller/users")
router.post('/AddUserData',addUserData)
router.get("/getAlluser",getUserdata)
router.get("/get_1_userdata", selectUser)
module.exports=router