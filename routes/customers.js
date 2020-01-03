const express = require('express');
const router = express.Router();

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
  console.log(`Klant met id ${id} opgevraagd`);

  customers.getCustomerByID(id, function(err, data) {
    //console.log(data);
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

router.put('/edit/:id', (req, res) => {
  console.log(id);

  customers.getCustomerByID(id, function(err, data) {
    console.log(data);
    // if (!err) {
    //   let{ }= data

    // } else {
    //   res.send('' + err); // ! Hoe kan dit anders???
    // }
    //res.end();
  });

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
