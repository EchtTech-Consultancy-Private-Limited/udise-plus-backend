
const Years = require('../models/yearModel');
const ApiResponse = require('../utils/ApiResponse')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/asyncHandler')


const getAllYears = asyncHandler(async(req, res) =>{
  try {
    const years = await Years.findAll();
    return res.status(200).json(
      new ApiResponse(200, years, "fetch all years successfully.")
  ) 
  } catch (error) {
    throw new ApiError(400, "Something went wrong!")
  }
})

module.exports = {
    getAllYears,
};
