const knex=require('../modal/users')

exports.addUserData = async(req,res)=>{
   try{
    let reqdata = req.body
    await knex.from('users').insert(reqdata)
    .then(()=>{
        res.json({code: 200, msg: "User Data Add Succesfully"})
    }).catch((err)=>{
        console.log("Error :- ", err)
        res.json({code: 400, mdg: "Somthing Went Wrong"})
    })

   }catch(error){
    res.json((err1)=>{
        console.log("Error 1 :- ", err1)
        req.json({code: 400, msg: "Somthing went wrong"})
    })

   }
}


exports.getUserdata = async (req,res)=>{
    await knex.from('users').select('*')
    .then((data)=>{
        return res.status(200).json({total:data.length,AllUsers:data})
    })
    .catch((err)=>{
        return res.status(400).json({status:400,message:err})
    })
}

exports.selectUser = async(req,res)=>{
      await knex.from('users').select('*').where('id',req.body.id)
      .then((data1)=>{
        res.json({code: 200, msg: data1})
      }).catch((err)=>{
        res.json({code: 400, msg: "Not Found data"})
      })

}
