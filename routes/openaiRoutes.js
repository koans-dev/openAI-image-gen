const express = require('express');
const { append } = require('express/lib/response');
const { generateImage } = require('../controllers/openaiController')
const router = express.Router();


router.post('/generateimage', generateImage);

module.exports = router;