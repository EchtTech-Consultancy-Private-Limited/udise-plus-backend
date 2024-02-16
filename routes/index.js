const router = require('express').Router();

const AllRoutes = ()=>{
router.use("/states", require("./stateRoutes.js"));
router.use("/districts", require("./districtRoutes.js"));
router.use("/years", require("./yearRoutes.js"));

}

AllRoutes();
module.exports =router;