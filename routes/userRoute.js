const express = require('express');
const router = express.Router();
const {createuser,getuser,addcart,removecart} = require('../controllers/userCtrl')

router.use(express.json())

router.post('/create',createuser)
router.post('/get',getuser)
router.put('/addcart/:username',addcart)
router.put('/removecart/:username',removecart)

module.exports = router