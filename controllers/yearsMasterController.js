
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
    throw new ApiError(400, "Something went wrong!")
  }
})

module.exports = {
    getAllYears,
};
