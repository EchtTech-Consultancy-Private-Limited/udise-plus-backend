const ApiResponse = require('../utils/ApiResponse')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/asyncHandler')
const schoolCategoryModel = require('../models/schoolCategoryModel');


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
        res.status(500).send({status:false,message:new ApiError(400, "Something went wrong!",[{error:error.message}])});       }
    }

)

const getSchoolCategoryNameByCode = asyncHandler(async(req, res)=> {
  try {
    const schoolCategory = await schoolCategoryModel.getSchoolCategoryAndManagement();
    if(schoolCategory.length>0){
      return res.status(200).json(
          new ApiResponse(200, schoolCategory, "Fetch all school category and management data successfully")
      )
    }else{
      return res.status(200).json(
          new ApiResponse(404, schoolCategory, "Not found any schoolCategory and school management")
      )
    }

  } catch (error) {
    res.status(500).send({status:false,message:new ApiError(400, "Something went wrong!",[{error:error.message}])});   }
});



module.exports = {
  getAllSchoolCategory,
  getSchoolCategoryNameByCode
};