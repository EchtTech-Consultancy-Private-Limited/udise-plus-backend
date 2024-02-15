
const Districts = require('../models/districtModel');
const ApiResponse = require('../utils/ApiResponse')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/asyncHandler')


const getAllDistricts = asyncHandler(async(req, res) => {
  try {
    const districts = await Districts.findAll();
    return res.status(200).json(
      new ApiResponse(200, districts, "fetch all district successfully.")
  )    } catch (error) {
    throw new ApiError(400, "Something went wrong!")
    
  }
});

module.exports = {
    getAllDistricts,
};
