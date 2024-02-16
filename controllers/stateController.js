
const State = require('../models/stateModel');
const ApiResponse = require('../utils/ApiResponse')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/asyncHandler')
const StateDataModel = require('../models/stateModel');


const getAllStates = asyncHandler(async(req, res)=> {
  try {
    const states = await StateDataModel.findAll();
    if(states.length>0){
      return res.status(200).json(
        new ApiResponse(200, states, "Fetch all states successfully")
    ) 
    }else{
      return res.status(200).json(
        new ApiResponse(404, states, "Not found any states")
    ) 
    }
    
  } catch (error) {
    throw new ApiError(400, "Something went wrong!")
  }
}

)



module.exports = {
  getAllStates,
};
