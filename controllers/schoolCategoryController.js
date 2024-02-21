const ApiResponse = require('../utils/ApiResponse')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/asyncHandler')
const schoolCategoryModel = require('../models/schoolCategoryModel');


const test = asyncHandler(async(req, res)=> {
  try {
    return res.status(200).json(
      new ApiResponse(200, "schoolManagement", "Fetch all school category data successfully")
  ) 
    
  } catch (error) {
    throw new ApiError(400, "Something went wrong!")
  }
}

)
const getAllSchoolCategory = asyncHandler(async(req, res)=> {
  try {
    const schoolCategory = await schoolCategoryModel.findAll();
    if(schoolCategory.length>0){
      return res.status(200).json(
        new ApiResponse(200, schoolCategory, "Fetch all school category data successfully")
    ) 
    }else{
      return res.status(200).json(
        new ApiResponse(404, schoolCategory, "Not found any schoolCategory")
    ) 
    }
    
  } catch (error) {
    throw new ApiError(400, "Something went wrong!")
  }
}

)



module.exports = {
  getAllSchoolCategory,
  test
};
