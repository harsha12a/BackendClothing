const express = require('express');
const {get} = require('../controllers/womenCtrl')

const router = express.Router()

router.get('/get',get)

module.exports = router