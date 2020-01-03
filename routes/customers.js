const express = require('express');
const router = express.Router();
const dbConnection = require('../db/db');

const exphbs = require('express-handlebars');

app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const customers = require('../db/customers');

//info Table =Customers
router.get('/', (req, res) => {
  customers.getAllCustomers(function(err, data) {
    if (!err) {
      res.render('customers', { data });
    } else {
      res.send('' + err); // ! Hoe kan dit anders???
    }
  });
});

//info findCustomerByID
router.get('/edit/:id', (req, res) => {
  var id = req.params.id;
  customers.getCustomerByID(id, function(err, data) {
    if (!err) {
      let {
        aanhef,
        first_name,
        last_name,
        address,
        postcode,
        city,
        dateOfBirth,
        email,
        phone
      } = data[0];

      res.render('customer_edit', {
        aanhef,
        first_name,
        last_name,
        address,
        postcode,
        city,
        dateOfBirth,
        email,
        phone
      });
    } else {
      res.send('' + err); // ! Hoe kan dit anders???
    }
  });
});
//!--------------------------------------------------
router.post('/edit/:id', (req, res) => {
  var id = req.params.id;

  var qry =
    "UPDATE customers SET aanhef='" +
    req.body.aanhef +
    "', first_name = '" +
    req.body.first_name;
  qry +=
    "', last_name = '" +
    req.body.last_name +
    "', address = '" +
    req.body.address +
    "', postcode = '";
  qry +=
    req.body.postcode +
    "', city= '" +
    req.body.city +
    "', email= '" +
    req.body.email +
    "', phone= '" +
    req.body.phone +
    "' WHERE ID =" +
    id +
    ';';

  console.log(qry);

  dbConnection.query(qry, (err, results) => {
    if (!err) res.render('customers');
  });

  // //console.log(req.body);
  // // let { phone } = req.body;
  // // console.log(phone);

  // let data = req.body;
  // customers.updateCustomer(id, (err, data) => {
  //   if (!err) {
  //     //console.log(`update klant met id ${id}`);
  //     res.send('okidoki');
  //   } else {
  //     console.log(err);

  //     res.send('Foutje, Bedankt!');
  //   }
  // });
});

//!--------------------------------------------------

router.post('/add', (req, res) => {
  customers.insertCustomer(req, function(err, data) {
    if (err) {
      console.log('Insert failed');
      res.send('Failed');
    } else {
      res.render('customers'); //laat alle klanten zien
    }
  });
});

router.delete('/:id', (req, res) => {});

module.exports = router;
