const knex=require('knex')({
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:"Jyotijaya20@",
        database:"Hello"
    }
})


module.exports=knex