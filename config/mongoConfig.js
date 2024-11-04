const { MongoClient } = require('mongodb');
require('dotenv').config();

let mClient = new MongoClient(process.env.DATABASE_URL);

module.exports = mClient