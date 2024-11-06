const express = require('express');
const {get,getbyid} = require('../controllers/menCtrl')

const router = express.Router()

router.get('/get',get)
router.get('/get/:id',getbyid)

module.exports = router