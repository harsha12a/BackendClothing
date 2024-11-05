const expasync = require('express-async-handler');

const get = expasync(async(req,res) => {
    let hats = req.app.get('hats')
    let result = await hats.find().toArray()
    res.send({message:'ok',payload:result})
})

module.exports = {get}