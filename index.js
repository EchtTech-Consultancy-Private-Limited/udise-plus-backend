const dotenv = require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const stateRoutes = require('./routes/stateRoutes');
const yearRoutes = require('./routes/yearRoutes');
const sequelize = require('./dbconfig');
app.use(express.json())


const PORT = process.env.PORT || 3000;

// routes
app.use('/api', stateRoutes);
app.use('/api', yearRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
