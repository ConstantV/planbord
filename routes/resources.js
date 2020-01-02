const express = require('express');
const router = express.Router();
const resources = require('../db/resources');

//info werknemers Table = resources
router.get('/', (req, res) => {
  console.log('Werknemers opgevraagd');
  resources.getAllResources(function(err, data) {
    console.log(err);
    if (!err) {
      res.send(data);
    } else {
      res.send('' + err); // ! Hoe kan dit anders???
    }
  });
});

//info findResourceByID
router.get('/:id', (req, res) => {
  var id = req.params.id;
  console.log(`Werknemer met id ${id} opgevraagd`);
  resources.getResourceByID(id, function(err, data) {
    console.log(err);
    if (!err) {
      res.send(data);
    } else {
      res.send('' + err); // ! Hoe kan dit anders???
    }
  });
});

module.exports = router;
