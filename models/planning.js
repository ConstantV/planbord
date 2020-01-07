const dbConnection = require('./db');

function getAllPlanning(callback) {
  const qry = 'SELECT * from planning;';
  dbConnection.query(qry, (err, results, fields) => {
    console.log(results.length);
    if (err) {
      return callback(err, null);
    }
    if (results.length <= 0) {
      return callback(Error('No records found'), null);
    } else {
      return callback(null, results);
    }
  });
}

module.exports = { getAllPlanning };
