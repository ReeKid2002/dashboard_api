const express = require('express');
const router = express.Router();
router.use('/vedicmath',require('./vedicMath'));
module.exports = router;