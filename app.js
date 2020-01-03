const config = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const planningRoute = require('./routes/planning');
const customersRoute = require('./routes/customers');
const resourceRoute = require('./routes/resources');

const app = express();

// date-fns
// const addMinutes = require('date-fns/addMinutes');
// const addHours = require('date-fns/addHours');
// const addDays = require('date-fns/addDays');
// const nlLocale = require('date-fns/locale/nl');
// const format = require('date-fns/format');

//default formats
// const defFormat = 'dd-MM-yyyy HH:mm';
// const locale = { locale: nlLocale };

// check env config
// if (config.error) {
//   console.log(config.error);
// }

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  //! AANPASSEN
  res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.use('/api/customers', customersRoute);
app.use('/api/resources', resourceRoute);
app.use('/api/planning', planningRoute);
const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
