const express = require('express');
const { MongoClient } = require('mongodb');
const userApp = require('./routes/userRoute');
const productApp = require('./routes/productRoute');

let app = express();
require('dotenv').config();

let mClient = new MongoClient(process.env.DATABASE_URL);

mClient.connect().then((connectobj)=>{
    const clothstore = connectobj.db('clothstore');
    const users = clothstore.collection('users');
    const products = clothstore.collection('products');
    app.set('users',users)
    app.set('products',products)
    console.log('Connection ok')
    app.listen(process.env.PORT,()=>console.log(`server running on http://localhost:${process.env.PORT}`))
})
.catch((err)=>{
    console.log('error in connecting',err)
})

app.use('/user',userApp)
app.use('/product',productApp)

app.use('*',(req,res,next)=>{
    res.send('404 not found')
})

app.use((err,req,res,next)=>{
    res.send({message:'Error',errMsg:err})
})