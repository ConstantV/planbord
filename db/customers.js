const dbConnection = require('./db');

function getAllCustomers(callback) {
  const qry = 'SELECT * from customers;';
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

function getCustomerByID(id, callback) {
  const qry = 'SELECT * from customers WHERE ID = ' + id + ';';
  dbConnection.query(qry, (err, results, fields) => {
    if (err) return callback(err);
    if (results.length <= 0) {
      return callback(Error('No records found'), null);
    } else {
      return callback(null, results);
    }
  });
}

module.exports = { getAllCustomers, getCustomerByID };
