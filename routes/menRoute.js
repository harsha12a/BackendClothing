const express = require('express');
const {get} = require('../controllers/menCtrl')

const router = express.Router()

router.get('/get',get)

module.exports = router