const express = require('express');
const {get,getbyid} = require('../controllers/womenCtrl')

const router = express.Router()

router.get('/get',get)

router.get('/get/:id',getbyid)

module.exports = router