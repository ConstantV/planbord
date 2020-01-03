const dbConnection = require('./db');

function getAllCustomers(callback) {
  const qry = 'SELECT * from customers;';
  dbConnection.query(qry, (err, results, fields) => {
    //console.log(results.length);
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

function updateCustomer(id, callback) {
  const qry =
    "UPDATE customers SET name = 'Marga Verweij', phone='06-21525610' where ID=" +
    id +
    ';';

  dbConnection.query(qry, (err, results, fields) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, results);
    }
  });
}

//info INSERT
function insertCustomer(req, callback) {
  let { name, phone } = req.body;
  console.log(name);
  console.log(phone);

  const qry =
    "INSERT INTO customers (name, phone) VALUES ('" +
    name +
    "', '" +
    phone +
    "');";
  dbConnection.query(qry, (err, results) => {
    if (err) {
      return callback(err);
    } else return callback(null, 'OK');
  });
}

function deleteCustomer(id, callback) {}

module.exports = {
  getAllCustomers,
  getCustomerByID,
  updateCustomer,
  insertCustomer,
  deleteCustomer
};
