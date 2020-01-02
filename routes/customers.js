const express = require('express');
const router = express.Router();
const customers = require('../db/customers');

//info Table =Customers
router.get('/', (req, res) => {
  console.log('Klanten opgevraagd');
  customers.getAllCustomers(function(err, data) {
    console.log(err);
    if (!err) {
      res.send(data);
    } else {
      res.send('' + err); // ! Hoe kan dit anders???
    }
  });
});

//info findCustomerByID
router.get('/:id', (req, res) => {
  var id = req.params.id;
  console.log(`Klant met id ${id} opgevraagd`);

  customers.getCustomerByID(id, function(err, data) {
    console.log(err);
    if (!err) {
      res.send(data);
    } else {
      res.send('' + err); // ! Hoe kan dit anders???
    }
  });
});

module.exports = router;
