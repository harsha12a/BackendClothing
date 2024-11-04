const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// router.post('/ins',async(req,res)=>{
//     const products = req.app.get('products')
//     // const users = 
//     const moduser = await Promise.all(users.map(async (user) => {
//         if (!user.password) {
//             throw new Error('User password is required');
//         }
//         const hashedPassword = await bcrypt.hash(user.password, 10); // 10 is the salt rounds
//         return { ...user, password: hashedPassword }; // Replace the plain password with the hashed one
//     }));
//     let data = await products.insertMany(moduser)
//     res.send({message:'ok',data})
// })

module.exports = router