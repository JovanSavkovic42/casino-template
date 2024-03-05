const express = require('express');
const router = express.Router();
const { fetchSmartContractInfo } = require('../../controllers/smartContract');

router.get('/testABI', fetchSmartContractInfo);

module.exports = router;
