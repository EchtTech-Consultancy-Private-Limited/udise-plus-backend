const { Sequelize } = require('sequelize');
const State = require('../models/stateModel');
const ApiResponse = require('../utils/ApiResponse')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/asyncHandler')

const getAllStates = asyncHandler(async(req, res)=> {
  try {
    const states = await State.findAll({
      attributes: ['state_master.*'],
      where: Sequelize.literal('id IN (SELECT MIN(id) FROM state_master GROUP BY state_name)'),
      order: [['state_name', 'ASC']],
      raw: true
    });

    return res.status(200).json(
      new ApiResponse(200, states, "fetch all states successfully.")
  ) 
  } catch (error) {
    throw new ApiError(400, "Something went wrong!")
  }
}

)



module.exports = {
  getAllStates,
};
