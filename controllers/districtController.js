
const ApiResponse = require('../utils/ApiResponse')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/asyncHandler')
const DistrictDataModel = require('../models/districtModel');

const getAllDistricts = asyncHandler(async(req, res) => {
  try {
    const districts = await DistrictDataModel.findAll();
    if(districts.length>0){
      return res.status(200).json(
        new ApiResponse(200, districts, "Fetch all district successfully.")
    )   
  
    }else{
      return res.status(200).json(
        new ApiResponse(404, districts, "Not found any district")
    )   
  
    }

} catch (error) {
    throw new ApiError(400, "Something went wrong!")
    
  }
});

const getDistrictById = asyncHandler(async(req, res) => {
  try {
    const state_id = req.params.id;
    const getDistrict = await DistrictDataModel.findById(state_id);
    if(getDistrict){
      return res.status(200).json(
        new ApiResponse(200, getDistrict, "Get district successfully.")
    )   
  
    }else{
      return res.status(200).json(
        new ApiResponse(404, getDistrict, "Not found any district")
    )   
  
    }

} catch (error) {
    throw new ApiError(400, "Something went wrong!")
    
  }
});

module.exports = {
    getAllDistricts,
    getDistrictById
};
