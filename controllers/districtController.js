
const Districts = require('../models/districtModel');


async function getAllDistricts(req, res) {
    try {
      const districts = await Districts.findAll();
      res.json(districts);
    } catch (error) {
      console.error('Error fetching districts:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllDistricts,
};
