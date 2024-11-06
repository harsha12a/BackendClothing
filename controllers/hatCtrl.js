const expasync = require('express-async-handler');

const get = expasync(async(req,res) => {
    let hats = req.app.get('hats')
    let result = await hats.find().toArray()
    res.send({message:'ok',payload:result})
})

const getbyid = expasync(async(req,res) => {
    let hats = req.app.get('hats')
    let result = await hats.findOne({id:Number.parseInt(req.params.id)})
    if(!result) res.send({message:'not found'})
    else res.send({message:'ok',payload:result})
})

module.exports = {get,getbyid}