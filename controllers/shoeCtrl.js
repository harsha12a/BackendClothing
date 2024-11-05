const expasync = require('express-async-handler');

const get = expasync(async(req,res) => {
    let shoes = req.app.get('shoes')
    let result = await shoes.find().toArray()
    res.send({message:'ok',payload:result})
})

module.exports = {get}