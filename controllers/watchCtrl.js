const expasync = require('express-async-handler');

const get = expasync(async(req,res) => {
    let watches = req.app.get('watches')
    let result = await watches.find().toArray()
    res.send({message:'ok',payload:result})
})

module.exports = {get}