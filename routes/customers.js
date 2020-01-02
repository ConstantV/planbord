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

router.put('/:id', (req, res) => {
  var id = req.params.id;
  console.log(`Update klant met id ${id}`);
  customers.updateCustomer(id, (err, data) => {
    if (!err) {
      console.log(`update klant met id ${id}`);
      res.send('okidoki');
    } else {
      res.send('Foutje, Bedankt!');
    }
  });
});

router.post('/', (req, res) => {
  console.log(req.body);

  customers.insertCustomer(req, function(err, data) {
    if (err) {
      console.log('Insert failed');
      res.send('Failed');
    } else {
      res.status(200).send('OK');
    }
  });
});

router.delete('/:id', (req, res) => {});

module.exports = router;
