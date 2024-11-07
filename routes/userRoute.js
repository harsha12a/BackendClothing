const express = require('express');
const router = express.Router();
const {createuser,getuser,addcart} = require('../controllers/userCtrl')

router.use(express.json())

router.post('/create',createuser)
router.post('/get',getuser)
router.put('/addcart/:username',addcart)

module.exports = router