
const ApiResponse = require('../utils/ApiResponse')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/asyncHandler')
const YearDataModel = require('../models/yearModel');


const getAllYears = asyncHandler(async(req, res) =>{
  try {
    const years = await YearDataModel.findAll();
    if(years.length>0){
      return res.status(200).json(
        new ApiResponse(200, years, "fetch all years successfully")) 
    }else{
      return res.status(200).json(
        new ApiResponse(404, years, "Not found any years")) 
    }
    
  } catch (error) {
    res.status(500).send({status:false,message:new ApiError(400, "Something went wrong!",[{error:error.message}])});   }
})

module.exports = {
    getAllYears,
};
