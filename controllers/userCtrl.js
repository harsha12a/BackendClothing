const expasync = require('express-async-handler')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const createuser = expasync(async(req,res) =>{
    let user = req.app.get('users')
    let newUser = req.body
    let result = await user.findOne({username:newUser.username})
    if(result) res.send({message:'User already exists'})
    else{
        let newPass = newUser.password
        newUser.password = await bcrypt.hash(newPass,10)
        newUser.cart = []
        let response = await user.insertOne(newUser)
        res.send({message:'ok',payload:newUser})
    }
})

const getuser = expasync(async(req,res) =>{
    const user = req.app.get('users')
    let result = await user.findOne({username:{$eq:req.body.username}})
    if(result){
        let userPass = result.password
        let checkPass = await bcrypt.compare(req.body.password,userPass)
        if(checkPass){
            let signedToken=jwt.sign({username:req.body.username},process.env.SECRET_KEY,{expiresIn:'10hr'})
            res.send({message:'Login ok',payload:result,token:signedToken})
        }
        else{
            res.send({message:'Wrong password'})
        }
    }
    else{
        res.send({message:'User not found'})
    }
})

const addcart = expasync(async(req,res)=>{
    let user = req.app.get('users')
    let Username = req.params.username
    let cart = req.body.cart
    let response = await user.findOne({username:Username})
    if(response===null) res.send({message:'User not found'})
    let result = await user.updateOne({username:Username},{$set:{cart:cart}})
    res.send({message:'ok',payload:response})
})

const removecart = expasync(async(req,res)=>{
    let user = req.app.get('users')
    let Username = req.params.username
    let {id, type} = req.body
    let response = await user.findOne({username:Username})
    if(response===null){
        return res.send({message:'User not found'})
    }
    let cart = response.cart.filter(x=>!(x.id===id && x.type===type))
    let result = await user.updateOne({username:Username},{$set:{cart:cart}})
    if(result.modifiedCount===0) return res.send({message:'Failed to update cart'})
    let newUser = await user.findOne({username:Username})
    res.send({message:'ok',payload:newUser})
})

module.exports = {createuser, getuser, addcart, removecart}