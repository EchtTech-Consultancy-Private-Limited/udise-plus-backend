
require('dotenv').config();
const cors = require('cors');
const express = require('express');
// Initialize express app
const app = express();
app.use(cors());
const http = require('http');
const sequelize = require('./dbconfig');
app.use(express.json());
app.use("/api/v1", require('./routes/index'));

// Set port
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database.');

    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
startServer();
