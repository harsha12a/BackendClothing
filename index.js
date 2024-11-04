const express = require('express');
const { MongoClient } = require('mongodb');
const userApp = require('./routes/userRoute');
const watchApp = require('./routes/watchRoute');
const hatApp = require('./routes/hatRoute');
const shoeApp = require('./routes/shoeRoute');

let app = express();
require('dotenv').config();

let mClient = new MongoClient(process.env.DATABASE_URL);

mClient.connect().then((connectobj)=>{
    const clothstore = connectobj.db('clothstore');
    const users = clothstore.collection('users');
    const watches = clothstore.collection('watches');
    const hats = clothstore.collection('hats');
    const shoes = clothstore.collection('shoes');
    app.set('users',users)
    app.set('watches',watches)
    app.set('hats',hats)
    app.set('shoes',shoes)
    console.log('Connection ok')
    app.listen(process.env.PORT,()=>console.log(`server running on http://localhost:${process.env.PORT}`))
})
.catch((err)=>{
    console.log('error in connecting',err)
})

app.use('/user',userApp)
app.use('/watch',watchApp)
app.use('/hat',hatApp)
app.use('/shoe',shoeApp)

app.use('*',(req,res,next)=>{
    res.send('404 not found')
})

app.use((err,req,res,next)=>{
    res.send({message:'Error',errMsg:err})
})