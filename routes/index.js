const router = require('express').Router();

const AllRoutes = ()=>{
router.use("/states", require("./stateRoutes.js"));
router.use("/districts", require("./districtRoutes.js"));
router.use("/years", require("./yearRoutes.js"));
router.use("/school-management", require("./schoolManagementRoutes.js"));
router.use("/school-category", require("./schoolCategoryRoutes.js"));

}

AllRoutes();
module.exports =router;