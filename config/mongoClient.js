const { MongoClient } = require('mongodb');
const envOptions = require('./envOptions');
require('dotenv').config(envOptions);

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error('Please specify MongoDB URI');
}

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;
