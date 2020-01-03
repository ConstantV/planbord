const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');

app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

router.get('/about', (req, res) => {
  res.render('about'); //! waarom doet ie t niet ??? =CatchAll in app.js
});

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
