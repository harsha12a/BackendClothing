const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenVerify = (req,res,next) => {
    let bearer = req.headers.authorization
    if(bearer === undefined){
        return res.send({message:'Unauthorized access'})
    }
    const token = bearer.split(' ')[1]
    try{
        let decode = jwt.verify(token,process.env.SECRET_KEY)
        next()
    }
    catch(err){
        return res.send({message:'Token expired relogin'})
    }
}

module.exports = tokenVerify