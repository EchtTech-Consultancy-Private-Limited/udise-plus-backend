const express = require('express');
const router = express.Router();
const {test,getAllSchoolManagement} = require('../controllers/schoolManagementController');

router.get('/test', test);
router.get('/get-all', getAllSchoolManagement);


module.exports = router;