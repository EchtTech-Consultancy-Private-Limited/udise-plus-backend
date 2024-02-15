
const Years = require('../models/yearModel');


async function getAllYears(req, res) {
    try {
      const years = await Years.findAll();
      res.json(years);
    } catch (error) {
      console.error('Error fetching years:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllYears,
};
