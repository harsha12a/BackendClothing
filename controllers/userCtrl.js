const expasync = require('express-async-handler');
const prisma = require('../config/prismaConfig')

const createuser = expasync(async(req,res) =>{
    const user = req.app.get('users')
    let data = await user.find().toArray()
    console.log(data)
    res.send({message:'hello'})
})

const getuser = expasync(async(req,res) =>{
    console.log('hello')
})

module.exports = {createuser,getuser}