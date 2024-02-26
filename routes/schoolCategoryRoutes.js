const express = require('express');
const router = express.Router();
const {getAllSchoolCategory,getSchoolCategoryNameByCode} = require('../controllers/schoolCategoryController');

router.get('/get-all', getAllSchoolCategory);
router.get('/get-name-by-code', getSchoolCategoryNameByCode);


module.exports = router;