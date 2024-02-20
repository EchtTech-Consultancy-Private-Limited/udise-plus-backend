const express = require('express');
const router = express.Router();
const stateController = require('../controllers/stateController');

router.get('/test', stateController.test);
// router.get('/get-all', stateController.getAllStates);


module.exports = router;