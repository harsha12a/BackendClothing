const express = require('express');
const router = express.Router();
const tokenVerify = require('../middlewares/tokenVerify')
const {createuser,getuser,addcart,removecart} = require('../controllers/userCtrl')

router.use(express.json())

router.post('/create',createuser)
router.post('/get',getuser)
router.put('/addcart/:username',tokenVerify,addcart)
router.put('/removecart/:username',tokenVerify,removecart)

module.exports = router