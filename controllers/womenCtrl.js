const expasync = require('express-async-handler');

const get = expasync(async(req,res) => {
    let women = req.app.get('women')
    let result = await women.find().toArray()
    res.send({message:'ok',payload:result})
})

module.exports = {get}