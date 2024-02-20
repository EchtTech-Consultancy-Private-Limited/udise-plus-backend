const express = require('express');
const router = express.Router();
const districtController = require('../controllers/districtController');

router.get('/get-all', districtController.getAllDistricts);
router.get('/get-state-by-id/:id', districtController.getDistrictById);


module.exports = router;