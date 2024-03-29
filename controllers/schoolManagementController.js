const ApiResponse = require('../utils/ApiResponse')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/asyncHandler')
const SchoolManagementModel = require('../models/schoolManagementModel');


const test = asyncHandler(async(req, res)=> {
  try {
    return res.status(200).json(
      new ApiResponse(200, "schoolManagement", "Fetch all school management data successfully")
  ) 
    
  } catch (error) {
    res.status(500).send({status:false,message:new ApiError(400, "Something went wrong!",[{error:error.message}])});   }
}

)
const getAllSchoolManagement = asyncHandler(async(req, res)=> {
  try {
    const schoolManagement = await SchoolManagementModel.findAll();
    if(schoolManagement.length>0){
      return res.status(200).json(
        new ApiResponse(200, schoolManagement, "Fetch all school management data successfully")
    ) 
    }else{
      return res.status(200).json(
        new ApiResponse(404, schoolManagement, "Not found any schoolManagement")
    ) 
    }
    
  } catch (error) {
    res.status(500).send({status:false,message:new ApiError(400, "Something went wrong!",[{error:error.message}])});   }
}

)



module.exports = {
  getAllSchoolManagement,
  test
};
