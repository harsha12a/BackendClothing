const express = require('express');
const {get} = require('../controllers/shoeCtrl')

const router = express.Router();

router.get('/get',get)

module.exports = router