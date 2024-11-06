const expasync = require('express-async-handler');

const get = expasync(async(req,res) => {
    let men = req.app.get('men')
    let result = await men.find().toArray()
    res.send({message:'ok',payload:result})
})

const getbyid = expasync(async(req,res) => {
    let men = req.app.get('men')
    let result = await men.findOne({id:Number.parseInt(req.params.id)})
    if(!result) res.send({message:'not found'})
    else res.send({message:'ok',payload:result})
})

module.exports = {get,getbyid}