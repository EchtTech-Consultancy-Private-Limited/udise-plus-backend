const express = require('express');
const router = express.Router();
const districtController = require('../controllers/districtController');

router.get('/check/:id', districtController.test);
router.get('/get-all', districtController.getAllDistricts);
router.get('/get-district/:id', districtController.getDistrictById);

module.exports = router;