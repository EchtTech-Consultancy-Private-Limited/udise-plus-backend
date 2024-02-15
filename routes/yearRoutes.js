const express = require('express');
const router = express.Router();
const yearsMasterController = require('../controllers/yearsMasterController');

router.get('/years', yearsMasterController.getAllYears);


module.exports = router;