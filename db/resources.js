const dbConnection = require('./db');

function getAllResources(callback) {
  const qry = 'SELECT * from resources;';
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

function getResourceByID(id, callback) {
  const qry = 'SELECT * from resources WHERE ID = ' + id + ';';
  dbConnection.query(qry, (err, results, fields) => {
    if (err) return callback(err);
    if (results.length <= 0) {
      return callback(Error('No records found'), null);
    } else {
      return callback(null, results);
    }
  });
}

module.exports = { getAllResources, getResourceByID };
