const express = require('express');
const router = express.Router();
const {createuser,getuser} = require('../controllers/userCtrl')

router.use(express.json())

router.post('/create',createuser)
router.get('/get',getuser)

module.exports = router