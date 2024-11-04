const express = require('express');
const router = express.Router();
const {createuser,getuser} = require('../controllers/userCtrl')

router.post('/create',createuser)
router.get('/get',getuser)

module.exports = router