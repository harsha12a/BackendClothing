const expasync = require('express-async-handler')
const bcrypt = require('bcrypt');

const createuser = expasync(async(req,res) =>{
    let user = req.app.get('users')
    let newUser = req.body
    let result = await user.findOne({username:newUser.username})
    if(result) res.send({message:'User already exists'})
    else{
        let newPass = newUser.password
        newUser.password = await bcrypt.hash(newPass,10)
        let response = await user.insertOne(newUser)
        res.send({message:response,paylad:newUser})
    }
})

const getuser = expasync(async(req,res) =>{
    console.log('hello')
})

module.exports = {createuser,getuser}