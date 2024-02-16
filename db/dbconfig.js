const dotenv = require('dotenv');
const { Client } = require('pg');

dotenv.config();

const connectionConfig = {
    host: process.env.HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
};

const client = new Client(connectionConfig);

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch(err => {
    console.error('Error connecting to PostgreSQL database:', err);
  });
  
  module.exports = client