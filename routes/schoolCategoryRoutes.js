const express = require('express');
const router = express.Router();
const {test,getAllSchoolCategory} = require('../controllers/schoolCategoryController');

router.get('/test', test);
router.get('/get-all', getAllSchoolCategory);


module.exports = router;