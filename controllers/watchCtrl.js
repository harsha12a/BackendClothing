const expasync = require('express-async-handler');

const get = expasync(async(req,res) => {
    let watches = req.app.get('watches')
    let result = await watches.find().toArray()
    res.send({message:'ok',payload:result})
})

const getbyid = expasync(async(req,res) => {
    let watches = req.app.get('watches')
    let result = await watches.findOne({id:Number.parseInt(req.params.id)})
    if(!result) res.send({message:'not found'})
    else res.send({message:'ok',payload:result})
})

module.exports = {get,getbyid}