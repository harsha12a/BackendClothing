const expasync = require('express-async-handler')

const createuser = expasync(async(req,res) =>{
    let user = req.app.get('users')
    let newUser = req.body
    
    console.log(newUser)
})

const getuser = expasync(async(req,res) =>{
    console.log('hello')
})

module.exports = {createuser,getuser}