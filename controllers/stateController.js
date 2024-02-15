const { Sequelize } = require('sequelize');
const State = require('../models/stateModel');

async function getAllStates(req, res) {
  try {
    const states = await State.findAll({
      attributes: ['state_master.*'],
      where: Sequelize.literal('id IN (SELECT MIN(id) FROM state_master GROUP BY state_name)'),
      order: [['state_name', 'ASC']],
      raw: true
    });

    res.json(states);
  } catch (error) {
    console.error('Error fetching states:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}



module.exports = {
  getAllStates,
};
