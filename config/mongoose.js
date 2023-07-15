const mongooose = require('mongoose');

mongooose.connect("mongodb://127.0.0.1:27017/HospitalAPI");

const db = mongooose.connection;

db.on('error', console.error.bind(console, "Error connecting to DB"));

db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});

module.exports = db;