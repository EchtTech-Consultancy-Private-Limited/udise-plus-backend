const express = require('express');
const router = express.Router();
const {test,getAllStates} = require('../controllers/stateController');

router.get('/test', test);
router.get('/get-all', getAllStates);


module.exports = router;