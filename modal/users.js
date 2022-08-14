const knex=require('../config/db')

knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id')
    table.string('name')
    table.string('password')
    table.string('email')
}).then(()=>{console.log("table crated....")}).catch((err)=>{console.log(err)})

module.exports=knex