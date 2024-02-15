const dotenv = require('dotenv').config();
const express = require('express');
const http = require('http');
const sequelize = require('./dbconfig');
const stateRoutes = require('./routes/stateRoutes');
const yearRoutes = require('./routes/yearRoutes');
const districtRoute = require('./routes/districtRoute');

// Initialize express app
const app = express();

// Middleware
app.use(express.json());

// Define API routes
app.use('/api', stateRoutes);
app.use('/api', yearRoutes);
app.use('/api', districtRoute);

// Set port
const PORT = process.env.PORT || 3000;

// Function to start the server
const startServer = async () => {
  try {
    // Authenticate with the database
    await sequelize.authenticate();
    console.log('Connected to the database.');

    // Start the server
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Start the server
startServer();
