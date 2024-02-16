const express = require('express');
const router = express.Router();
const yearsMasterController = require('../controllers/yearsMasterController');

router.get('/get-all', yearsMasterController.getAllYears);


module.exports = router;