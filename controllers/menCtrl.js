const expasync = require('express-async-handler');

const get = expasync(async(req,res) => {
    let men = req.app.get('men')
    let result = await men.find().toArray()
    res.send({message:'ok',payload:result})
})

module.exports = {get}