
const State = require('../models/stateModel');


async function getAllStates(req, res) {
    try {
      const states = await State.findAll();
      res.json(states);
    } catch (error) {
      console.error('Error fetching states:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllStates,
};
