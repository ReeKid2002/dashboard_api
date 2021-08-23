const express = require('express');
const vedicMathApi = require('../../../controller/vedicMathAPI');
const router = express.Router();
router.get('/',vedicMathApi.getVedicVideo);
//router.post('/',vedicMathApi.putTestData);
module.exports = router;
