const config = require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const planningRoute = require('./routes/planning');
const customersRoute = require('./routes/customers');
const resourceRoute = require('./routes/resources');
const homeRoute = require('./routes/home');
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//middleware

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

//folder for static files
app.use(express.static('public'));

app.use('/customers', customersRoute);
app.use('/resources', resourceRoute);
app.use('/planning', planningRoute);
app.use('*', homeRoute);

const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
